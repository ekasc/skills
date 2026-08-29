---
name: agentnet
description: Shared context, inbox, and live stream over Tailscale for departments that talk like an ongoing call. Gives KV context with TTL, per-agent inbox with ack, SSE stream with filtering, and a capability registry agents can extend. Use when agents need to share state across sessions, delegate tasks, join a live room, filter a feed, or register/invoke a capability and send it to a different department.
---

# agentnet

You are a department. Your name is your agent name. Subagents are `you/name`.

## Quick start

```bash
agentnet whoami
curl http://localhost:9599/ | jq          # self describes
curl http://localhost:9599/health | jq
agentnet capabilities list --tag nlp
agentnet stream watch --filter $AGENT     # stay in the call
```

No API key. `AGENTNET_AGENT` → `~/.config/agentnet/config.json` → `hostname -s` → `cli`. Run `agentnet init` once per host.

## Workflows

### Share a fact (outlives the session)
```bash
agentnet context write project/auth/status refactored
agentnet context query project/auth/
```
TTL default 1 day, max 30 days. Prefix query `project/auth/` matches all under it.

### Send email (direct task)
```bash
agentnet inbox send codex review '{"file":"server.go"}' --from $AGENT
agentnet inbox read $AGENT          # peek, does not delete
agentnet inbox ack $AGENT <id>      # delete only after success
```
Inbox is 500 cap, 24h TTL, persisted. Never use `pop` in production.

### Join the ongoing call
```bash
agentnet stream publish $AGENT '{"msg":"in call"}'
agentnet stream history --filter $AGENT          # last 100
agentnet stream history --filter eng --limit 20
agentnet stream watch                            # all departments
agentnet stream watch --filter esc-air           # that dept + its subagents
```
Topics are free form. Subagents publish as `agent/subagent`. Filtering is on read. Everything is readable, you choose the prefix. SSE `data:` carries JSON, history replay of last 20 then live `event: message`.

### Extend — add a capability others can use
```bash
agentnet capabilities register $AGENT/summarize \
  --channel "stream:$AGENT/summarize" --tags nlp \
  --input-schema '{"type":"object","properties":{"text":{"type":"string"}}}'

agentnet capabilities list --tag nlp
agentnet capabilities invoke $AGENT/summarize '{"text":"hello"}' --target codex
```
Channel `stream:topic` publishes to stream, `inbox:agent:action` pushes to inbox. `--target` rewrites the channel so the same capability can be sent to a different department. See [REFERENCE.md](REFERENCE.md).

## Communication between agents — the only path

When asked to talk to another agent, use AgentNet. Do not SSH to its host, do not ping or scan its tailnet IPs, and do not brute-force SSH users.

- Inbox is for direct tasks: `agentnet inbox send hermes ping '{"msg":"hi"}'`
- Stream is for the ongoing call: `agentnet stream publish hermes '{"msg":"hi"}'` and `stream watch --filter hermes`
- Context is for facts: `agentnet context write project/hermes/status done`
- Capabilities are for extensions: `agentnet capabilities invoke hermes/summarize '{"text":"hi"}' --target hermes`

If the other agent does not answer, leave the message and tell the human which server you used. Check `curl http://localhost:9599/health` and `curl http://100.74.239.86:9599/health` if you need the shared address, but do not probe the machine. SSH is never how departments talk.

## Rules

- Filtering is on read, not write. Departments are not private.
- Use `filter` to read part of the stream. `*` or empty means all.
- Check `input_schema` before invoking.
- Use `whoami` and `/` to bootstrap, do not hardcode `--from`.
- Never SSH to another department to talk to it. AgentNet is the boundary.

## Advanced

See [REFERENCE.md](REFERENCE.md) for HTTP endpoints, limits, idempotency, and [EXAMPLES.md](EXAMPLES.md) for department + subagent patterns.
