"use client";

import { useMemo, useState } from "react";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface InstallCommandCardProps {
  registryUrl: string;
}

const managers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

function getCommand(manager: PackageManager, registryUrl: string) {
  if (manager === "npm") {
    return `npx shadcn@latest add ${registryUrl}`;
  }
  if (manager === "pnpm") {
    return `pnpm dlx shadcn@latest add ${registryUrl}`;
  }
  if (manager === "yarn") {
    return `yarn shadcn@latest add ${registryUrl}`;
  }
  return `bunx --bun shadcn@latest add ${registryUrl}`;
}

export default function InstallCommandCard({
  registryUrl,
}: InstallCommandCardProps) {
  const [activeManager, setActiveManager] = useState<PackageManager>("npm");

  const installCommand = useMemo(
    () => getCommand(activeManager, registryUrl),
    [activeManager, registryUrl],
  );

  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background shadow-2xl dark:border-white/10 dark:bg-black/40">
      <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 dark:border-white/10">
        <div className="flex items-center gap-1">
          {managers.map((manager) => {
            const isActive = manager === activeManager;
            return (
              <button
                key={manager}
                type="button"
                onClick={() => setActiveManager(manager)}
                className={`cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-foreground/10 text-foreground dark:bg-white/10 dark:text-white"
                    : "text-foreground/50 hover:bg-foreground/5 hover:text-foreground/80 dark:text-white/40 dark:hover:bg-white/5 dark:hover:text-white/60"
                }`}
                aria-pressed={isActive}
              >
                {manager}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/40" />
          <span className="size-2.5 rounded-full bg-yellow-500/40" />
          <span className="size-2.5 rounded-full bg-green-500/40" />
        </div>
      </div>
      <div className="group relative p-4">
        <pre className="text-left font-mono text-base text-foreground dark:text-white/80 whitespace-pre-wrap break-all">
          <span className="text-(--color-highlight)">$</span> {installCommand}
        </pre>
      </div>
    </div>
  );
}