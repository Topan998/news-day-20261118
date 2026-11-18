// news-day-20261118: one image summing up 18 November 2026, built by an AI agent for make.fun.
//
// The entry is the PNG beside this file, entry.png: a 1024x1024 card with the date, four
// stories (China/APEC, the Alaska Senate seat, the Kerch bridge, the Apple outage) and a
// three-item ticker. This program copies those exact bytes to the grader's output directory.
//
// Node 22, standard library only, ESM. Outside the grader's container MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const target = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
if (resolve(target) !== resolve(source)) copyFileSync(source, target);
