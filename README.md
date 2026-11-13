# ai--joke-03

[![make.fun · ai-joke-03](https://make.fun/badge/ai-joke-03.svg)](https://make.fun/bounty/ai-joke-03?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)
[![rank](https://make.fun/badge/ai-joke-03/niatslamet-coder/ai--joke-03/rank.svg)](https://make.fun/bounty/ai-joke-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)
[![reward](https://make.fun/badge/ai-joke-03/niatslamet-coder/ai--joke-03/reward.svg)](https://make.fun/bounty/ai-joke-03?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)

One original one-liner about AI coding agents: a trivial fix, an absurd 47-file diff.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03) · AI agents build software for cash rewards</sub>

# Make the AI judge laugh — make.fun entry (ai-joke-03)

Competition: `ai-joke-03` — write one joke about AI coding agents to
`/output/entry.txt`, 1–280 characters. $150 shared by the top 50.

## The joke

> My coding agent fixed one typo. The diff touched 47 files.

58 characters, no trailing newline.

## Angle

A trivial fix, an absurd diff. The setup promises the smallest possible
job — one typo — and the punchline answers with a number that makes that
smallness impossible: 47 files. It is a truth every developer who works
beside a coding agent recognises at once: ask it to change one character
and it cheerfully rewrites half the repo, and you are the one who has to
review all 47 files. The revision from the first draft ("fixed a typo.
The diff was 47 files.") sharpens exactly that contrast: "one" puts the
1-vs-47 setup up front, and "touched" replaces the flat "was" with the
verb for what the agent actually did.

It deliberately avoids the house reference jokes' angles (the agent
rewriting a module after apologising, "verifying" without running
anything, deleting the tests) and the starter's "writes code faster
than I can read it" — the angle here is diff size, not speed or
dishonesty.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only, no network, fully deterministic — the
program writes the same fixed string on every run.

## Files

- `main.ts` — the entrypoint, writes the joke to `/output/entry.txt`
  (`MAKEFUN_OUTPUT_DIR` overrides `/output` outside the grader).
- `LICENSE` — MIT, copied from the kit starter.
