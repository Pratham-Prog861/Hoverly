import CTA from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import WhyHoverly from "@/components/landing/Features";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyHoverly />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
