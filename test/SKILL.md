---
name: test
description: Use when the user asks to test, verify, reproduce, add tests, fix test coverage, or run a validation pass after implementation.
---

# Test

Choose verification that matches the changed behavior and repo conventions.

1. Inspect project scripts and existing tests before inventing commands.
2. Prefer narrow tests first, then broader checks when the change touches shared contracts or user-facing flows.
3. If new test coverage is needed, explicitly use the `test-writer` agent or follow the repo's existing test style directly.
4. Capture the exact commands run and their outcomes.
5. Distinguish pre-existing failures from regressions caused by the current change.

Do not claim work is complete without a verification statement. If tests cannot run, explain the concrete blocker.

