"use client";

import React, { useState } from "react";
import Button2 from "@/components/Button2";
import InfoBubble from "@/components/InfoBubble";
import Image from "next/image";
import { Camera, Trophy, UserCheck } from "lucide-react";

// Modal content
type ModalContent = {
  title: string;
  description: string;
} | null;

const learnMoreData = {
  firstStep: {
    title: "About Signing Up",
    description:
      "Signing up for a quest is easy. Just head to our 'Quests' page, find one near you, and click 'Join'. You'll see all the details, like location and objectives. You can join as many as you like!",
  },
  secondStep: {
    title: "About Submitting Proof",
    description:
      "To verify your hard work, take a 'before' and 'after' photo. Then open the quest page in your dashboard and upload them. Our team will review them shortly.",
  },
  thirdStep: {
    title: "About Points & Leaderboards",
    description:
      "Verified quests reward you with points used to climb the leaderboard, unlock badges, and compete with friends!",
  },
};

const HowItWorks = () => {
  const [modalContent, setModalContent] = useState<ModalContent>(null);

  const openModal = (content: { title: string; description: string }) =>
    setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <section className="min-h-screen flex justify-center bg-gradient-to-br from-emerald-600/60 via-green-700/50 to-emerald-900/70 mix-blend-multiply flex-col text-center text-white relative py-20">
      <div className="p-5 flex justify-center">
        <div
          className="bg-white/90 backdrop-blur-2xl border border-white/20 
        rounded-3xl  shadow-[0_0_25px_rgba(0,255,150,0.7)] 
        hover:shadow-[0_0_40px_rgba(0,255,150,1)] 
        transition-all duration-500 px-5 py-[5rem] sm:p-[5rem] rounded-xl font-bold text-gray-50 flex flex-col  sm:gap-10 relative"
        >
          {" "}
          <div className="sm:flex w-full sm:flex-col justify-center items-center">
            {" "}
            <Image
              src="/images/recycling.png"
              alt=""
              width={300}
              height={300}
              className="hidden sm:flex absolute -z-20 opacity-40"
            />
            <h1 className="text-5xl sm:text-6xl text-green-700 text-shadow-sm text-shadow-green-400 font-extrabold mb-16">
              How It Works ♻︎
            </h1>
            {/* Connecting line (desktop only) */}
            <div className="hidden sm:flex absolute top-[420px] w-[70%] left-1/2 -translate-x-1/2 justify-between">
              <div className="w-1/3 h-1 bg-green-400"></div>
              <div className="w-1/3 h-1 bg-green-400"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 justify-center px-6 max-w-6xl mx-auto">
              {/* FIRST STEP */}
              <div
                className="bg-white/50 backdrop-blur-md border border-white/70
          p-6 rounded-2xl flex-1 flex gap-5 flex-col items-center
          opacity-0 translate-y-10 animate-fadeSlideUp
          transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
                style={{ animationDelay: "0.1s" }}
              >
                <UserCheck className="w-12 h-12 text-green-500" />
                <h4 className="font-bold text-xl uppercase text-gray-700">
                  First Step
                </h4>
                <p className="text-gray-800">
                  Log in and sign up for a quest (or multiple)
                </p>

                <Button2
                  text="Learn More"
                  className="text-lg font-bold"
                  onClick={() => openModal(learnMoreData.firstStep)}
                />
              </div>

              {/* SECOND STEP */}
              <div
                className="bg-white/50 backdrop-blur-md border border-white/70
          p-6 rounded-2xl flex-1 flex gap-5 flex-col items-center
          opacity-0 translate-y-10 animate-fadeSlideUp
          transition-all duration-500 hover:-translate-y-3 hover:shadow-xl mt-5 sm:mt-0"
                style={{ animationDelay: "0.3s" }}
              >
                <Camera className="w-12 h-12 text-green-500" />
                <h4 className="font-bold text-xl uppercase text-gray-700">
                  Second Step
                </h4>
                <p className="text-gray-800">
                  Do your task, take pictures, and upload them on the site!
                </p>

                <Button2
                  text="Learn More"
                  className="text-lg font-bold"
                  onClick={() => openModal(learnMoreData.secondStep)}
                />
              </div>

              {/* THIRD STEP */}
              <div
                className="bg-white/50 backdrop-blur-md border border-white/70
          p-6 rounded-2xl flex-1 flex gap-5 flex-col items-center
          opacity-0 translate-y-10 animate-fadeSlideUp
          transition-all duration-500 hover:-translate-y-3 hover:shadow-xl mt-5 sm:mt-0"
                style={{ animationDelay: "0.5s" }}
              >
                <Trophy className="w-12 h-12 text-green-500" />
                <h4 className="font-bold text-xl uppercase text-gray-700">
                  Third Step
                </h4>
                <p className="text-gray-800">
                  Collect your points and climb the leaderboards
                </p>

                <Button2
                  text="Learn More"
                  className="text-lg font-bold"
                  onClick={() => openModal(learnMoreData.thirdStep)}
                />
              </div>
            </div>
            {/* Modal */}
            <InfoBubble
              isOpen={modalContent !== null}
              onClose={closeModal}
              title={modalContent?.title || ""}
            >
              <p>{modalContent?.description}</p>
            </InfoBubble>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
