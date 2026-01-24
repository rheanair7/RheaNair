---
title: Boulder Move
publishDate: 2025-01-15 00:00:00
img: ./assets/boulder-move.jpeg
img_alt: Boulder Move multimodal trip planning dashboard showing transit routes and weather
description: |
  Boulder Move is an end-to-end smart multimodal trip planning system that computes realistic, context-aware routes by combining walking and public transit. The platform uses custom GTFS-based RAPTOR transit routing and OSMnx-powered pedestrian graphs instead of relying solely on Google Maps. Routes are enriched with real-time weather conditions and event-based congestion awareness, and evaluated using an XGBoost machine learning model that predicts the probability of on-time arrival. The system is deployed on Google Cloud, with the routing backend running on Compute Engine and the ML inference service hosted on Cloud Run using Dockerized pipelines.
tags:
  - Full-Stack
  - Machine Learning
  - Cloud
technologies:
  - name: JavaScript
    icon: 📜
  - name: HTML5
    icon: 🌐
  - name: CSS3
    icon: 🎨
  - name: React
    icon: ⚛️
  - name: Python
    icon: 🐍
  - name: FastAPI
    icon: ⚡
  - name: PostgreSQL
    icon: 🐘
  - name: Google Cloud
    icon: ☁️
  - name: Docker
    icon: 🐳
  - name: OSMnx
    icon: 🗺️
  - name: NetworkX
    icon: 🕸️
githubUrl: https://github.com/rheanair7/BoulderMove
demoUrl: https://youtu.be/fTusDKHIp4w?t=294
---

## Overview

Boulder Move is an intelligent multimodal trip planning platform that goes beyond traditional routing services. Instead of relying on Google Maps alone, the system combines custom GTFS transit data with pedestrian network graphs to deliver realistic walking + transit + walking itineraries. Each route is enriched with live weather impacts and event congestion, then scored by a machine learning model that predicts your actual probability of arriving on time.

## Key Features

- **Custom GTFS + RAPTOR engine for public transit routing with end-to-end walking + transit + walking itineraries**

  Instead of relying on Google Maps, Boulder Move uses custom GTFS data and the RAPTOR algorithm to compute optimized transit routes with realistic walking segments.

- **Walking, driving, and biking routes powered by Google Maps API**

  Non-transit modes leverage Google's routing capabilities for accurate travel times and turn-by-turn directions.

- **Real-time weather impact (OpenWeather API) and event congestion detection (Ticketmaster API)**

  Routes are contextualized with current weather conditions and awareness of local events that might cause delays or crowds.

- **XGBoost-based on-time arrival prediction model deployed via Artifact Registry and Cloud Run using Cloud Build CI/CD**

  Each route is evaluated by a machine learning model that estimates the probability of on-time arrival, helping users make informed decisions.

- **Scalable PostgreSQL database hosted on Cloud SQL (GCP)**

  All transit schedules, historical trip data, and user preferences are stored in a managed PostgreSQL instance for reliability and scalability.

---

## Why This Project

Public transit apps often fail to account for real-world conditions. Google Maps gives you a route, but doesn't tell you how likely you are to actually arrive on time when it's snowing or there's a concert downtown. I wanted to build a system that combines the precision of custom transit algorithms with the context awareness of weather and events, then use machine learning to give users a realistic confidence score for each route.

This project let me explore the full stack: from low-level graph algorithms (RAPTOR, OSMnx) to cloud infrastructure (GCP, Docker, CI/CD) to ML deployment (XGBoost, Cloud Run).

---

## Approach

- **Custom Routing**: Built a RAPTOR-based transit router using GTFS feeds instead of relying on third-party APIs. This gives fine-grained control over route optimization and allows integration of real-time data sources.

- **Context-Aware Scoring**: Integrated weather and event APIs to detect conditions that impact travel (rain delays, event crowds). These factors feed into the XGBoost model for arrival prediction.

- **Modular Architecture**: Separated concerns into distinct services (routing engine, ML inference, frontend) to enable independent scaling and deployment.

- **Cloud-Native Deployment**: Deployed the routing backend on Compute Engine for heavy graph computations and the ML service on Cloud Run for serverless auto-scaling.

---

## Architecture / Pipeline

1. **Data Ingestion**: GTFS transit schedules are processed and stored in PostgreSQL on Cloud SQL. OSMnx generates pedestrian network graphs for walking segments.

2. **Routing Engine (Compute Engine)**: FastAPI backend runs the RAPTOR algorithm to compute transit routes. Walking segments are calculated using OSMnx graphs.

3. **Context Enrichment**: OpenWeather API provides real-time weather data. Ticketmaster API detects nearby events that could cause congestion.

4. **ML Prediction (Cloud Run)**: XGBoost model takes route data + weather + events and outputs an on-time arrival probability. Model is containerized with Docker and deployed via Cloud Build CI/CD.

5. **Frontend (React)**: Google Maps JavaScript API visualizes routes. Users can toggle between modes (transit, walking, driving, biking) and see arrival confidence scores.

6. **Database (Cloud SQL)**: PostgreSQL stores transit schedules, historical trip data, and cached route results for faster queries.

---

## Results & Impact

- **Accurate Transit Routing**: RAPTOR algorithm computes optimal routes in real-time, accounting for transfers and schedule constraints that Google Maps often misses.

- **Actionable Insights**: Users can see "85% chance of on-time arrival" instead of just an ETA, helping them decide whether to leave early or choose an alternative route.

- **Real-World Context**: Weather and event awareness prevents frustrating situations where a route looks good on paper but fails due to external conditions.

- **Scalable Infrastructure**: Cloud Run auto-scales the ML service during peak demand, while Compute Engine handles heavy routing computations efficiently.

- **Full CI/CD Pipeline**: Cloud Build automates testing and deployment, reducing manual DevOps overhead.

---

## What I'd Do Next

- **Real-Time Transit Updates**: Integrate live vehicle positions (GTFS-RT) to update routes dynamically when buses are delayed.

- **Multi-City Support**: Expand beyond Boulder by generalizing the GTFS pipeline to work with any city's transit data.

- **Mobile App**: Build a React Native version for on-the-go route planning with GPS integration.

- **Advanced ML Features**: Incorporate user feedback (was the prediction accurate?) to retrain the XGBoost model and improve accuracy over time.

- **Carbon Footprint Scoring**: Add environmental impact estimates to help users choose greener routes.
