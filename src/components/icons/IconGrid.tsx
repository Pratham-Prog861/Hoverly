"use client";

import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import IconCard from "@/components/icons/IconCard";
import SearchBar from "@/components/icons/SearchBar";
import { useFilter } from "@/hooks/useFilter";
import type { HoverlyIconRecord } from "@/icons/types";

interface IconGridProps {
  icons: HoverlyIconRecord[];
  initialQuery?: string;
}

export default function IconGrid({ icons, initialQuery = "" }: IconGridProps) {
  const { filteredItems, query, setQuery } = useFilter(icons, initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const requestedQuery = searchParams.get("q");

    if (requestedQuery) {
      setQuery(requestedQuery);
      inputRef.current?.focus();
    }
  }, [searchParams, setQuery]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SearchBar value={query} onChange={setQuery} inputRef={inputRef} />
      </motion.div>

      {filteredItems.length > 0 ? (
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filteredItems.map((icon, index) => (
            <motion.div
              key={icon.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <IconCard icon={icon} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="rounded-2xl border border-border/70 bg-card/75 p-12 text-center dark:border-white/4 dark:bg-white/1">
          <p className="text-sm text-foreground/60 dark:text-white/30">
            No icons matched your search.
          </p>
          <p className="mt-2 text-xs text-foreground/45 dark:text-white/20">
            Try adjusting your query.
          </p>
        </div>
      )}
    </div>
  );
}
