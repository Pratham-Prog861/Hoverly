"use client";

import { Copy, Play } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

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
    <Link
      href={`/icons/${icon.slug}`}
      className="group relative flex min-w-[140px] flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.05] bg-[linear-gradient(180deg,rgba(18,22,28,0.4),rgba(12,14,18,0.6))] p-4 py-5 transition-all hover:border-white/[0.1] hover:bg-[linear-gradient(180deg,rgba(22,26,34,0.5),rgba(14,16,22,0.7))]"
    >
      <div className="absolute top-2 right-2 hidden sm:hidden [@media(hover:none)]:block">
        <button
          type="button"
          className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2 text-white/[0.35] transition-all hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-white"
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
          className="text-white/[0.6] transition-colors group-hover:text-white"
        />
      </motion.div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-1.5 text-white/[0.3] transition-all hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-white"
        >
          {copied ? (
            <Copy className="size-3.5 text-emerald-400" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>
    </Link>
  );
}
