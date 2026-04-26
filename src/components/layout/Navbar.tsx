import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { ThemeToggleButton2 } from "../ui/skiper-ui/skiper4";
import { ThemeToggleButton } from "../ui/skiper-ui/skiper26";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-card text-sm font-bold dark:border-white/10 dark:bg-white/5">
            H
          </span>
          <span className="font-heading text-sm tracking-[0.2em] text-foreground dark:text-white">
            Hoverly
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground dark:text-white/50 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/icons"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground dark:text-white/50 dark:hover:text-white"
          >
            Icons
          </Link>
          <ThemeToggleButton variant="circle" start="top-left" blur={true} />
        </nav>
      </Container>
    </header>
  );
}
