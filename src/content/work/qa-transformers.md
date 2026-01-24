---
title: Question Answering with Transformers
publishDate: 2025-06-15 00:00:00
img: ./assets/stock-1.png
img_alt: Code editor with transformer model diagram overlay
description: |
  Interactive QA system using deepset/roberta-base-squad2 for extractive question answering on custom context passages.
tags:
  - NLP
  - Transformers
technologies:
  - name: Python
    icon: 🐍
  - name: PyTorch
    icon: 🔥
  - name: Transformers
    icon: 🤗
  - name: RoBERTa
    icon: 🤖
  - name: Google Colab
    icon: 📓
githubUrl: https://github.com/rheanair7/Question-Answering-with-Hugging-Face-Transformers
---

## Overview

An interactive question answering system built with Hugging Face Transformers that leverages the deepset/roberta-base-squad2 model. The system accepts any context paragraph and user question, then extracts the most probable answer using extractive QA techniques. Designed for educational exploration of transformer architectures and practical NLP applications.

## Key Features

- **Real-Time Terminal Interaction**

  Interactive command-line interface where users input context passages and questions, receiving immediate extractive answers from the model.

- **SQuAD 2.0 Compatibility**

  Handles both answerable and unanswerable questions using RoBERTa fine-tuned on SQuAD 2.0, providing confidence scores for answer validity.

- **Extractive Answer Spans**

  Identifies precise answer locations within the context by generating start/end logits and decoding the highest-probability text span.

- **Lightweight Local Execution**

  Runs in Google Colab or local environments without requiring extensive compute infrastructure, making it accessible for learning and prototyping.

- **Pre-trained Model Integration**

  Utilizes deepset/roberta-base-squad2 from Hugging Face Hub, demonstrating how to leverage state-of-the-art pre-trained models for downstream tasks.

---

## Why This Project

Traditional search returns documents, but question answering returns *answers*. This project demonstrates how modern transformer models can "read" passages and extract specific information on demand. It's designed as an educational foundation for understanding how extractive QA works, how transformers process language, and how to integrate pre-trained models into practical applications.

---

## Approach

- **Model Selection**: Chose RoBERTa-base fine-tuned on SQuAD 2.0 for robust performance on extractive QA tasks, including the ability to recognize unanswerable questions.

- **Interactive Design**: Built a terminal-based interface to make the technology accessible and demonstrate real-time inference without complex UI requirements.

- **Educational Focus**: Structured the code to be readable and well-documented, serving as a learning resource for others exploring transformers and NLP.

- **Minimal Dependencies**: Kept the implementation lightweight using just PyTorch and Transformers library, avoiding over-engineering.

---

## Architecture / Pipeline

1. **Input Collection**: User provides a context paragraph via terminal input, followed by a question about the content.

2. **Tokenization**: Both context and question are tokenized using the RoBERTa tokenizer, which converts text into token IDs the model can process.

3. **Model Inference**: The deepset/roberta-base-squad2 model processes the tokenized inputs and generates start/end logits indicating the most likely answer span positions.

4. **Answer Extraction**:
   - Apply softmax to start/end logits to get probability distributions
   - Identify the highest-probability span that forms a valid answer
   - Decode token IDs back to natural language text

5. **Output Presentation**: Display the extracted answer to the user along with confidence indicators.

**Example Workflow:**
- **Context**: "The prefrontal cortex is involved in planning complex cognitive behavior, personality expression, decision making, and moderating social behavior. Damage to this region can lead to changes in personality, difficulty in planning or focusing, and inappropriate social responses."
- **Question**: "How does damage to the prefrontal cortex affect behavior?"
- **Answer**: "changes in personality, difficulty in planning or focusing, and inappropriate social responses"

---

## Results & Impact

- **Accurate Extraction**: Successfully extracts precise answer spans from diverse context passages, demonstrating the power of pre-trained language models.

- **Educational Value**: Serves as a practical learning resource with 2 GitHub stars, helping others understand transformer-based QA systems.

- **SQuAD 2.0 Handling**: Correctly identifies when questions are unanswerable based on the provided context, preventing hallucinated responses.

- **Accessible Implementation**: Runs in Google Colab without specialized hardware, lowering the barrier to entry for NLP experimentation.

- **Foundation for Extension**: Provides a clean codebase that can be extended with features like multi-document QA, answer ranking, or web interface integration.

---

## What I'd Do Next

- **Web Interface**: Build a Flask or Streamlit frontend to make the system more accessible to non-technical users.

- **Multi-Document QA**: Extend to retrieve relevant passages from large document collections using dense retrieval (DPR, FAISS) before answering.

- **Confidence Thresholds**: Add configurable confidence thresholds to filter low-quality answers and improve reliability.

- **Generative QA**: Experiment with T5 or GPT models for abstractive (generative) answers that can synthesize information beyond extractive spans.

- **Batch Processing**: Add capability to process multiple questions in parallel for efficiency when analyzing large question sets.
