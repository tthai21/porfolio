"use client";

import Image from "next/image";
import React from "react";
import avatar from "@/public/Avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

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
      <motion.h1
        className="text-center font-medium mt-4 text-2xl !leading-[1.5] mb-7"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
      >
        <span className="font-bold">Hello, I{`'`}m Alex Thai.</span>I{`'`}m a
        <span className="font-bold"> full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Typescript)</span>.
      </motion.h1>
      <motion.div
        className="flex gap-3 items-center justify-center flex-col sm:flex-row text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="text-gray-950 bg-white font-medium px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Download CV
          <HiDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/trong-duc-2588b724b"
          target="_blank"
          className="text-gray-700 bg-white font-medium p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/tthai21"
          target="_blank"
          className="text-gray-700 text-[1.35rem] bg-white font-medium p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
