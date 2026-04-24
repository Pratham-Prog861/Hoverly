"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  command: string;
}

export function CodeBlock({ command }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/80 dark:border-white/[0.06] dark:bg-white/[0.02]">
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5 dark:border-white/[0.04]">
        <span className="text-xs text-foreground/55 dark:text-white/[0.35]">
          Terminal
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-foreground/55 transition-colors hover:bg-background hover:text-foreground dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-white/[0.4] dark:hover:bg-white/[0.06] dark:hover:text-white"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm">
        <code className="text-foreground/75 dark:text-white/[0.7]">
          <span className="mr-2 text-[var(--color-highlight)]">$</span>
          {command}
        </code>
      </pre>
    </div>
  );
}

interface CodeBlockSimpleProps {
  code: string;
}

export function CodeBlockSimple({ code }: CodeBlockSimpleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/80 dark:border-white/[0.06] dark:bg-black/[0.3]">
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5 dark:border-white/[0.04]">
        <span className="text-xs text-foreground/55 dark:text-white/[0.35]">
          Code
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-foreground/55 transition-colors hover:bg-background hover:text-foreground dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-white/[0.4] dark:hover:bg-white/[0.06] dark:hover:text-white"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="max-h-[400px] overflow-auto p-4 text-sm">
        <code className="whitespace-pre-wrap text-foreground/75 dark:text-white/[0.7]">
          {code}
        </code>
      </pre>
    </div>
  );
}
