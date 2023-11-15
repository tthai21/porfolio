"use client";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];
export function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="mb-3 sm:mb-8 last:mb-3 group"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className=" rounded-lg  relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr8 sm:h-[20rem]  group-even:pl-8 hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-tighter text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="absolute top-10  -right-80 w-[38rem] rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-80 
          group-hover:-translate-x-3 
          group-hover:-translate-y-3 
          group-hover:-rotate-2 
  
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2 
  
          group-hover:scale-[1.05]
          transition"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
