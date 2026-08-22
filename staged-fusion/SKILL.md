---
name: staged-fusion
description: Use for multi-step implementation workflows where the user wants plan, worker implementation, tests, review, security pass, and final verification in one explicit staged flow.
---

# Staged Fusion

Run a visible staged workflow. Keep each stage inspectable and do not silently route to different models.

Stages:

1. Shape: restate the objective, invariants, invalid paths, and affected repositories.
2. Plan: list implementation steps and verification gates.
3. Implement: make scoped edits directly or explicitly dispatch the `frontend` and `backend` agents for independent slices.
4. Test: run focused verification and use the `test-writer` agent when coverage is missing.
5. Review: use the `reviewer` agent for correctness and maintainability.
6. Warden: use the `warden` agent for secrets, auth, destructive actions, and deployment risk.
7. Finish: summarize changes, verification, residual risks, and user-owned follow-ups.

Stop and ask only when a product decision or credential/action outside local scope is required.

