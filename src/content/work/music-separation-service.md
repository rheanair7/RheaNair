---
title: Music Separation as a Service (MSaaS)
publishDate: 2024-08-20 00:00:00
img: ./assets/stock-6.png
img_alt: Audio waveforms and cloud infrastructure diagram
description: |
  Cloud-native audio processing platform on Kubernetes that separates music into individual instrument tracks using Demucs (Facebook AI Research).
tags:
  - Cloud
  - Machine Learning
  - Backend
technologies:
  - name: Python
    icon: 🐍
  - name: Flask
    icon: 🌶️
  - name: Kubernetes
    icon: ☸️
  - name: Docker
    icon: 🐳
  - name: Redis
    icon: 🔴
  - name: MinIO
    icon: 📦
  - name: Demucs
    icon: 🎵
githubUrl: https://github.com/rheanair7/Music-Separations-as-a-Service
---

## Overview

MSaaS is a cloud-native audio processing platform that automatically separates music into individual instrument tracks (stems). Built as a scalable microservices architecture on Kubernetes, the system accepts MP3 uploads via REST API, queues processing tasks in Redis, and uses worker pods running Demucs (Facebook AI Research) to extract vocals, drums, bass, and other instruments. Processed stems are stored in MinIO S3-compatible object storage for retrieval.

## Key Features

- **Automatic Stem Separation with Demucs**

  Leverages Facebook AI Research's Demucs deep learning model to separate audio into distinct tracks: vocals, drums, bass, and other instruments with high fidelity.

- **Scalable Microservices Architecture**

  Independent services for API management, task processing, and storage that can scale horizontally based on demand using Kubernetes orchestration.

- **Asynchronous Job Processing**

  Redis-based queue system (LPUSH/BLPOP) handles task distribution, allowing the API to return immediately while workers process audio in the background.

- **S3-Compatible Object Storage**

  MinIO provides reliable, scalable storage for both uploaded files and separated stems with familiar S3-compatible API for easy integration.

- **Multi-Environment Deployment**

  Supports both local Kubernetes development (via `./deploy-local-dev.sh`) and production deployment on Google Kubernetes Engine (GKE).

---

## Why This Project

Audio source separation is a computationally intensive task that traditionally required expensive software or manual editing. Musicians, DJs, and content creators need tools to isolate vocals for remixing, extract drums for sampling, or remove background music from recordings. I wanted to build a cloud-native service that makes state-of-the-art source separation accessible through a simple API, demonstrating how to architect ML-powered microservices that scale.

---

## Approach

- **Microservices Design**: Separated concerns into distinct services (API, workers, queue, storage) to enable independent scaling and fault tolerance.

- **Queue-Based Architecture**: Used Redis for asynchronous task processing to decouple API requests from heavy ML computation, preventing timeouts and improving responsiveness.

- **Container-Native**: Packaged all components in Docker containers and orchestrated with Kubernetes for consistent deployments across local and cloud environments.

- **AI Model Integration**: Integrated Demucs pre-trained models without requiring custom training, focusing on infrastructure and deployment patterns rather than model development.

---

## Architecture / Pipeline

1. **REST API Service (Flask)**: Accepts MP3 file uploads via HTTP POST, generates unique job IDs, stores files in MinIO, and enqueues processing tasks in Redis.

2. **Redis Queue**: Manages asynchronous task distribution using LPUSH (producer) and BLPOP (consumer) operations to decouple API from workers.

3. **Worker Service**:
   - Polls Redis queue for new jobs
   - Downloads audio files from MinIO
   - Executes Demucs separation algorithm to extract stems
   - Uploads separated tracks (vocals.wav, drums.wav, bass.wav, other.wav) back to MinIO

4. **MinIO Object Storage**: S3-compatible storage for:
   - Input audio files
   - Separated stem files
   - Metadata and job artifacts

5. **Kubernetes Orchestration**:
   - Deployments for API and worker services
   - ConfigMaps for environment variables
   - Secrets for credentials
   - Services for internal networking
   - Horizontal Pod Autoscaling for workers based on queue depth

**Technology Stack Breakdown:**
- **Languages**: Python (71.9%), Shell (28.1%)
- **Framework**: Flask for REST API
- **ML Processing**: Demucs (PyTorch-based)
- **Orchestration**: Kubernetes + Docker
- **Queue**: Redis
- **Storage**: MinIO (S3-compatible)

---

## Results & Impact

- **Cloud-Native Architecture**: Successfully deployed ML workloads on Kubernetes, demonstrating patterns for scaling compute-intensive AI services.

- **Separation Quality**: Achieves high-quality stem separation using Facebook AI Research's state-of-the-art Demucs models without custom training.

- **Development Workflow**: `./deploy-local-dev.sh` script enables rapid local testing with Redis and MinIO, reducing cloud costs during development.

- **Scalability**: Worker pods can scale independently based on queue depth, handling burst workloads without degrading API responsiveness.

- **Production Ready**: Deployed on Google Kubernetes Engine (GKE) with multi-environment configuration for dev/staging/prod.

---

## What I'd Do Next

- **GPU Acceleration**: Migrate Demucs inference to GPU-enabled worker pods for 5-10x speedup on large files.

- **Progress Tracking**: Add WebSocket endpoints to stream real-time processing progress to clients.

- **Multiple Models**: Support switching between Demucs variants (2-stem, 4-stem, 6-stem) based on user requirements and quality/speed tradeoffs.

- **Batch Processing**: Add batch upload capability to process multiple songs in a single API call with status tracking.

- **Web Frontend**: Build React frontend with drag-and-drop upload, progress visualization, and inline audio player for previewing stems.

- **Cost Optimization**: Implement intelligent worker auto-scaling based on time-of-day patterns to reduce idle pod costs.
