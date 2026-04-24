import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { ThemeToggleButton2 } from "../ui/skiper-ui/skiper4";
import { ThemeToggleButton } from "../ui/skiper-ui/skiper26";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-foreground"
        >
          <span className="flex size-10 items-center justify-center rounded-2xl border border-border/80 bg-card shadow-[0_10px_40px_rgba(18,194,233,0.12)]">
            H
          </span>
          <span className="font-heading text-base tracking-[0.32em] text-foreground">
            Hoverly
          </span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          <Button
            variant="ghost"
            asChild
            className="text-foreground/70 hover:text-foreground"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-foreground/70 hover:text-foreground"
          >
            <Link href="/icons">Icons</Link>
          </Button>
          <ThemeToggleButton variant="circle" start="top-left" blur={true} />
        </nav>
      </Container>
    </header>
  );
}
