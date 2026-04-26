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
    <div className="surface-card w-full overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 dark:border-white/8 sm:px-5">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground/60 dark:text-white/45">
          {managers.map((manager) => {
            const isActive = manager === activeManager;

            return (
              <button
                key={manager}
                type="button"
                onClick={() => setActiveManager(manager)}
                className={`cursor-pointer rounded-xl px-3 py-1.5 transition-colors ${
                  isActive
                    ? "border border-border bg-card text-foreground dark:border-white/12 dark:bg-white/10 dark:text-white"
                    : "border border-transparent text-foreground/60 hover:bg-muted/60 hover:text-foreground dark:text-white/45 dark:hover:bg-white/6 dark:hover:text-white/80"
                }`}
                aria-pressed={isActive}
              >
                {manager}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#8a2b34]" />
          <span className="size-2.5 rounded-full bg-[#8a6c18]" />
          <span className="size-2.5 rounded-full bg-[#1f6a3d]" />
        </div>
      </div>

      <pre className="px-4 py-4 text-left font-mono text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap wrap-break-word dark:text-white/85 sm:px-5 sm:text-base">
        <code>
          <span className="text-(--color-highlight)">$</span> {installCommand}
        </code>
      </pre>
    </div>
  );
}
