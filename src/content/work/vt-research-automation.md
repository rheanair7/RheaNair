---
title: Research Workflow Automation (Virginia Tech)
publishDate: 2024-06-15 00:00:00
img: ./assets/stock-4.png
img_alt: Documents and charts illustrating automated workflows
description: |
  Automated academic paper parsing & classification; reduced review cycle from ~14 days to ~2 days with Python workflows.
tags:
  - Automation
  - NLP
technologies:
  - name: Python
    icon: 🐍
  - name: BeautifulSoup
    icon: 🥣
  - name: Pandas
    icon: 🐼
  - name: spaCy
    icon: 📝
  - name: Scikit-learn
    icon: 🤖
  - name: Matplotlib
    icon: 📈
  - name: Seaborn
    icon: 🌊
---

## Overview

Built an automated research workflow system for Virginia Tech faculty to streamline academic paper review and categorization. The system parses research papers, extracts metadata, applies NLP classification, and generates visual summary reports. This automation reduced the faculty review cycle from approximately 14 days to just 2 days — an 85% efficiency gain.

## Key Features

- **Automated Paper Parsing & Metadata Extraction**

  Scrapes and parses academic papers from multiple sources (PDFs, HTML, XML) using BeautifulSoup and custom parsers. Extracts titles, authors, abstracts, citations, and publication metadata.

- **NLP-Based Automatic Classification**

  Applies spaCy NLP pipelines and scikit-learn classifiers to automatically categorize papers by research domain, methodology, and relevance score, eliminating manual triage.

- **85% Efficiency Gain**

  Reduced manual review time by ~70% (from 14 days to 2 days) through automated filtering, classification, and prioritization of papers for faculty review.

- **Visual Summary Reports**

  Generates automated reports with Matplotlib and Seaborn visualizations showing research trends, citation patterns, topic distributions, and collaboration networks.

- **Scalable Batch Processing**

  Handles hundreds of papers per batch with parallel processing, smart caching, and incremental updates to avoid re-processing previously analyzed papers.

---

## Why This Project

Faculty researchers drown in papers — keeping up with the latest research means reviewing hundreds of papers monthly. Manual review is slow, inconsistent, and doesn't scale. I wanted to build a system that could act as a "smart research assistant," automatically filtering relevant papers and surfacing key insights. This project at Virginia Tech directly addressed a pain point affecting faculty productivity.

---

## Approach

- **Parse-First Strategy**: Built robust parsers for multiple paper formats (PDF, arXiv HTML, PubMed XML) to handle the heterogeneous landscape of academic publishing.

- **Hybrid Classification**: Combined rule-based filters (keyword matching, citation thresholds) with ML classifiers (Naive Bayes, SVM) for higher precision than either approach alone.

- **Human-in-the-Loop**: Designed system to prioritize papers for human review rather than fully automate decisions, maintaining faculty oversight on important selections.

- **Iterative Improvement**: Logged faculty feedback on classifications to continuously retrain models and improve accuracy over time.

---

## Architecture / Pipeline

1. **Data Ingestion**: Collect papers from multiple sources:
   - PDF extraction using PyPDF2 and pdfplumber
   - HTML scraping with BeautifulSoup for arXiv, PubMed
   - API integration with CrossRef for metadata enrichment

2. **Metadata Extraction**: Parse structured information:
   - Title, authors, affiliations, publication venue
   - Abstract, keywords, citation counts
   - Publication date, DOI, funding information

3. **NLP Processing Pipeline**:
   - **Text Preprocessing**: Tokenization, stopword removal, lemmatization with spaCy
   - **Feature Extraction**: TF-IDF vectorization for abstract and title text
   - **Named Entity Recognition**: Extract institutions, methodologies, datasets mentioned

4. **Classification Layer**:
   - **Domain Classification**: Multi-label classifier (Naive Bayes) for research area (CS, ML, HCI, etc.)
   - **Relevance Scoring**: SVM classifier trained on faculty feedback to predict relevance
   - **Methodology Detection**: Rule-based extraction of research methods (survey, experiment, simulation)

5. **Reporting & Visualization**:
   - Generate PDF reports with Matplotlib/Seaborn charts:
     - Topic distribution over time
     - Citation network graphs
     - Author collaboration patterns
     - Relevance score distributions

---

## Results & Impact

- **Time Savings**: Reduced faculty review cycle from 14 days to 2 days, freeing up 12 days per month for actual research activities.

- **Precision**: Achieved 85% classification accuracy on relevance scoring after initial training, continuously improving through faculty feedback.

- **Throughput**: Automated processing of 500+ papers per month that previously required manual review, significantly expanding research coverage.

- **Faculty Adoption**: System adopted by 5+ faculty members across different departments, demonstrating cross-discipline applicability.

- **Research Insights**: Visual reports surfaced emerging research trends and collaboration opportunities that were previously hidden in the volume of papers.

---

## What I'd Do Next

- **Deep Learning Classification**: Replace scikit-learn classifiers with transformer-based models (SciBERT, SPECTER) for better semantic understanding of research papers.

- **Citation Graph Analysis**: Build citation network analysis using NetworkX to identify influential papers and emerging research clusters.

- **Automated Summarization**: Add abstractive summarization using T5 or GPT models to generate concise paper summaries for faster review.

- **Recommendation System**: Implement collaborative filtering to recommend papers based on faculty reading history and similar researchers' interests.

- **Real-Time Monitoring**: Deploy as continuous service that monitors arXiv, PubMed, and conference proceedings for relevant new papers daily.
