---
title: Analytics Warehouse & Superset Dashboards
publishDate: 2025-03-15 00:00:00
img: ./assets/boulder-move.jpeg
img_alt: Apache Superset dashboard showing logistics analytics
description: |
  Built analytics_production from scratch on top of a 71-table MySQL production database. Deployed Apache Superset 5.0 on Kubernetes with embedded dashboards, Spring Boot guest tokens, and an AI chat widget.
tags:
  - SQL
  - Apache Superset
  - Kubernetes
  - Helm
  - DigitalOcean
  - Spring Boot
---

## The problem

Ascend Cargo's operations team had a 71-table MySQL production database (`ascendcargo_analytics`) but no analytics layer on top of it. Reporting was manual — someone had to write ad-hoc queries for every question. The ask: build an analytics data warehouse and a self-serve dashboard layer that non-technical stakeholders could actually use.

## Approach

**Schema archaeology first.** Before writing a single query, I built a full ERD in MySQL Workbench and a Confluence data dictionary covering all 71 tables. Key discoveries: plant location is encoded via `stop_name`/`warehouse_name` on the `shipment_stops` table, not a dedicated column; scheduled pickups are stored as midnight timestamps; the correct join chain for tender acceptance is `order → shipment_item → shipments → shipments_aud` (an incorrect chain had been in production).

**analytics_production warehouse.** Built a new schema on top of the MySQL production database with cleaned, pre-joined views optimized for dashboard queries. First deliverable: the Time of Day Report — average dwell time per warehouse location broken out by hourly time slot.

**Superset 5.0 on Kubernetes.** Deployed Apache Superset on DigitalOcean Kubernetes (SFO3 cluster) using Helm. Set up nginx ingress, SSL via Let's Encrypt, Redis/Celery for async queries, and CSRF fixes. Production endpoint: `reports.ascendcargo.com`.

**Embedded dashboards.** Integrated Superset's embedded SDK with a Spring Boot guest token backend and React frontend. Configured Row Level Security and resolved TabStateView permission issues so embedded dashboards work for unauthenticated guest users.

**AI chat widget.** Built a custom chat widget using the OpenAI API, white-labeled and embedded into the Superset interface, allowing operations staff to ask natural language questions about logistics data.

## Results

- Time of Day Report delivered as the first analytics_production output — used by the Diamond Pet Foods client team (Jeff Schwartz, Thomas Stone) for warehouse operations planning.
- Four-tab dashboard shipped covering Tender Acceptance Rate, On-Time Pickup, Late Shipment Aging, and On-Time Delivery.
- Discovered and fixed a critical bug in the tender acceptance query that had been producing incorrect join results.
- Full Confluence documentation: ERD, data dictionary, infrastructure runbook.

## What I'd do next

- Migrate from raw MySQL views to a proper dbt transformation layer for lineage and testing.
- Add alerting via Superset's built-in alert/report scheduler for SLA breach notifications.
- Expand the AI widget to support write-back actions (e.g. flagging shipments for review directly from chat).
