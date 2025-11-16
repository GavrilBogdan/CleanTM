"use client";

import React, { useState } from "react";
import Button2 from "@/components/Button2";
import InfoBubble from "@/components/InfoBubble";
import Image from "next/image";
import { Camera, Trophy, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white overflow-hidden py-20">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-40px] h-80 w-80 rounded-full bg-teal-500/25 blur-3xl" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.6),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Background illustration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <Image
          src="/images/recycling.png"
          alt="recycling"
          width={380}
          height={380}
          className="hidden sm:block drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 px-5 sm:px-8 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-2xl border border-emerald-400/30 rounded-3xl shadow-[0_0_45px_rgba(16,185,129,0.6)] px-5 py-10 sm:px-10 sm:py-12"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold text-emerald-200 tracking-[0.18em] uppercase">
              3 simple steps
              <span className="h-1 w-1 rounded-full bg-emerald-300" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-50 drop-shadow-[0_0_18px_rgba(16,185,129,0.7)]">
              How It Works ♻︎
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-emerald-100/80">
              Turn helping Timișoara into a simple, rewarding habit. Join
              cleaning quests, upload proof, earn points and climb the
              leaderboard.
            </p>
          </div>

          {/* Connecting line (desktop only) */}
          <div className="hidden sm:flex justify-center mb-6">
            <div className="relative w-[70%] flex items-center">
              <span className="h-[2px] w-full bg-gradient-to-r from-emerald-400/20 via-emerald-400 to-emerald-400/20" />
              <span className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center max-w-5xl mx-auto">
            {/* FIRST STEP */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-xl border border-emerald-200/40 p-6 rounded-2xl flex-1 flex flex-col items-center gap-4 shadow-lg shadow-emerald-900/40 hover:-translate-y-2 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/60 shadow-[0_0_16px_rgba(16,185,129,0.8)]">
                <UserCheck className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-200">
                Step 1
              </div>
              <h4 className="font-bold text-xl text-emerald-50">
                Join a quest
              </h4>
              <p className="text-sm text-emerald-100/85">
                Log in, explore the quests map and sign up for one or more
                cleanup missions around Timișoara.
              </p>

              <Button2
                text="Learn More"
                className="mt-2 text-sm font-bold px-6 py-2"
                onClick={() => openModal(learnMoreData.firstStep)}
              />
            </motion.div>

            {/* SECOND STEP */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-xl border border-emerald-200/40 p-6 rounded-2xl flex-1 flex flex-col items-center gap-4 shadow-lg shadow-emerald-900/40 hover:-translate-y-2 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/60 shadow-[0_0_16px_rgba(16,185,129,0.8)]">
                <Camera className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-200">
                Step 2
              </div>
              <h4 className="font-bold text-xl text-emerald-50">
                Clean & upload proof
              </h4>
              <p className="text-sm text-emerald-100/85">
                Go to the spot, collect trash, and take clear before & after
                photos. Upload them in your quest page.
              </p>

              <Button2
                text="Learn More"
                className="mt-2 text-sm font-bold px-6 py-2"
                onClick={() => openModal(learnMoreData.secondStep)}
              />
            </motion.div>

            {/* THIRD STEP */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-xl border border-emerald-200/40 p-6 rounded-2xl flex-1 flex flex-col items-center gap-4 shadow-lg shadow-emerald-900/40 hover:-translate-y-2 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/60 shadow-[0_0_16px_rgba(16,185,129,0.8)]">
                <Trophy className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-200">
                Step 3
              </div>
              <h4 className="font-bold text-xl text-emerald-50">
                Earn points & climb
              </h4>
              <p className="text-sm text-emerald-100/85">
                Once approved, your quest rewards you points for the leaderboard
                and eco rewards in the shop.
              </p>

              <Button2
                text="Learn More"
                className="mt-2 text-sm font-bold px-6 py-2"
                onClick={() => openModal(learnMoreData.thirdStep)}
              />
            </motion.div>
          </div>

          {/* Modal */}
          <InfoBubble
            isOpen={modalContent !== null}
            onClose={closeModal}
            title={modalContent?.title || ""}
          >
            <p>{modalContent?.description}</p>
          </InfoBubble>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
