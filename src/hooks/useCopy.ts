"use client";

import * as React from "react";

const RESET_DELAY_MS = 1800;

export function useCopy() {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<number | null>(null);

  const clearCopied = React.useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = null;
    setCopiedText(null);
  }, []);

  const copy = React.useCallback(async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedText(value);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopiedText(null);
      timeoutRef.current = null;
    }, RESET_DELAY_MS);
  }, []);

  React.useEffect(() => clearCopied, [clearCopied]);

  return {
    copiedText,
    copy,
    clearCopied,
    hasCopied: copiedText !== null,
  };
}
