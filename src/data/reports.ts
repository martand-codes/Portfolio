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

export const gameStationReport = `# GameStation Core - System Architecture & Engineering Specification

**Enterprise-Grade Distributed Gaming Marketplace, Commerce Engine & Telemetry Platform**  
*Author: Martand Prakhar | Architecture Specification v1.0*

---

## 1. Executive Summary

GameStation is a distributed gaming commerce and real-time telemetry ecosystem designed to handle core distributed systems challenges:
- **Eventual consistency across distributed transactions** without blocking Two-Phase Commit dependencies.
- **Sub-millisecond catalog search retrieval** through custom in-memory prefix indexing.
- **Native in-house observability** using W3C OpenTelemetry-compliant hierarchical spans.
- **High-concurrency real-time state synchronization** using Socket.IO room namespaces.
- **Resource-efficient containerization** with a complete multi-tier stack running under 140 MB of RAM.

---

## 2. Core Architectural Pillars

### 2.1 Distributed Saga Transaction Orchestrator & Chaos Rig
Checkouts span non-transactional boundaries: external payment gateways (Stripe), internal wallet balances, DRM license issuance, and developer royalty settlements.
- **Forward Pipeline**: Validates inventory, captures payment intents, generates cryptographic license keys, and executes 70/30 platform revenue splits.
- **Backward Compensation Loop**: If any step encounters a hardware or network partition, the orchestrator triggers an automated reverse loop: wallet credits are restored, provisional licenses are revoked, and the transaction transitions to \`COMPENSATED (ROLLED BACK)\` within <150ms.
- **Chaos Fault Simulator**: An interactive flight deck embedded in the operations console allows engineers to inject deliberate failures into Step 3 to observe automated compensation live.

### 2.2 Sub-Millisecond In-Memory BM25 & Prefix Trie Search
Traditional SQL \`ILIKE\` scans saturate disk IOPS and exhaust connection pools under high concurrency.
- **Data Structure**: A prefix tree (Trie) is initialized in Node.js memory at boot, mapping every published title, developer studio, and tag.
- **Levenshtein Distance Spell-Checking**: Constant-time fuzzy string matching detects typos and suggests corrections (e.g. \`"Rdrd"\` -> \`"Did you mean: 'red'"\`).
- **Okapi BM25 Ranking**: Multi-token ranking calculating Term Frequency (TF) and Inverse Document Frequency (IDF) saturation to score game relevance.
- **Latency**: Queries resolve in **~1.68 ms** with zero database disk I/O.

### 2.3 Native W3C Distributed APM Tracing & FlameGraphs
- **Context Propagation**: Utilizes Node.js \`AsyncLocalStorage\` to propagate standard W3C \`traceparent\` identifiers across asynchronous middleware boundaries without external agent daemons.
- **Sub-Span Profiling**: Measures individual execution phases within each request, including Express middleware, Prisma database operations (\`User.findFirst\`, \`Session.deleteMany\`), and JSON serialization.
- **Visual FlameGraphs**: Generates interactive span breakdowns showing exact duration, execution percentage, HTTP metadata, and database execution times alongside P50, P95, and P99 latency tracking.

### 2.4 RFC 6585 Sliding Window Log Rate Limiter
- **Mathematical Precision**: Stores exact request timestamps within an active sliding window, completely eliminating 2x boundary-reset burst vulnerabilities present in fixed-window counters.
- **Client Key Resolution**: Prioritizes verified \`user:{userId}\` for authenticated users, falling back to proxy-aware \`ip:{clientIp}\` extracting through \`X-Forwarded-For\`.
- **RFC 6585 Compliance**: Injects standard HTTP headers (\`X-RateLimit-Limit\`, \`X-RateLimit-Remaining\`, \`X-RateLimit-Reset\`, \`Retry-After\`).
- **Telemetry Tagging**: Throttled requests are automatically tagged inside the active OpenTelemetry span (\`rateLimited=true\`), making abusive spikes instantly visible in telemetry radars.

### 2.5 Real-Time WebSocket Infrastructure
- **Socket.IO Cluster**: Authenticated channel namespaces (\`room:user_a_user_b\`) guarantee zero message cross-talk.
- **Heartbeat Presence Matrix**: Bidirectional ping-pong polling tracks live player statuses in real time across \`Online\`, \`In-Game\`, and \`Offline\`.
- **Live Event Dispatch**: Broadcasts platform state changes, verified purchases, and review events across connected administrative and developer dashboards.

### 2.6 Frontend Performance Engineering (93% Bundle Reduction)
- **Dynamic Imports**: Route-level \`React.lazy()\` code splitting across Storefront, Developer Studio, Admin Flight Deck, and Governance Cockpit.
- **Vendor Chunk Isolation**: Vite Rollup bundling isolates heavy libraries (\`vendor-recharts\` at 431 kB and \`vendor-react\`) into standalone long-term cached bundles.
- **Zero-CLS Suspense Boundaries**: Two-tier \`<Suspense>\` boundaries integrated with custom \`CyberSkeleton\` loaders eliminate Cumulative Layout Shift (CLS).
- **Metric**: Initial JavaScript bundle dropped from **1,881.94 kB** down to **130.77 kB** (**39.25 kB gzipped**), a **93.0% reduction** in initial script evaluation time.

---

## 3. Production Containerization & Nginx Routing
- **Backend Container**: Multi-stage \`node:22-slim\` image compiling TypeScript down to clean ECMAScript modules with production-only dependencies (~177 MB).
- **Frontend Container**: Multi-stage \`nginx:alpine\` image compiling React 19 static assets and serving them through a reverse proxy with gzip compression and SPA route fallbacks (~26.9 MB).
- **Total Footprint**: The complete production stack (PostgreSQL 18 + Backend + Nginx Frontend) runs inside **~131.7 MiB of host RAM**.

---

## 4. Performance Benchmarks

| Metric | Target / Measurement | Engineering Implementation |
| :--- | :--- | :--- |
| **Search Query Latency** | **< 2.0 ms** (P95) | In-Memory Prefix Trie & Okapi BM25 Index |
| **Database Pool Query Time** | **< 10 ms** (P50) | PostgreSQL 18 connection tuning via Prisma |
| **Initial JS Bundle Size** | **130.77 kB** (39 kB gzip) | Route-level React.lazy() & Vendor chunking |
| **Client Bundle Reduction** | **93.0% Reduction** | Eliminated monolithic bundle (down from 1.88 MB) |
| **Docker Stack RAM Footprint** | **~131.7 MiB** Total | Multi-stage Alpine & Debian-slim containerization |
| **Saga Compensation Time** | **< 150 ms** | Automated backward rollback on transaction failure |
| **Rate Limiter Overhead** | **< 0.05 ms** | In-memory sliding window timestamp log |
`;
