import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { Expertise } from "@/components/site/Expertise";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";

import { Footer } from "@/components/site/Footer";

const title = "Mostafa Samir — Booking Systems Full Stack Engineer";
const description =
  "Senior Full Stack Engineer building high-performance, multi-tenant booking and scheduling infrastructure with .NET 8, microservices and real-time systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/images/portrait-cutout.webp",
        imageSrcSet:
          "/images/portrait-cutout-800.webp 512w, /images/portrait-cutout.webp 1024w",
        imageSizes: "(min-width: 1024px) 52vw, 72vw",
        fetchPriority: "high",
        type: "image/webp",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Expertise />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}
