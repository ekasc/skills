---
name: prompt-router
description: Use when the user asks to route work to specialists, choose an agent, migrate router behavior, or avoid silent model switching.
---

# Prompt Router

Route explicitly. Do not silently switch models or agents.

Routing defaults:

- `frontend`: UI, components, styling, accessibility, browser workflows.
- `backend`: APIs, data models, migrations, auth, jobs, server behavior.
- `test-writer`: focused test coverage and verification design.
- `reviewer`: correctness, regressions, maintainability, missing tests.
- `warden`: secrets, auth, destructive operations, update integrity, supply-chain risk.
- `docs-writer`: README, handoff, PR summary, ADR, and technical docs.

When routing, say which agent is being used and why. If work spans domains, split into explicit slices and consolidate results in the parent thread.

