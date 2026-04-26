import IconGrid from "@/components/icons/IconGrid";
import InstallCommandCard from "@/components/icons/InstallCommandCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { hoverlyIcons } from "@/lib/icons";

export default async function IconsPage({ searchParams }: PageProps<"/icons">) {
  const params = await searchParams;
  const initialQuery =
    typeof params.q === "string"
      ? params.q
      : Array.isArray(params.q)
        ? (params.q[0] ?? "")
        : "";

  const registryUrl = "https://hoverly.com/r/arrow-back-icon.json";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section className="relative overflow-hidden pb-14 pt-20 sm:pt-28">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="hero-glow pointer-events-none absolute -top-28 left-[-8%] h-96 w-96 opacity-60" />
          <Container className="relative">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
              <div className="max-w-3xl text-left">
                <p className="text-xs font-semibold tracking-[0.24em] text-(--color-highlight) uppercase">
                  Icon catalog
                </p>

                <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl dark:text-white">
                  Static icons{" "}
                  <span className="text-(--color-highlight)">feel alive</span>{" "}
                  now
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 dark:text-white/45 sm:text-lg">
                  A collection of smooth, high-quality animated icons for your
                  next project. Copy and paste directly into your app.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground/55 dark:text-white/40 sm:text-base">
                  <span>works seamlessly with</span>
                  <span className="font-semibold text-(--color-highlight)">
                    shadcn
                  </span>
                  <span>via cli</span>
                </div>

                <div className="mt-4 flex items-center gap-3 text-sm text-foreground/55 dark:text-white/40 sm:text-base">
                  <span>crafted with care and</span>
                  <span className="rounded-xl border border-border/75 bg-card/80 px-3 py-1.5 font-medium text-(--color-highlight) dark:border-white/12 dark:bg-white/6">
                    motion -&gt;
                  </span>
                </div>
              </div>

              <div className="pt-16 lg:pt-24">
                <InstallCommandCard registryUrl={registryUrl} />
              </div>
            </div>
          </Container>
        </Section>

        <Section className="-mt-14 pt-2 pb-16">
          <Container>
            <IconGrid icons={hoverlyIcons} initialQuery={initialQuery} />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
