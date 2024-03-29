#!/usr/bin/env node

import welcome from "../src/cli.js";

welcome();

export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
