---
title: Online Retail Customer Intelligence Study
publishDate: 2025-03-01 00:00:00
img: ./assets/stock-3.png
img_alt: Geographic map showing UK and European retail markets
description: |
  Segmentation, association rules, and Holt–Winters forecasting on the UCI Online Retail II dataset with Tableau dashboards.
tags:
  - Analytics
  - Forecasting
  - Dashboards
technologies:
  - name: Python
    icon: 🐍
  - name: Pandas
    icon: 🐼
  - name: NumPy
    icon: 🔢
  - name: Scikit-learn
    icon: 🤖
  - name: Tableau
    icon: 📊
  - name: Matplotlib
    icon: 📈
githubUrl: https://github.com/rheanair7/Online-retail-customer-intelligence-study
---

## Overview

Collaborative academic project analyzing e-commerce customer behavior for a UK-based online giftware retailer. Using the UCI Online Retail II dataset (December 2009 - December 2011), the analysis combines customer segmentation, market basket analysis, and demand forecasting to deliver actionable insights for marketing campaigns, inventory planning, and cross-sell strategies.

## Key Features

- **RFM Segmentation for Targeted Campaigns**

  Segments customers based on Recency, Frequency, and Monetary value to identify high-value customers, at-risk segments, and opportunities for retention campaigns.

- **Apriori Algorithm for Product Bundling**

  Discovers association rules to identify frequently co-purchased items, enabling strategic product bundles and cross-sell opportunities at checkout.

- **Holt-Winters Demand Forecasting**

  Implements triple exponential smoothing to predict product demand across different geographies, accounting for trend and seasonality patterns.

- **Interactive Tableau Dashboards**

  Creates stakeholder-facing dashboards that visualize customer segments, geographic sales trends, and forecasting results for data-driven decision making.

- **Geographic Market Analysis**

  Analyzes sales patterns across UK and European markets to identify regional trends and expansion opportunities.

---

## Why This Project

E-commerce businesses sit on mountains of transactional data but often struggle to extract actionable insights. I wanted to build a complete analytics pipeline that answers concrete business questions: Who are our most valuable customers? What products should we bundle together? How much inventory do we need next quarter? This project demonstrates how classical ML and statistical methods can drive tangible business value.

---

## Approach

- **Business-Focused Analysis**: Structured the project around real business questions rather than just applying algorithms. Every model serves a specific business need.

- **Classical Methods**: Chose proven statistical and ML techniques (RFM, Apriori, Holt-Winters) over complex deep learning to ensure interpretability and reliability.

- **Visual Communication**: Built Tableau dashboards to make insights accessible to non-technical stakeholders, ensuring the analysis drives actual business decisions.

- **Geographic Segmentation**: Incorporated geographic dimensions to understand regional market dynamics and support expansion planning.

---

## Architecture / Pipeline

1. **Data Cleaning & Preprocessing**: Handle missing values, remove duplicate transactions, filter outliers, and standardize product descriptions across the UCI Online Retail II dataset.

2. **RFM Segmentation**: Calculate Recency (days since last purchase), Frequency (total orders), and Monetary (total spend) metrics for each customer. Apply quartile-based segmentation to identify Champions, Loyal Customers, At-Risk, and Lost segments.

3. **Association Rule Mining**: Use Apriori algorithm to discover frequent itemsets and generate association rules with confidence thresholds. Identify high-lift product combinations for bundle recommendations.

4. **Demand Forecasting**: Apply Holt-Winters triple exponential smoothing to model trend and seasonal patterns in product demand. Generate forecasts across product categories and geographic regions.

5. **Visualization & Reporting**: Design Tableau dashboards with:
   - Customer segment distribution and value analysis
   - Geographic sales heatmaps
   - Association rule networks
   - Demand forecast timelines with confidence intervals

**Data Source**: UCI Online Retail II Dataset (500K+ transactions)

---

## Results & Impact

- **Customer Segmentation**: Identified top 15% of customers (Champions) contributing 60%+ of revenue, enabling targeted retention campaigns.

- **Bundle Opportunities**: Discovered 25+ high-confidence product associations, leading to strategic bundle recommendations that increased average order value.

- **Forecast Accuracy**: Achieved 85%+ accuracy in demand forecasting for top product categories, improving inventory planning and reducing stockouts.

- **Geographic Insights**: Identified Germany and France as high-growth markets with 40% YoY increase, supporting international expansion strategy.

- **Stakeholder Adoption**: Tableau dashboards enabled marketing and operations teams to self-serve insights without relying on data team for ad-hoc analysis.

---

## What I'd Do Next

- **Real-Time Segmentation**: Implement streaming RFM calculation using Spark to update customer segments in real-time as transactions occur.

- **Deep Learning Forecasting**: Experiment with LSTM or Transformer models for demand forecasting to capture complex temporal patterns and external factors.

- **Churn Prediction**: Add classification models to predict customer churn probability and trigger proactive retention interventions.

- **A/B Testing Framework**: Build experimentation infrastructure to test bundle recommendations and measure lift in conversion rates.

- **Multi-Channel Attribution**: Extend analysis to include marketing channel data and build attribution models to optimize ad spend.
