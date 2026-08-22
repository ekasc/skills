---
name: review
description: Use when the user asks for a review, pre-merge check, security/code-quality pass, or wants Codex to inspect a diff before finishing. Produces findings first and can explicitly dispatch reviewer and warden agents.
---

# Review

Run a focused review. Do not implement fixes unless the user asks for them after the review.

1. Establish the review target: current diff, branch vs base, named files, PR, or full repo.
2. Gather evidence with read-only commands such as `git status`, `git diff`, `rg`, and relevant test output.
3. For substantial or risky changes, explicitly ask to spawn or directly spawn the `reviewer` agent for correctness and the `warden` agent for security when subagents are available.
4. Lead with findings ordered by severity. Include file and line references.
5. Keep summaries secondary. If no issues are found, say so and state remaining verification gaps.

Never approve automatic merge, push, release, or PR creation from this skill. Those require an explicit user request.

