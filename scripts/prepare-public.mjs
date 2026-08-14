import { cpSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "public");

mkdirSync(output, { recursive: true });
for (const file of ["index.html", "styles.css", "app.js"]) {
  cpSync(resolve(root, file), resolve(output, file));
}
cpSync(resolve(root, "assets"), resolve(output, "assets"), { recursive: true });
