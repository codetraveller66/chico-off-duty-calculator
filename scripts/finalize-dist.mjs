import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "public");
const output = resolve(root, "dist");

if (existsSync(output)) rmSync(output, { recursive: true, force: true });
cpSync(source, output, { recursive: true });
