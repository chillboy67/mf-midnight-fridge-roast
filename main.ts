// Midnight Fridge Roast — one line, under the 200-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The fridge hums at midnight like it pays rent, but all it's guarding is a pickle jar older than my last relationship and one very judgmental light.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
