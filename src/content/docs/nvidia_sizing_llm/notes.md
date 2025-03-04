---
title: nVidia Learning - Sizing LLM Inference Systems
description: Notes and any Notebook files related to Sizing LLM Inference Systems class from nVidia Learning
---

# Overview



# Notes

- Understand and measure time to first token (TTFT), end-to-end latency (E2E Latency), and inter-token latency (ITL).

## nVidia SW Stack for Inference

- NIM - nVidia Inference Microservice


## Jargon

- Prefill - time to first Response token (response latency, depends on number of input tokens, KV-cache, compute-bound)
- Decoding - Response inter-token latency (usually memory bound - why?)
- Streaming - Response tokens dynamically stream as they are generated
- FTL - First Token Latency (TTFT)
- NGC - NVIDIA GPU Cloud, is a cloud-based platform that provides software, tools, and services for AI, machine learning, and deep learning. NGC is optimized for scientific computing and GPU acceleration
- 


## Notes on Merka.Cloud Features and Merits

- Describe mindset shift - where does one start for new business, what about existing business? VCS is the root? Cloud provider? Systems? NO - People is the true Root, and hence IDENTITY is the true root. Mobile APP is the ROOT - Human starting point! Org(s) are by far secondary. ROLES are at the root, part of the platform, AI aware.
- WHY: Most costs actually go into People rather than computing resources - with drastic reduction in license costs and hosting costs, unless you have major AI computing needs, you need to focus on people cost
- Consultants and experts are expensive - all the free software needs integration, this is the "Catch"
- WHY: Supply chain attacks will only Escalate in the future, Huge Security Issue but also opportunity! Security over privacy - AGAIN!
- WHY: ZeroTrust starting point - degrees of ZeroTrust, overheads, identity again
- WHY: Marketplace Templates as a starting point - Marketplace hosted on merka.cloud, everything else self-hosted - EASY TO USE - MARKET downloads tracked via ClientID somehow?
- AI that understands Your Cloud
- Hybrid AI solution that saves a lot of energy by: Analyzing complex verbal queries into relevant specific templates (with dynamic data from SQL/APIs in them) and then caching this AI analysis to avoid redoing it next time completely
- Major part of the solution is simple CHAT platform (like Slack, Teams or Discord), with optional AI product that tracks all discussions and can answer questions about them, including summarization based on time period. Also AI reads and summarizes/learns any posted links or embedded documents. Can also integrate to external chat platforms for same functionality.
- WHY: Self Hosted is the big goal - on Bare Metal or on VMs
- Helps figure out pricing of bare-metal or VMs, helps track performance of Networks, learns physical topology vs SDN topology (ZeroTrust)
- No Server Names at all - ONLY Services via DNS, everything and anything
- Identities should be connected to Roles at AI level, we can ask it also including evolution
- Evolution is huge built-in element, obviously. This is including people that join/leave, contribution tracking for self-funding startup, obviously versioning of code, infrastructure and data is at the core - declarative infrastructure and business
- Rise from the Ashes principle - rebuilding any portions of infrastructure should be seamless and easy, whether to move providers or to overhaul/upgrade
- Most of the data is encrypted at rest - but PII should be more encrypted/scrambled, what about actual keys and tokens? Security needs major design from the ground up - again ZeroTrust and PHONE is required
- Perhaps App should be required part of the solution - higher role can reactivate but essentially it is major red flag that employee can't keep themselves safe and can't properly migrate to new device themselves. Should always full destroy all access if moving devices, also GPS is required part of solution - hence App requirement. Security above privacy - no compromises.
- WHY: Surprise billing is huge issue, and even bigger issue is Moving from cloud to cloud - but it shouldn't be. It should even be possible to run a business on Multiple clouds at the same time, and then turn On/Off various clouds if unhappy with pricing or for any reason really.
- Nobody can self-delete logs - history tracking is at the core of the project, including logs. Investigate Blockchain-like guarantees for integrity - nothing can be "disappeared", even if past history can be changed, much like in accounting - backdated operation arriving in the future.
- WHY: NO LOCK IN - Pluggable/Service-Providers Architecture at the core. Even IDENTITY APP should have a shared Protocol. Everything is Protocol in Fact, and AI is trained to know all file types, API types, protocols and more. Technology Stack(share) doghouse, migration is hell. 
- CDN Converging on serving files really well, including Web Assets, Images, Video. Arguably WebPack should not be needed - leave it also to CDN? Should CDN be at the core of the solution - or only via Pluggable-Service?
- Offline caching of images, data, etc - self guiding (based on frequency of modification) and fluid cache/no-cache behavior. Sync to Offline built-in, generally sync is important - there should be screens and ways of seeing it and solving it.
- Real-time auto-generating UI Forms or Sheets - including graphs, charts and more - AI generated when needed, since all data available
- VERSIONING At the heart, including data
- Data Lineage built-in, tracking transformations and visualization should also be possible
- Code Build, Orchestration, all La-Natural - File system tracks what has been build, generally builds are automatic and configurable post certain timed delay.
- 


Surprise Billing and Moving Clouds discussion: https://news.ycombinator.com/item?id=41312834

WATCH FOR NETWORKING: https://www.youtube.com/watch?v=SYeq1fDcUl0


More and more integrations - where is marketplace? Security governance? What goes on?
https://www.infracost.io/

https://spacelift.io/integrations
https://idx.dev/blog/article/a-year-of-project-idx
https://coder.com

Learn LVM, ext4, some other new -Nix FS options especially with built-in versioning (consider LakeFS, Git, etc)
Stack Share Doghouse
