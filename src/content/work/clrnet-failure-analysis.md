---
title: CLRNet Lane Detection — Failure Analysis
publishDate: 2025-05-12 00:00:00
img: ./assets/stock-1.png
img_alt: CLRNet lane detection Grad-CAM visualization on CULane dataset
description: |
  Scenario-based failure analysis of CLRNet across 10 driving conditions on CULane. Grad-CAM interpretability, CLAHE night augmentation, and TTA experiments on a ResNet18 backbone.
tags:
  - PyTorch
  - Computer Vision
  - Grad-CAM
  - ResNet18
  - CULane
---

## The problem

Lane detection models are typically evaluated on a single aggregate F1 score. That number hides a lot — a model that performs at 0.93 in normal daylight can collapse to 0.00 in a crossroad scenario or 0.52 on roads with no visible markings. We wanted to know exactly *where* CLRNet fails, and *why*.

The question: can we build a systematic failure map across driving scenarios, and use it to guide targeted improvements?

## Approach

We ran CLRNet with a ResNet18 backbone on the CULane benchmark, which partitions its test set into 10 scenario-specific subsets: Normal, Crowd, Highlight, Shadow, No Line, Arrow, Curve, Crossroad, Night, and overall.

**Baseline profiling first.** We established per-scenario F1 scores before touching any training parameters. This gave us a clear signal: crossroad was a total failure (0.000), no-line was weak (0.522), and curve lagged significantly (0.697).

**Interpretability with Grad-CAM.** We implemented Grad-CAM on `layer4[-1]` of the ResNet18 backbone to visualize which image regions the model attended to when making lane predictions. For night scenes, the model often fixated on headlight reflections rather than actual lane markings. We also attempted LayerCAM as an alternative — it produced noisier activations and we treated this as a meaningful negative finding.

**Targeted augmentation for night.** The night scenario had a recoverable gap (baseline 0.749). We applied CLAHE (Contrast Limited Adaptive Histogram Equalization) to the ~9,757 night images to improve edge contrast in low-light conditions and fine-tuned on this subset.

**Test-Time Augmentation (TTA).** We applied horizontal flipping as a TTA strategy across scenarios — with one exception. Curve detection is direction-sensitive, so flipping is semantically invalid there. TTA was excluded from curve evaluation. Results: TTA hurt performance across all scenarios it was applied to, which we report as a finding rather than suppressing.

## Results

| Scenario   | Baseline F1 | Post-intervention F1 | Delta  |
|------------|-------------|----------------------|--------|
| Normal     | 0.933       | —                    | —      |
| Crowd      | 0.786       | —                    | —      |
| Highlight  | 0.740       | —                    | —      |
| Shadow     | 0.792       | —                    | —      |
| No Line    | 0.522       | —                    | —      |
| Arrow      | 0.899       | —                    | —      |
| Curve      | 0.697       | —                    | —      |
| Crossroad  | 0.000       | —                    | —      |
| Night      | 0.749       | **0.752**            | +0.003 |
| Overall    | 0.796       | —                    | —      |

Night improved modestly after CLAHE fine-tuning. The crossroad failure is architectural — CLRNet's row-anchor representation cannot detect lane segments that cross the full frame horizontally, which is precisely what crossroads require.

## Key findings

- **Crossroad is an architectural blind spot.** The row-anchor formulation in CLRNet is geometrically incompatible with crossroad geometry. No augmentation strategy fixes this — it requires a different representation.
- **TTA with flipping is universally harmful here.** Symmetry assumptions break down for directional markings.
- **LayerCAM is not a reliable alternative to Grad-CAM** for this backbone/task combination — noisier and less interpretable.
- **Night is recoverable with CLAHE** but gains are marginal, suggesting the bottleneck is model capacity at night, not just contrast.

## What I'd do next

- Replace row-anchor representation with a **parametric curve fitting** approach (e.g. PolyLaneNet) to fix the crossroad failure.
- Try **night-specific pretraining** on a synthetic nighttime dataset before fine-tuning on CULane night images.
- Explore **attention map regularization** to force the model away from headlight artifacts in night scenes.
- Run ablations on **CLAHE clip limit** — we used the default; tuning it may yield larger gains.
