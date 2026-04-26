"use client";

import { Copy, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { HoverlyIconRecord } from "@/icons/types";
import { hoverlyIconComponents } from "@/lib/icons";

interface IconCardProps {
  icon: HoverlyIconRecord;
}

export default function IconCard({ icon }: IconCardProps) {
  const PreviewIcon = hoverlyIconComponents[icon.slug];
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(icon.sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-background relative flex min-w-35 flex-1 flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md sm:w-48 sm:flex-none dark:bg-black/40 dark:border-white/10 cursor-pointer">
            <div className="absolute top-2 right-2 hidden sm:hidden [@media(hover:none)]:block">
              <button className="text-foreground/40 hover:bg-foreground/10 hover:text-foreground rounded-md p-2 transition-colors dark:text-white/30 dark:hover:bg-white/10 dark:hover:text-white">
                <Play className="size-4" />
              </button>
            </div>

            <Link
              href={`/icons/${icon.slug}`}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 p-2"
            >
              <div className="flex cursor-pointer items-center justify-center">
                <PreviewIcon
                  size={56}
                  className="text-foreground/70 transition-colors hover:text-foreground dark:text-white/60 dark:hover:text-white"
                />
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="text-foreground/40 hover:text-foreground transition-colors dark:text-white/30 dark:hover:text-white"
              >
                {copied ? (
                  <Copy className="size-4 text-emerald-400" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
              <Link
                href={`/icons/${icon.slug}`}
                className="text-foreground/40 hover:text-foreground transition-colors dark:text-white/30 dark:hover:text-white"
              >
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={8}>
          <p className="text-sm font-medium">{icon.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}