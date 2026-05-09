"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const GITHUB_API = "https://api.github.com/repos/Pratham-Prog861/Hoverly";
const CACHE_KEY = "github-stars-cache";
const CACHE_DURATION = 600000; // 10 minutes in ms

interface StarsCacheData {
  stars: number;
  timestamp: number;
}

interface GithubStarsContextType {
  stars: number | null;
}

const GithubStarsContext = createContext<GithubStarsContextType>({
  stars: null,
});

export function useGithubStars() {
  return useContext(GithubStarsContext);
}

function getCachedStars(): StarsCacheData | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const data: StarsCacheData = JSON.parse(cached);
      if (
        typeof data?.stars === "number" &&
        typeof data?.timestamp === "number"
      ) {
        return data;
      }
    }
  } catch {
    // Ignore localStorage errors
    return null;
  }
  return null;
}

export function GithubStarsProvider({ children }: { children: ReactNode }) {
  const [stars, setStars] = useState<number | null>(
    () => getCachedStars()?.stars ?? null,
  );

  useEffect(() => {
    const cached = getCachedStars();
    const controller = new AbortController();

    // Stale-while-revalidate: if cached exists (even if stale), show it immediately.
    if (cached && stars === null) {
      setStars(cached.stars);
    }

    let retryTimeout: ReturnType<typeof setTimeout> | null = null;

    const fetchStars = async () => {
      try {
        const res = await fetch(GITHUB_API, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          cache: "no-store",
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        const data = await res.json();

        if (data?.stargazers_count != null) {
          const count = data.stargazers_count;
          setStars(count);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ stars: count, timestamp: Date.now() }),
          );
        }
      } catch {
        // Retry once if we couldn't load anything at all.
        if (stars === null) {
          retryTimeout = setTimeout(fetchStars, 30000);
        }
      }
    };

    fetchStars();

    return () => {
      controller.abort();
      if (retryTimeout) clearTimeout(retryTimeout);
    };
    // Intentionally only run on mount; cache handles staleness.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GithubStarsContext.Provider value={{ stars }}>
      {children}
    </GithubStarsContext.Provider>
  );
}
