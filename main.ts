// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube views"
// (gta6-clipper-01).
//
// The entry itself is a public YouTube Short: a GTA 6 launch moment — a dog in
// goggles and a life vest driving a jet ski across Leonida Bay with Jason on
// the back — cut to vertical, with a make.fun pitch card inside the clip. This
// program has one job: hand the video's address to the grader by copying
// VIDEO.json from the repository directory into the output directory, then
// read the copy back and check it matches the source byte for byte.
//
// Places in the grader's container: the repository is mounted at /bot and the
// output lands in /output. Outside that container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR name the same two places:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only. No network, no wall clock, no state beyond
// the two files: two runs over the same repository write the same bytes, and
// a successful run prints nothing.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

function main(): void {
  const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  const sourcePath = join(repoDir, "VIDEO.json");
  const targetPath = join(outDir, "VIDEO.json");

  let sourceBytes: Buffer;
  try {
    sourceBytes = readFileSync(sourcePath);
  } catch (err) {
    fail(`could not read VIDEO.json from ${repoDir}: ${(err as Error).message}`);
  }

  mkdirSync(outDir, { recursive: true });

  try {
    copyFileSync(sourcePath, targetPath);
  } catch (err) {
    fail(`could not copy VIDEO.json to ${outDir}: ${(err as Error).message}`);
  }

  // Read the copy back: the grader trusts whatever lands in the output
  // directory, so a truncated or altered copy must fail here, not there.
  const copiedBytes = readFileSync(targetPath);
  if (!copiedBytes.equals(sourceBytes)) {
    fail(`the copy in ${outDir} does not match the repository's VIDEO.json`);
  }
}

main();
