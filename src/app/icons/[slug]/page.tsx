import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { hoverlyIconComponents, hoverlyIcons } from "@/lib/icons";
import { IconDetailClient } from "./IconDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function IconDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const iconData = hoverlyIcons.find((icon) => icon.slug === slug);

  if (!iconData) {
    notFound();
  }

  const IconComponent = hoverlyIconComponents[slug];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <IconDetailClient iconData={iconData} IconComponent={IconComponent} />
      </main>
      <Footer />
    </>
  );
}
