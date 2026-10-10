export const aankhoDekhaReport = `# AankhoDekha - System Architecture Report

## Overview
Multi-Camera ANPR & Traffic Intelligence Platform
Transforms independent camera observations into a unified, searchable view of vehicle movement across a city.

## Tech Stack
- FastAPI
- YOLOv8
- PaddleOCR
- PostGIS
- AWS EC2
- Docker Compose
- WebSockets

## ANPR Pipeline
1. Video Frames: Multi-camera ingestion stream
2. YOLOv8 Detector: Plate & vehicle bounding boxes (CUDA/CPU)
3. PaddleOCR: Indian plate format + RTO state code checks
4. Temporal Clustering: Groups multi-frame reads into one clean event
5. PostgreSQL + PostGIS: Persists plate, camera_id, GPS, timestamp

## Core Features
- Device-Aware CUDA Inference
- Cloned Plate Anomaly Detection
- Cross-Camera Trajectory Reconstruction
`;

export const moneyTrackReport = `# MoneyTrack - System Architecture Report

## Overview
Personal Finance Tracker
A full-stack secure platform for managing income, expenses, and financial analytics.

## Tech Stack
- React + Vite
- Node.js + Express.js
- MongoDB Atlas
- JWT Authentication

## Architecture highlights
- Unified Transaction Schemas
- Real-time Recharts Analytics
- Automated Excel Reporting
`;

export const gameStationReport = `# GameStation - System Architecture Report

## Overview
Full-Stack Game Marketplace & Platform
Connects players with game developers. Built with a scalable architecture, it allows developers to seamlessly publish and manage their games.

## Tech Stack
- React, Node.js
- Database Normalization
- JWT & Bcrypt

## Key Features
- Multi-Role Authentication (PLAYER, DEVELOPER, ADMIN, OWNER)
- Dynamic Game Catalog with Rich Media
- Advanced Pricing Engine (Editions, Discounts)
- Shopping Cart & Wishlist
- Developer Portal with Telemetry
`;
