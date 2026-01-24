---
title: Multi-Agent RL with Neuroevolution (TIFR)
publishDate: 2023-11-01 00:00:00
img: ./assets/stock-5.png
img_alt: RL agents in a simulated environment diagram
description: |
  Neuroevolution-based multi-agent RL in PyTorch; 85% training efficiency improvement with distributed preprocessing.
tags:
  - Reinforcement Learning
  - Research
technologies:
  - name: Python
    icon: 🐍
  - name: PyTorch
    icon: 🔥
  - name: NumPy
    icon: 🔢
  - name: Hadoop
    icon: 🐘
  - name: Spark
    icon: ⚡
  - name: SQL
    icon: 🗄️
  - name: NoSQL
    icon: 📄
---

## Overview

Designed and executed multi-agent reinforcement learning simulations at the Tata Institute of Fundamental Research (TIFR), leveraging neuroevolution algorithms to train agents in cooperative and competitive environments. The project achieved an 85% improvement in training efficiency through distributed data processing and novel architectural optimizations.

## Key Features

- **85% Training Efficiency Improvement**

  Optimized training pipeline through distributed preprocessing, parallel evaluation, and smart batching strategies, reducing wall-clock training time from weeks to days.

- **Neuroevolution-Based Agent Training**

  Implemented evolutionary algorithms (NEAT, CPPN) to evolve neural network architectures and weights, enabling agents to discover novel behaviors without gradient descent.

- **Multi-Agent Coordination**

  Designed environments where multiple agents must cooperate or compete, studying emergent behaviors and communication protocols that arise from evolutionary pressure.

- **Distributed Big Data Pipeline**

  Built scalable data infrastructure using Hadoop and Spark to preprocess and analyze large-scale experiment data across NoSQL (JSON) and SQL databases.

- **Comprehensive Experiment Tracking**

  Logged millions of agent interactions, fitness evaluations, and network topologies to study evolutionary dynamics and reproducibility.

---

## Why This Project

Traditional gradient-based RL struggles with sparse rewards and non-differentiable objectives. Neuroevolution offers an alternative: evolve agents through selection pressure rather than backpropagation. I wanted to explore whether evolutionary approaches could discover creative solutions to multi-agent problems that gradient methods might miss. This research at TIFR focused on fundamental questions about cooperation, competition, and emergent intelligence.

---

## Approach

- **Hybrid Algorithms**: Combined neuroevolution with traditional RL techniques to leverage strengths of both — evolution for architecture search, gradients for fine-tuning.

- **Scalability First**: Designed the system for massive parallelization from day one, recognizing that evolution requires evaluating thousands of candidate solutions.

- **Data-Driven Analysis**: Treated RL experiments as big data problem — stored every evaluation in structured databases for post-hoc analysis and hypothesis testing.

- **Reproducible Research**: Implemented rigorous experiment tracking with random seed control, version management, and automated result aggregation.

---

## Architecture / Pipeline

1. **Environment Design**: Built custom multi-agent environments in PyTorch with configurable reward structures, observation spaces, and interaction rules (cooperative, competitive, mixed).

2. **Neuroevolution Engine**: Implemented NEAT (NeuroEvolution of Augmenting Topologies) to evolve both network architectures and weights simultaneously. Population size: 1000+ agents per generation.

3. **Distributed Evaluation**:
   - Parallelize fitness evaluation across CPU cores using multiprocessing
   - Batch environment simulations for GPU acceleration
   - Implement smart work-stealing to balance load

4. **Data Pipeline**:
   - **Hadoop**: Store raw simulation data (agent states, actions, rewards) in HDFS
   - **Spark**: Distributed preprocessing and feature extraction
   - **NoSQL (JSON)**: Store flexible experiment metadata and hyperparameters
   - **SQL**: Store structured results for statistical analysis

5. **Selection & Evolution**:
   - Tournament selection with elitism to preserve best agents
   - Crossover and mutation operators tailored to neural networks
   - Speciation to maintain diversity and prevent premature convergence

---

## Results & Impact

- **Training Speed**: Achieved 85% reduction in training time through distributed preprocessing and parallelized fitness evaluation, enabling rapid iteration on research hypotheses.

- **Emergent Behaviors**: Observed sophisticated coordination strategies emerge without explicit programming — agents learned communication protocols, division of labor, and cooperative swarming.

- **Scalability**: Successfully scaled experiments to populations of 5000+ agents across 100+ generations, generating terabytes of interaction data.

- **Research Insights**: Published findings contributed to understanding how evolutionary pressure shapes multi-agent cooperation and whether evolved behaviors transfer across environments.

- **Infrastructure Reusability**: Built modular data pipeline used by other researchers at TIFR for subsequent RL projects.

---

## What I'd Do Next

- **GPU-Accelerated Evolution**: Migrate fitness evaluation entirely to GPU using batched environment simulations for 10x further speedup.

- **Meta-Learning Integration**: Combine neuroevolution with meta-learning to evolve agents that can quickly adapt to new tasks with few samples.

- **Hierarchical Evolution**: Evolve multi-level agent architectures where high-level policies are evolved separately from low-level controllers.

- **Transfer Learning**: Study whether agents evolved in simple environments can bootstrap learning in complex domains, reducing training cost.

- **Real-World Applications**: Apply multi-agent neuroevolution to robotics swarms, traffic optimization, or distributed system control.
