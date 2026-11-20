// Hand-in program for the news-image-20261120 entry.
//
// The entry itself is the finished front-page image, entry.png, committed
// beside this file. All the program does is deliver it: it copies the image
// into the output directory the grader points us at, under the same name, so
// the judge receives exactly the bytes that were committed.
//
// The grader sets MAKEFUN_OUTPUT_DIR to its scratch output directory; when
// the variable is absent we fall back to /output, the grader's mount point.
// Run it locally the same way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image travels with the code: resolve it relative to this file rather
// than the caller's working directory, which the grader does not guarantee.
const imageSource = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const imageTarget = join(outputDir, 'entry.png');

// The grader normally creates the output directory for us, but creating it
// when it is missing costs nothing and keeps local runs one step shorter.
mkdirSync(outputDir, { recursive: true });
copyFileSync(imageSource, imageTarget);

// A truncated or partial copy would hand the judge a broken image, so check
// the delivered file against the source before reporting success.
const sourceBytes = statSync(imageSource).size;
const copiedBytes = statSync(imageTarget).size;
if (copiedBytes !== sourceBytes) {
  throw new Error(`copy mismatch: source is ${sourceBytes} bytes, output is ${copiedBytes}`);
}

console.log(`handed in entry.png (${copiedBytes} bytes) -> ${imageTarget}`);
