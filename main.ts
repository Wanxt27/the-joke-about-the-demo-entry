import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents.
// Written for the make.fun bounty "The joke about the demo".
const joke =
  "I let my AI agent run the demo \u2014 it fixed the bug live, then asked me why I was still in the room.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
