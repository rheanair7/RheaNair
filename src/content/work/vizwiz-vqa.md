---
title: Multimodal VQA for Visual Accessibility
publishDate: 2025-03-01 00:00:00
img: ./assets/stock-2.png
img_alt: VizWiz visual question answering model predictions
description: |
  Built a multimodal VQA pipeline on the VizWiz dataset — images taken by blind users paired with spoken questions. Fine-tuned vision-language models to improve accessibility outcomes across three challenge tracks.
tags:
  - PyTorch
  - VQA
  - HuggingFace
  - BLIP-2
  - Accessibility
---

## The problem

VizWiz is a real-world dataset collected from blind users who photograph their surroundings and ask spoken questions about them. Unlike clean academic VQA benchmarks, VizWiz images are often blurry, poorly framed, or out of focus — making it a genuinely hard generalization problem for vision-language models.

The task: build a model that answers these questions accurately, including knowing when a question is unanswerable.

## Approach

**Challenge 1 — VQA accuracy.** Fine-tuned BLIP-2 on the VizWiz training set. Used prompt engineering to handle the answerability signal — if the model's confidence fell below a threshold, it predicted "unanswerable" rather than hallucinating an answer. Achieved **68.26%** on Challenge 1.

**Challenge 3 — Answer grounding.** Extended the pipeline to localize which region of the image the answer refers to. Used attention map extraction from the vision encoder to generate bounding box proposals. Achieved **81.36–81.41%**.

**Challenge 4 — Image quality prediction.** Trained a lightweight classifier to predict whether an image is suitable for answering before passing it to the VQA model. This acts as a quality gate, filtering out images where the model would likely fail anyway. Achieved **53.46%**.

## Results

| Challenge | Task | Score |
|-----------|------|-------|
| Challenge 1 | VQA accuracy | 68.26% |
| Challenge 3 | Answer grounding | 81.36–81.41% |
| Challenge 4 | Image quality prediction | 53.46% |

The grounding result (Challenge 3) was the strongest, suggesting the vision encoder's attention maps are well-calibrated for localization even when trained primarily for VQA.

## Key findings

- Answerability prediction is the biggest lever — filtering unanswerable questions before inference significantly improves effective accuracy.
- BLIP-2's frozen vision encoder generalizes surprisingly well to out-of-distribution imagery without full fine-tuning.
- Image quality is a learnable signal — even a simple classifier can identify low-quality inputs with reasonable precision.

## What I'd do next

- Replace the attention-based grounding with a proper referring expression model (e.g. MDETR) for tighter localization.
- Explore instruction-tuned LLaVA variants as the VQA backbone.
- Build a user-facing demo with real-time answerability feedback.
