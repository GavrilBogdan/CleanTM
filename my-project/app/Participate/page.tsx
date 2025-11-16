"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TimisoaraProblemsMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
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
