/**
 * Generate shadcn registry-item JSON files in public/r.
 *
 * Usage:
 * - npm run registry:r -- hashtag-icon
 *   Generates JSON for one icon slug using src/icons/hashtag-icon.tsx.
 *
 * - npm run registry:r -- my-component src/components/my-component.tsx "My Component"
 *   Generates JSON for a custom source file.
 *
 * - npm run registry:r:all
 *   Generates JSON for all icon files in src/icons.
 */

import * as fs from "fs";
import * as path from "path";

const ROOT_DIR = path.join(__dirname, "..");
const ICONS_DIR = path.join(ROOT_DIR, "src", "icons");
const OUTPUT_DIR = path.join(ROOT_DIR, "public", "r");

const EXCLUDED_ICON_FILES = ["index.ts", "types.ts"];

interface RegistryItemFile {
  path: string;
  type: "registry:component" | "registry:lib";
  target: string;
}

interface RegistryItem {
  $schema: string;
  name: string;
  type: "registry:component";
  title: string;
  description: string;
  dependencies: string[];
  files: RegistryItemFile[];
}

function toTitleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeToPosix(relativePath: string): string {
  return relativePath.replace(/\\/g, "/");
}

function defaultTargetForSource(sourcePath: string): string {
  if (sourcePath.startsWith("src/icons/")) {
    const fileName = path.posix.basename(sourcePath);
    return `icons/${fileName}`;
  }

  return path.posix.basename(sourcePath);
}

function buildRegistryItem(
  slug: string,
  sourcePath: string,
  explicitTitle?: string,
): RegistryItem {
  const title = explicitTitle || toTitleFromSlug(slug);
  const files: RegistryItemFile[] = [
    {
      path: sourcePath,
      type: "registry:component",
      target: defaultTargetForSource(sourcePath),
    },
  ];

  if (
    sourcePath.startsWith("src/icons/") &&
    sourcePath !== "src/icons/types.ts"
  ) {
    files.push({
      path: "src/icons/types.ts",
      type: "registry:lib",
      target: "icons/types.ts",
    });
  }

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: slug,
    type: "registry:component",
    title,
    description: `A shadcn-compatible animated ${title} powered by Motion.`,
    dependencies: ["motion"],
    files,
  };
}

function writeRegistryItem(slug: string, item: RegistryItem): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = path.join(OUTPUT_DIR, `${slug}.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(item, null, 2)}\n`, "utf-8");
  console.log(`✔ Generated public/r/${slug}.json`);
}

function generateAllIcons(): void {
  const files = fs.readdirSync(ICONS_DIR).filter((file) => {
    if (!file.endsWith(".tsx")) return false;
    if (EXCLUDED_ICON_FILES.includes(file)) return false;
    return true;
  });

  if (files.length === 0) {
    console.log("No icon files found in src/icons.");
    return;
  }

  for (const file of files) {
    const slug = file.replace(/\.tsx$/, "");
    const sourcePath = `src/icons/${file}`;
    const item = buildRegistryItem(slug, sourcePath);
    writeRegistryItem(slug, item);
  }

  console.log(`\nDone. Generated ${files.length} registry item file(s).`);
}

function generateSingle(args: string[]): void {
  const [slugArg, sourcePathArg, ...titleParts] = args;

  if (!slugArg) {
    console.error("Missing slug.");
    process.exit(1);
  }

  const slug = slugArg.trim();
  const sourcePath = normalizeToPosix(
    sourcePathArg?.trim() || `src/icons/${slug}.tsx`,
  );

  const absoluteSource = path.join(ROOT_DIR, sourcePath);
  if (!fs.existsSync(absoluteSource)) {
    console.error(`Source file not found: ${sourcePath}`);
    process.exit(1);
  }

  const explicitTitle = titleParts.join(" ").trim() || undefined;
  const item = buildRegistryItem(slug, sourcePath, explicitTitle);
  writeRegistryItem(slug, item);
}

function printUsage(): void {
  console.log("Usage:");
  console.log(
    '  npm run registry:r -- <slug> [sourcePath] ["Title With Spaces"]',
  );
  console.log("Examples:");
  console.log("  npm run registry:r -- hashtag-icon");
  console.log(
    '  npm run registry:r -- my-component src/components/my-component.tsx "My Component"',
  );
  console.log("  npm run registry:r:all");
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 1 && args[0] === "--all") {
    generateAllIcons();
    return;
  }

  if (args.length === 0) {
    console.error("Missing required slug/component argument.");
    printUsage();
    process.exit(1);
  }

  generateSingle(args);
}

main();
