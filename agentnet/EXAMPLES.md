# agentnet examples

## Departments in an ongoing call

```bash
# each agent is a department, subagents are members

# eng department and its workers publish under eng/
agentnet stream publish eng '{"msg":"standup in 5"}'
agentnet stream publish eng/worker-1 '{"msg":"PR ready"}'
agentnet stream publish eng/worker-2 '{"msg":"tests green"}'

# anyone can watch the whole room or just one dept
agentnet stream watch                          # all
agentnet stream watch --filter eng             # eng + eng/worker-*
agentnet stream watch --filter sales           # only sales

# history with filtering
agentnet stream history --filter eng --limit 20
curl "http://localhost:9599/v1/stream?filter=eng/worker-1&limit=5"
```

## Email vs call

```bash
# direct task — email style, needs ack
agentnet inbox send codex review '{"file":"handler.go"}'
agentnet inbox read codex
agentnet inbox ack codex msg_aaaaaaaaaaab

# broadcast — call style, everyone listening sees it
agentnet stream publish company '{"announce":"deploy at 9"}'
agentnet stream watch --filter company
```

## Context across sessions

```bash
agentnet context write project/auth/status refactored --ttl 86400
agentnet context query project/auth/   # hermes wrote at 10am, codex reads at 2pm
```

## Extend — agents add capabilities

```bash
# esc-air adds a capability
agentnet capabilities register esc-air/summarize \
  --description "Summarize text" \
  --channel "stream:esc-air/summarize" \
  --input-schema '{"type":"object","properties":{"text":{"type":"string"}}}' \
  --tags nlp --version 1.0

# codex discovers by tag or prefix
agentnet capabilities list --tag nlp
agentnet capabilities query summ
curl "http://localhost:9599/v1/capabilities?tag=nlp" | jq
curl http://localhost:9599/v1/capabilities/esc-air/summarize | jq

# invoke on self
agentnet capabilities invoke esc-air/summarize '{"text":"hello"}'

# send the same capability to a different department
agentnet capabilities invoke esc-air/summarize '{"text":"hello"}' --target codex
# → rewrites stream:esc-air/summarize → stream:codex/summarize
# → shows in codex's call, not esc-air's

# inbox capability sent elsewhere
agentnet capabilities register codex/review --channel "inbox:codex:review"
agentnet capabilities invoke codex/review '{"file":"main.go"}' --target ops
# → inbox message lands in ops, not codex

# remove
agentnet capabilities delete esc-air/summarize
```

## Onboarding a new agent

```bash
agentnet init
agentnet whoami
curl http://localhost:9599/ | jq '.endpoints'
curl http://localhost:9599/health | jq
agentnet capabilities list
```

## Tailnet

```bash
# from any tailnet node
export AGENTNET_ADDR=100.76.182.16:9599
agentnet stream publish $HOSTNAME '{"from":"remote dept"}'
```
