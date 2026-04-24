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
    <label className="group flex h-12 w-full max-w-sm items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 text-white/[0.4] transition-colors hover:border-white/[0.1] focus-within:border-white/[0.12] focus-within:bg-white/[0.04]">
      <Search className="size-4 shrink-0 text-white/[0.35] transition-colors group-focus-within:text-[var(--color-highlight)]" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search icons..."
        className="flex-1 bg-transparent text-sm text-white placeholder:text-white/[0.3] focus:outline-none"
      />
      <div className="hidden items-center overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03] text-[11px] text-white/[0.35] sm:flex">
        <span className="border-r border-white/[0.06] px-2.5 py-1.5">⌘</span>
        <span className="px-2.5 py-1.5 font-medium text-white/[0.5]">K</span>
      </div>
    </label>
  );
}
