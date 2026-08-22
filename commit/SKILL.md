---
name: commit
description: Use when the user asks to commit, prepare a commit, write a commit message, or package local changes. Keeps git operations explicit and avoids automatic push or PR creation.
---

# Commit

Prepare commits deliberately.

1. Inspect `git status` and relevant diffs from the repository root.
2. Separate unrelated user changes from your own changes. Do not revert user changes.
3. Run or cite relevant verification before committing when practical.
4. Stage only files that belong to the requested change.
5. Write a concise commit message describing behavior, not implementation trivia.

Never push, create a PR, amend, rebase, reset, or force-update branches unless the user explicitly requested that exact action.

