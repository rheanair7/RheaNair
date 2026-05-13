---
title: BoulderMove — Multimodal Trip Planner
publishDate: 2024-12-01 00:00:00
img: ./assets/stock-3.png
img_alt: BoulderMove multimodal trip planning interface
description: |
  Multimodal transit recommender for Boulder, CO. XGBoost route scoring, GTFS + OSMnx routing, FastAPI backend, PostgreSQL, deployed on Google Cloud Run with a React + Google Maps frontend.
tags:
  - XGBoost
  - FastAPI
  - GCP
  - PostgreSQL
  - React
  - OSMnx
---

## The problem

Boulder has a complex transit network — buses, bikes, pedestrian paths — but no single tool that recommends routes based on user preferences like trip time, physical effort, or weather. Google Maps treats all trips the same. We wanted a recommender that learns what "good" means for each user.

## Approach

**Data pipeline.** Ingested GTFS (General Transit Feed Specification) data for Boulder's transit system and OpenStreetMap data via OSMnx for walking/biking paths. Built a PostgreSQL schema for stops, routes, schedules, and historical trip data.

**Route scoring with XGBoost.** Trained an XGBoost model to score candidate routes on features including: estimated travel time, number of transfers, walking distance, elevation change, and real-time weather conditions. Routes are ranked by score for each user query.

**FastAPI backend.** REST API with endpoints for route search, user preference storage, and real-time weather integration. Deployed on Google Cloud Run for serverless scaling.

**React frontend.** Built with Google Maps JavaScript API for interactive route visualization. Users can set preferences (fastest, lowest effort, fewest transfers) and see scored route alternatives side by side.

## Results

- Route recommendations returned in under 800ms end-to-end including weather API call.
- XGBoost model trained on 50k+ simulated trips with 87% ranking accuracy vs. ground truth user preferences.
- Deployed and accessible on Cloud Run with zero cold-start issues at low traffic.

## What I'd do next

- Add real-time bus tracking via GTFS-RT feeds.
- Replace XGBoost with a learning-to-rank model (LambdaMART) for better personalization.
- Build a mobile-first PWA version for on-the-go use.
