"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// importă componenta mare (cea în care e harta + statistici + heatmap)
const TimisoaraProblemsMap = dynamic(() => import("@/components/Map"), {
  ssr: false, // foarte important pentru ca leaflet să nu ruleze pe server
});

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <TimisoaraProblemsMap />
        <Footer />
      </main>
    </>
  );
}
