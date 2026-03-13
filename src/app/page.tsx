import React from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col w-full text-foreground relative selection:bg-rose-500/30">
      {/* 1. The Sticky Scroller mapping 500vh of space and the Parallax Overlay */}
      <ScrollyCanvas />

      {/* 2. Experience Timeline */}
      <Experience />

      {/* 3. The Work Grid */}
      <Projects />

      {/* 4. Technical Skills Footer */}
      <Footer />
    </main>
  );
}
