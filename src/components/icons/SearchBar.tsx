"use client";

import { Search } from "lucide-react";
import type { RefObject } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
}

export default function SearchBar({
  value,
  onChange,
  inputRef,
}: SearchBarProps) {
  return (
    <label className="group flex h-12 w-full max-w-sm items-center gap-3 rounded-xl border border-border/80 bg-card/80 px-4 text-foreground/50 transition-colors hover:border-border focus-within:border-border focus-within:bg-card dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-white/[0.4] dark:hover:border-white/[0.1] dark:focus-within:border-white/[0.12] dark:focus-within:bg-white/[0.04]">
      <Search className="size-4 shrink-0 text-foreground/45 transition-colors group-focus-within:text-[var(--color-highlight)] dark:text-white/[0.35]" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search icons..."
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/45 focus:outline-none dark:text-white dark:placeholder:text-white/[0.3]"
      />
      <div className="hidden items-center overflow-hidden rounded-lg border border-border/80 bg-background/70 text-[11px] text-foreground/45 sm:flex dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-white/[0.35]">
        <span className="border-r border-border/70 px-2.5 py-1.5 dark:border-white/[0.06]">
          ⌘
        </span>
        <span className="px-2.5 py-1.5 font-medium text-foreground/60 dark:text-white/[0.5]">
          K
        </span>
      </div>
    </label>
  );
}
