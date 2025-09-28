---
title: NLP for Customer Support
publishDate: 2025-07-10 00:00:00
img: ./assets/stock-2.png

img_alt: Conversation bubbles overlaid on charts

description: |
  BERT sentiment + BERTopic topic modeling on telecom call transcripts to surface complaint themes and coaching opportunities.
tags:
  - NLP
  - Topic Modeling
---

This project builds an **NLP pipeline** to automatically extract themes and sentiment from telecom customer support conversations. Instead of manually reviewing thousands of transcripts, the system delivers structured insights that help identify emerging issues, track customer sentiment, and improve agent training.



## Pipeline
- **Sentiment Analysis (BERT):** Classifies each utterance as positive or negative to capture customer emotion at the sentence level.  
- **Topic Modeling (BERTopic + Sentence Embeddings):** Groups related conversations into meaningful clusters (e.g., billing issues, technical failures).  
- **Visualization:** Tracks how sentiment and topics shift across speakers and over time to highlight friction points.  

**Data:** Talkmap Telecom Conversation Corpus (Hugging Face)  
**Stack:** Python, Transformers, BERTopic, Sentence-Transformers, Pandas, Matplotlib  



## Why this project
I wanted to tackle a **real-world business pain point**: customer feedback is abundant but often trapped in unstructured text. Telecom companies process thousands of calls daily, but only a fraction are ever analyzed. By automating this process, businesses can surface trends, spot dissatisfaction early, and make evidence-based improvements in service delivery.



## Approach
- Built a modular pipeline to experiment with different NLP methods quickly.  
- Balanced trade-offs between model accuracy and runtime efficiency, especially when processing long transcripts.  
- Focused on interpretability — outputs are not just metrics but **visual narratives** that non-technical teams (support managers, trainers) can understand.  



## Architecture / Pipeline
1. **Data Preprocessing:** Clean raw transcripts (timestamps, fillers, speaker tags).  
2. **Embedding Generation:** Encode utterances using Sentence Transformers.  
3. **Sentiment Classification:** Apply a fine-tuned DistilBERT model for polarity.  
4. **Topic Modeling:** Use BERTopic to cluster embeddings into coherent themes.  
5. **Visualization:** Produce dashboards showing trends by agent, time, and topic.  



## Results & Impact
- Identified recurring themes such as *billing disputes* and *network outages* across thousands of conversations.  
- Detected correlations between negative sentiment and long resolution times.  
- Created visual dashboards that help supervisors **prioritize coaching** on specific topics.  



## What I’d do next
- Scale the pipeline to process **real-time streams** of support calls.  
- Incorporate **multi-label classification** (e.g., issue type + urgency).  
- Deploy dashboards via **Streamlit or Tableau** for easier adoption.  
- Explore **LLM-based summarization** to complement topic modeling with concise call summaries.  



