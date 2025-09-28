---
title: Question Answering with Transformers
publishDate: 2025-06-15 00:00:00
img: /assets/stock-1.png
img_alt: Code editor with transformer model diagram overlay
description: |
  Interactive QA system on custom context using deepset/roberta-base-squad2; deployed on AWS with CUDA optimization.
tags:
  - NLP
  - LLM
  - Backend
---

This project implements an end‑to‑end question answering pipeline using Hugging Face Transformers.

**Highlights**
- Cut inference latency by ~40% via mixed precision and CUDA memory profiling.
- Profiled with `torch.profiler` and `nvidia-smi` to balance DL framework overheads and GPU utilization.
- Accepts arbitrary context and returns extractive answers in real time.

**Stack**: Python, PyTorch, Transformers, CUDA, AWS EC2/S3
**Repo**: https://github.com/rheanair7/Question-Answering-with-Hugging-Face-Transformers.git

## Why this project
I wanted to solve a concrete problem and learn by building. This section explains the motivation and the end user value.

## Approach
Brief outline of the method, tradeoffs, and design choices.

## Architecture / Pipeline
A concise walkthrough of the components, data flow, and key libraries.

## Results & Impact
What worked, what improved, and evidence (metrics, examples, UX).

## What I'd do next
Clear next steps to make this more robust or production-ready.

