"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="flex flex-col text-center max-w-[45rem] mb-28 leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      id="about"
    >
      <SectionHeading title="About me" />
      <p className="mb-3 ">
        I am a passionate Full-Stack Software Engineer with expertise in
        developing both front-end and back-end applications. I specialise in
        enterprise software and optimizing the entire development cycle. With a
        positive attitude and a strong desire to learn new technologies, I can
        tackle challenging technical tasks with ease. I am currently looking for
        a full-time position.{" "}
      </p>
      <p>
        My ability to quickly absorb new concepts and technologies and apply
        them to projects has been honed through my university education and
        various side projects.
      </p>
    </motion.section>
  );
}
