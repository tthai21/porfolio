"use client";

import Image from "next/image";
import React from "react";
import avatar from "@/public/Avatar.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0 "
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "string", //bouncy effect
                stiffness: 125, //how bouncy
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <p className="text-center font-medium mt-4 text-2xl !leading-[1.5] ">
        <span className="font-bold">Hello, I{`'`}m Alex Thai.</span>I{`'`}m a
        <span className="font-bold"> full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Typescript)</span>.
      </p>
    </section>
  );
}
