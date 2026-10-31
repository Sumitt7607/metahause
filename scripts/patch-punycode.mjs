import fs from "fs";
import path from "path";

const files = [
  "node_modules/mongodb-connection-string-url/node_modules/tr46/index.js",
  "node_modules/tr46/index.js",
];

for (const rel of files) {
  const p = path.resolve(process.cwd(), rel);
  if (fs.existsSync(p)) {
    try {
      let content = fs.readFileSync(p, "utf-8");
      if (content.includes('require("punycode/")')) {
        content = content.replace('require("punycode/")', 'require("punycode")');
        fs.writeFileSync(p, content, "utf-8");
        console.log(`[patch] Patched ${rel}`);
      }
    } catch (e) {
      console.warn(`[patch] Could not patch ${rel}:`, e.message);
    }
  }
}

