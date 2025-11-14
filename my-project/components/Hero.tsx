"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Button from "@/components/Button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PulsingDot = ({ position }: { position: string }) => {
  return (
    <div className={`absolute ${position}`}>
      <span className="relative flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center relative flex-col overflow-hidden">
      <Image
        src="/images/litter.png"
        alt="litter"
        width={100}
        height={100}
        className="absolute bottom-15 left-25 opacity-75 animate-fluid-bounce "
      />
      <div className="absolute inset-0 -z-20 opacity-20">
        <Image
          src="/images/map-bg.png"
          alt="Map background"
          layout="fill"
          objectFit="cover"
          className="grayscale"
        />
        <div className="absolute inset-0 bg-green-700/50 mix-blend-multiply" />
        <div className="absolute inset-0 ">
          <PulsingDot position="top-1/4 left-1/3" />
          <PulsingDot position="top-2/3 left-1/4" />
          <PulsingDot position="top-1/3 left-3/4" />
          <PulsingDot position="top-3/4 left-2/3" />
        </div>
      </div>

      <div className="flex w-full min-h-screen flex-col justify-center relative z-10">
        <div className="flex flex-wrap  text-center bg-white/30 p-5 ">
          <h1
            className={`w-full font-bold text-green-50 text-6xl ${montserrat.className}`}
          >
            CleanTM ♻️
          </h1>
          <p className="w-full text-xl font-semibold text-green-900">
            Together on a mission!
          </p>
        </div>
        <div className="flex flex-row gap-10 bg-white/30 pb-2 w-full justify-center">
          <Link href="#">
            <Button
              text="About us"
              className="text-lg font-bold cursor-pointer"
            />
          </Link>
          <Link href="#">
            <Button text="Participate" className="text-lg font-bold" />
          </Link>
        </div>

        {/* <div className=" p-5  flex justify-center ">
          <Image
            src="/images/recycle_1.png"
            alt=""
            width={400}
            height={600}
            className="absolute -z-10 "
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
