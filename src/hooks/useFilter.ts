"use client";

import * as React from "react";

import type { HoverlyIconCategory, HoverlyIconRecord } from "@/icons/types";

export function useFilter(items: HoverlyIconRecord[], initialQuery = "") {
  const [query, setQuery] = React.useState(initialQuery);
  const [activeCategory, setActiveCategory] =
    React.useState<HoverlyIconCategory>("All");

  const filteredItems = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.slug.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, items, query]);

  return {
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    filteredItems,
  };
}
