import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My AI agent demoed my project so well the client asked if they could hire the agent instead of me.";

// The gate counts Unicode code points: 1 to 280, not only white space.
const length = [...joke].length;
if (length < 1 || length > 280) {
  throw new Error(`joke must be 1-280 code points, got ${length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
