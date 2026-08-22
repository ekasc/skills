---
name: opencode-delegate
description: Use when the user asks Codex/GPT to delegate work to OpenCode CLI, OpenCode Go, MiniMax, DeepSeek, or cheaper/faster external model workers. Runs `opencode run` explicitly with the selected model, agent, cwd, and task instructions.
---

# OpenCode Delegate

Use OpenCode as an explicit worker, not as silent routing. Announce the delegation before running it, including model, agent, cwd, and why that worker is appropriate.

## Default Routing

- Frontend implementation or UI exploration: `opencode-go/minimax-m3` with `--agent build`, plus frontend-specialist instructions in the prompt.
- Backend implementation or API exploration: `opencode-go/minimax-m3` with `--agent build`, plus backend-specialist instructions in the prompt.
- Read-heavy scans, broad exploration, or cheap summaries: `opencode-go/deepseek-v4-flash` with `--agent build`, plus read-only generalist instructions in the prompt.
- Security review, final correctness review, sensitive auth/billing work: prefer native Codex `warden`/`reviewer` on `gpt-5.5` unless the user explicitly asks to use OpenCode.

## Command Shape

Run from the relevant repository or pass `--dir`:

```sh
opencode run \
  --model opencode-go/minimax-m3 \
  --agent build \
  --dir "$PWD" \
  --format default \
  "TASK INSTRUCTIONS HERE"
```

For read-heavy cheap scans:

```sh
opencode run \
  --model opencode-go/deepseek-v4-flash \
  --agent build \
  --dir "$PWD" \
  --format default \
  "TASK INSTRUCTIONS HERE"
```

Do not use `--dangerously-skip-permissions` unless the user explicitly requests it for a disposable environment.

## Instruction Contract

Always include the following in the OpenCode prompt:

1. The precise objective.
2. The current working directory and relevant files.
3. The specialist role to adopt: frontend, backend, or read-only generalist.
4. Whether the worker may edit files or must stay read-only.
5. Verification expected, if any.
6. A requirement to summarize files changed, commands run, and blockers.
7. A requirement not to push, commit, rotate secrets, or read credential files.

Example task text:

```text
You are being delegated a scoped task from Codex.

CWD: /absolute/project/path
Mode: read-only exploration
Objective: inspect the routing code and identify where the login redirect is decided.

Rules:
- Do not edit files.
- Do not read .env, auth files, tokens, or credential stores.
- Do not run destructive commands.
- Return concise findings with file paths and line numbers.
```

## Handling Results

After OpenCode returns, inspect the result before acting on it. If it edited files, verify the diff yourself with `git diff` and run the relevant tests or checks. Treat the OpenCode output as worker advice, not as final truth.

If the OpenCode command fails because the model/provider is unavailable, report the failure and fall back to native Codex unless the user asks to retry a different OpenCode model.
