---
title: Security
description: World Class Security Mechanisms protecting your data in merka.cloud   
---

Security and RBAC are cornerstones of the cloud, with the goal of providing SSO across all devices and hyperscalers.

## Wireguard/Tailnet/Nebula

- Encrypted communications, probably even within the same DC/Availability-Zone
- Automatic VPC setup (or equivalent on each cloud) via AI Assistant
- Partitioned Network - Only specific devices see each other as per Merka AI determination, with human guidance/visibility. Review Firewall considerations to open only specific ports to specific devices, again per AI/design.
- 

## Machine Learning

- Mobile iOS based Trust Chain that stores the keys that connect cluster
- Zero Trust Security
- Data Encryption at Rest (Multi-layered potentially, in addition to what cloud provides?)
- Individual DB Record Security, Table-Level security, More?
- Column Role Access - allow access to specific column/table to a Role
- Every new device joining the business network has to prove Trust Chain and Individual Access
- All Endpoints and File access always backed by Human - no MECH accounts
- Machine to Machine needs more research, perhaps with auto-rotating keys based on main Trust Chain
- AI and Analytics via symmetrically encrypted and limited data
- PII
- PCI
- GDPR
- 

## Logs Access 

- Role Based
- Ensure all keys are marked sensitive properly, in Terraform and similar features elsewhere
- 
