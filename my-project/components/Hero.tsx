import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center relative flex-col">
      <div className="flex w-full min-h-screen flex-col border-2">
        <div className="flex flex-wrap  text-center ">
          <h1 className="w-full font-bold text-white">The CleanTM platform</h1>
          <p className="w-full">bla bla bla</p>
        </div>
        <div>
          <Image
            src="/images/recycle.png"
            alt=""
            fill
            className="absolute -z-10 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
