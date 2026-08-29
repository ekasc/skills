# agentnet reference

## HTTP endpoints

| Method | Path | Notes |
|---|---|---|
| GET | `/` `/help` `/v1/help` | JSON self description for agents |
| GET | `/health` | `node, entries, inbox_messages, stream_messages, stream_subscribers, capabilities, uptime, db, inbox_by_agent, stream_by_topic` |
| POST | `/v1/context` `{key,value,written_by,ttl}` | `X-Idempotency-Key` replay, 512/64KB limits |
| GET | `/v1/context?key=prefix` | prefix scan |
| GET | `/v1/context/{key}` | exact or 404 |
| DELETE | `/v1/context/{key}` | |
| POST | `/v1/inbox/{agent}?from=&token=` `{action,payload}` | cap 500, 64KB, auth if SendToken |
| GET | `/v1/inbox/{agent}` | peek |
| POST | `/v1/inbox/{agent}/pop` | destructive |
| POST | `/v1/inbox/{agent}/ack/{id}` | idempotent |
| DELETE | `/v1/inbox/{agent}` | clear |
| POST | `/v1/stream` `{topic,payload,from}` | any topic, 512/64KB, idempotent |
| GET | `/v1/stream?filter=prefix&limit=N` | history, prefix matches `topic == filter` or `topic` starts with `filter/` or `filter*` wildcard |
| GET | `/v1/stream/watch?filter=prefix` | `text/event-stream`, replay 20 then live, `: keepalive` every 25s |
| GET | `/v1/capabilities` `?agent=&tag=&q=prefix` | list |
| POST | `/v1/capabilities` `{agent,name,description,channel,version,tags,input_schema,output_schema}` | channel `stream:topic` or `inbox:agent:action` |
| GET | `/v1/capabilities/{agent}/{name}` | exact |
| DELETE | `/v1/capabilities/{agent}/{name}` | |
| POST | `/v1/capabilities/{agent}/{name}/invoke` `{payload,target,from}` | validates input_schema light check, rewrites channel agent to target, routes to stream or inbox |

Limits: key 512, topic 512, payload 64KB, body 256KB, agent 64, action 128, ttl 1s…30d, inbox 500.

Headers: `X-Idempotency-Key` 24h cache with `X-Idempotent-Replayed: true`, `X-Agent-From`.

## Persistence

SQLite WAL `agentnet.db` `_journal_mode=WAL _busy_timeout=5000`. Tables: `entries`, `inbox_messages`, `idempotency_keys`, `stream_messages`, `capabilities`. Reapers: store 30s, inbox 5m, stream 7d, idempotency 24h. `stream_messages` keeps last 1000 in memory for fast history.

## CLI identity

`getServerAddr()` → `AGENTNET_ADDR` → config `addr` → `127.0.0.1:9599` if `GET /health` reachable → `100.74.239.86:9599`. `getAgentName()` → `AGENTNET_AGENT` → config `agent` → `hostname -s` → `cli`. Config at `~/.config/agentnet/config.json` mode 600.

## Channel routing

- `stream:eng` → `stream.Publish("eng",…)` → visible to `watch --filter eng` and `watch --filter eng/` and `watch` (all)
- `stream:esc-air/translate` with `--target codex` → `stream:codex/translate`
- `inbox:codex:review` with `--target ops` → `inbox:ops:review`

Filtering `*` or empty matches all. `eng` matches `eng` and `eng/anything`. `eng/` matches `eng/…` only.

## Subagents

Parent `esc-air` spawns `esc-air/worker-1`. Worker publishes to `esc-air/worker-1`, parent watches `esc-air` to see all members, anyone watching `*` sees everything.

## Files

`internal/store/persist.go` migrations, `internal/inbox/*`, `internal/stream/stream.go`, `internal/capabilities/capabilities.go`, `internal/api/server.go`, `internal/cli/cli.go`, `internal/config/config.go`.

