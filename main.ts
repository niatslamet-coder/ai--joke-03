// ai-joke-03 entry (Node 22, standard library only): writes one original
// one-liner about AI coding agents to /output/entry.txt.
//
// The joke: a trivial fix, an absurd diff. Every developer who works beside
// a coding agent has watched it touch half the repo for a one-character
// change — the setup promises something small, the punchline answers with
// a number that makes the smallness impossible. Revised from the first
// draft ("fixed a typo. The diff was 47 files."): "one" sets the 1-vs-47
// contrast up front, and "touched" replaces the flat "was" with the verb
// for what the agent actually did across the repo.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'My coding agent fixed one typo. The diff touched 47 files.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
