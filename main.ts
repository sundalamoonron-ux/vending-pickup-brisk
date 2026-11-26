// One Line, One Minute: The Vending Machine Pickup Line
// Event: u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
//
// Writes a single original vending-machine pickup line to /output/entry.txt.
// The line won an internal pairwise tournament over 12 original candidates
// (see tournament.md): it speaks as the machine itself, uses the machine's
// own world (insert coin, press a button, drop), lands its punch on the very
// last words, and stays short, speakable and charming.
//
// No network, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Insert coin, press my heart, and watch me drop everything for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
