"use client";

import { Copy, Play } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

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
          <Link
            href={`/icons/${icon.slug}`}
            className="group relative flex min-w-35 flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-border/70 bg-[linear-gradient(180deg,rgba(246,250,255,0.9),rgba(236,243,255,0.96))] p-4 py-5 transition-all hover:border-border hover:bg-[linear-gradient(180deg,rgba(240,247,255,0.95),rgba(230,239,255,1))] dark:border-white/5 dark:bg-[linear-gradient(180deg,rgba(18,22,28,0.4),rgba(12,14,18,0.6))] dark:hover:border-white/10 dark:hover:bg-[linear-gradient(180deg,rgba(22,26,34,0.5),rgba(14,16,22,0.7))]"
          >
            <div className="absolute top-2 right-2 hidden sm:hidden [@media(hover:none)]:block">
              <button
                type="button"
                className="rounded-lg border border-border/70 bg-background/70 p-2 text-foreground/45 transition-all hover:border-border hover:bg-background hover:text-foreground dark:border-white/5 dark:bg-white/2 dark:text-white/35 dark:hover:border-white/10 dark:hover:bg-white/4 dark:hover:text-white"
                onClick={(e) => e.preventDefault()}
              >
                <Play className="size-3.5" />
              </button>
            </div>

            <motion.div
              className="flex cursor-pointer items-center justify-center p-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <PreviewIcon
                size={44}
                className="text-foreground/65 transition-colors group-hover:text-foreground dark:text-white/60 dark:group-hover:text-white"
              />
            </motion.div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-lg border border-border/70 bg-background/70 p-1.5 text-foreground/40 transition-all hover:border-border hover:bg-background hover:text-foreground dark:border-white/5 dark:bg-white/2 dark:text-white/3 dark:hover:border-white/10 dark:hover:bg-white/4 dark:hover:text-white"
              >
                {copied ? (
                  <Copy className="size-3.5 text-emerald-400" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </button>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={8}>
          {icon.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
