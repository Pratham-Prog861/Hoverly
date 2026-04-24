/**
 * Script to generate registry.json from icons directory
 *
 * This ensures the shadcn registry stays in sync with the icon files.
 * Run with: `npm run registry:build`
 */

import * as fs from "fs";
import * as path from "path";

const ICONS_DIR = path.join(__dirname, "..", "src", "icons");
const LIB_DIR = path.join(__dirname, "..", "src", "lib");
const REGISTRY_PATH = path.join(__dirname, "..", "registry.json");

const EXCLUDED_FILES = ["index.ts", "types.ts"];

interface RegistryItem {
  name: string;
  type: "registry:ui";
  registryDependencies: string[];
  dependencies: string[];
  devDependencies: string[];
  files: { path: string; type: "registry:ui" }[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

function getIconFiles(): string[] {
  try {
    const files = fs.readdirSync(ICONS_DIR);

    return files.filter((file) => {
      if (!file.endsWith(".tsx")) return false;
      if (EXCLUDED_FILES.includes(file)) return false;
      return true;
    });
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") {
      console.error(`❌ Error: Icons directory not found at "${ICONS_DIR}"`);
      console.error(
        "   Make sure you're running this script from the project root.",
      );
    } else if (err.code === "EACCES") {
      console.error(`❌ Error: Permission denied reading "${ICONS_DIR}"`);
    } else {
      console.error(`❌ Error reading icons directory: ${error}`);
    }
    process.exit(1);
  }
}

function fileToRegistryName(filename: string): string {
  return filename.replace(".tsx", "");
}

function generateRegistryItem(filename: string): RegistryItem {
  const name = fileToRegistryName(filename);
  const componentName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return {
    name: componentName,
    type: "registry:ui",
    registryDependencies: [],
    dependencies: ["motion"],
    devDependencies: [],
    files: [
      {
        path: `src/icons/${filename}`,
        type: "registry:ui",
      },
      {
        path: "src/icons/types.ts",
        type: "registry:ui",
      },
    ],
  };
}

function getIconMetadata(): { name: string; slug: string }[] {
  const iconsPath = path.join(LIB_DIR, "icons.ts");

  try {
    const content = fs.readFileSync(iconsPath, "utf-8");

    const namePattern = /name:\s*["']([^"']+)["']/g;
    const slugPattern = /slug:\s*["']([^"']+)["']/g;
    const names: string[] = [];
    const slugs: string[] = [];

    let match = namePattern.exec(content);
    while (match !== null) {
      names.push(match[1]);
      match = namePattern.exec(content);
    }

    match = slugPattern.exec(content);
    while (match !== null) {
      slugs.push(match[1]);
      match = slugPattern.exec(content);
    }

    return names
      .map((n, i) => ({ name: n, slug: slugs[i] || "" }))
      .filter((item) => item.slug && item.name);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") {
      console.error(`❌ Error: icons.ts not found at "${iconsPath}"`);
    } else if (err.code === "EACCES") {
      console.error(`❌ Error: Permission denied reading "${iconsPath}"`);
    } else {
      console.error(`❌ Error reading icons.ts: ${error}`);
    }
    process.exit(1);
  }
}

function validateIcons(iconFiles: string[]): void {
  const metadata = getIconMetadata();
  const fileNames = new Set(iconFiles.map(fileToRegistryName));
  const metadataSlugs = new Set(metadata.map((m) => m.slug));

  const missingFromFiles: string[] = [];
  for (const slug of metadataSlugs) {
    if (!fileNames.has(slug)) {
      const meta = metadata.find((m) => m.slug === slug);
      missingFromFiles.push(meta?.name || slug);
    }
  }

  const missingFromMeta: string[] = [];
  for (const fileName of fileNames) {
    const slug = fileToRegistryName(fileName);
    if (!metadataSlugs.has(slug)) {
      missingFromMeta.push(fileName);
    }
  }

  if (missingFromFiles.length > 0) {
    console.log("");
    console.log(
      `⚠️  Warning: ${missingFromFiles.length} icon(s) in metadata without matching file:`,
    );
    for (const name of missingFromFiles) {
      console.log(`   - ${name}`);
    }
  }

  if (missingFromMeta.length > 0) {
    console.log("");
    console.log(
      `⚠️  Warning: ${missingFromMeta.length} file(s) not in metadata (won't show on website):`,
    );
    for (const name of missingFromMeta) {
      console.log(`   - ${name}`);
    }
    console.log("   → Add them to src/lib/icons.ts to display on the website");
  }
}

function writeRegistry(content: string): void {
  try {
    fs.writeFileSync(REGISTRY_PATH, content);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "EACCES") {
      console.error(
        `❌ Error: Permission denied writing to "${REGISTRY_PATH}"`,
      );
    } else if (err.code === "ENOSPC") {
      console.error("❌ Error: No space left on disk");
    } else if (err.code === "EROFS") {
      console.error("❌ Error: File system is read-only");
    } else {
      console.error(`❌ Error writing registry.json: ${error}`);
    }
    process.exit(1);
  }
}

function generateRegistry(): void {
  console.log("Scanning icons directory...");
  const iconFiles = getIconFiles();
  console.log(`Found ${iconFiles.length} icon files`);

  console.log("Generating registry items...");
  const items = iconFiles.map(generateRegistryItem);

  items.sort((a, b) => a.name.localeCompare(b.name));

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "hoverly",
    homepage: "https://hoverly.com",
    items,
  };

  console.log("Writing registry.json...");

  const registryWithNotice = {
    _generated:
      "AUTO-GENERATED FILE - DO NOT EDIT. Run 'npm run registry:build' to regenerate.",
    ...registry,
  };

  const jsonContent = JSON.stringify(registryWithNotice, null, 2) + "\n";
  writeRegistry(jsonContent);

  console.log("");
  console.log("✅ Registry generated successfully!");
  console.log(`  - Total icons: ${items.length}`);

  validateIcons(iconFiles);

  console.log("");
}

generateRegistry();
