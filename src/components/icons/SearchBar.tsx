"use client";

import { Search } from "lucide-react";
import type { RefObject } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  showShortcut?: boolean;
  shortcutKey?: string;
}

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  inputRef,
  showShortcut = true,
  shortcutKey = "F",
}: SearchBarProps) {
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <label className="group flex h-10 w-full max-w-xs items-center gap-2.5 rounded-lg border border-border/40 bg-card/40 px-3 text-foreground/40 transition-colors hover:border-border/60 focus-within:border-(--color-highlight)/50 focus-within:bg-card/60 dark:border-white/5 dark:bg-white/2 dark:text-white/30 dark:hover:border-white/10 dark:focus-within:border-(--color-highlight)/40 dark:focus-within:bg-white/4">
      <Search className="size-4 shrink-0 text-foreground/40 transition-colors group-focus-within:text-(--color-highlight) dark:text-white/35" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (!onSubmit) return;
          if (event.key !== "Enter") return;
          event.preventDefault();
          onSubmit(value);
        }}
        placeholder="Search icons..."
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none dark:text-white dark:placeholder:text-white/25"
      />
      {showShortcut ? (
        <div className="hidden items-center overflow-hidden rounded border border-border/30 bg-background/50 text-[10px] text-foreground/35 sm:flex dark:border-white/5 dark:bg-black/20 dark:text-white/25">
          <span className="border-r border-border/20 px-1.5 py-1 dark:border-white/4">
            {isMac ? "⌘" : "Ctrl"}
          </span>
          <span className="px-1.5 py-1 font-medium dark:text-white/35">
            {shortcutKey}
          </span>
        </div>
      ) : null}
    </label>
  );
}
