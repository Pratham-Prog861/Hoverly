import IconGrid from "@/components/icons/IconGrid";
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

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section className="pb-12 pt-20 sm:pt-28">
          <Container>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.28em] text-(--color-highlight) uppercase">
                Icon catalog
              </p>
              <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Animated icons for modern interfaces.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-foreground/65 dark:text-white/45">
                Search, preview, copy, and install motion-first icons built to
                fit seamlessly into React products.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="pt-2 pb-16">
          <Container>
            <IconGrid icons={hoverlyIcons} initialQuery={initialQuery} />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
