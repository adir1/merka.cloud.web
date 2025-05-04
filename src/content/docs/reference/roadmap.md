---
title: Roadmap
description: Merka.Cloud Roadmap Items
---

Overall goal of Merka.Cloud is to modular compute/storage/AI overlay over public/private clouds, supporting all business (and family/home) operations.
The goal is of course rather ambitious, but everything has to start somewhere. The roadmap also explores the few required modules that make up the core of Merka, and feedback on that is always welcome. As an example - Analytics often considered a non-functional requirement of a system, however we believe it must be at a core of every cloud - not only for observability, but to facilitate constant self-optimization/improvements.

Ab Initio - First Setup was always envisioned to be via a Personal Mobile Device (iOS or Android). This gives you externalized 2FA for first user and more critically - external backup of access keys that are harder to reach (semi-online). This may be delayed beyond phase 0.1 simply because of complexity of implementation requirements.

## Phase 0.1 - Prototype

- Core Stack (AutoGPT, LakeFS with AWS S3)
- Local LLM
- 

## Phase 0.2 - Initial Use Case

- Networking, keys, netdata statistics
- Versioned Data Model (With Migration/Overlay)
- Managing API keys for other services, such as AI API, S3 Storage, Compute Clouds, More
- NoCoDB

## Phase 0.3 - Additional Use Cases

- Personal Information Manager with AI (Hoarder?)
- Lobe-Chat?
- Shared Knowledge Base with AI
- Permissioning in case multi-user multi-device scenario, to allow more granular resource utilization?
- Cross cloud composition features - running containers remotely (figure out which device it can run on best to suggest)
- Mozilla SOPS for keys management (and Ab Initio) (also check https://github.com/wemake-services/dump-env and others)
- Telemetry: (TODO: Decide between OpenTelemetry, NetData, Jaeger, SigNoz, Vector.dev, OpenObserve)

## Phase 0.4 - Even More

- Java conversion to Go, or TypeScript (using OpenRewrite)
- Conversion between frameworks
- Automated ToolJet like behaviors
- Non-Local LLM Models support (with RAG) via API, such as OpenAI
- More


## Phase 0.5 - Merka to Merka connection concepts


## Phase 0.6 - Languages and optimizations

- Support for Co-Routines in relevant Languages
- Kotlin
- Java
- Python
- TypeScript


This roadmap will mostly exclude extensions, as these are expected to grow organically