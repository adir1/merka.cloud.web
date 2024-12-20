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