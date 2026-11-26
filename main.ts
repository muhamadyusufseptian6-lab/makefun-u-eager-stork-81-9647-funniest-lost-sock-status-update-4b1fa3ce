// Funniest Lost Sock Status Update — make.fun bounty entry.
// Writes one status update, in the voice of a lost sock, to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic, stdlib-only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Day 47 under the fridge. The dust bunnies made me mayor. My partner filed a missing-sock report. I said nothing.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
