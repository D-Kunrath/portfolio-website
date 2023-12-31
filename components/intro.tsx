"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/header-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <section id="home" ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/63943621"
              alt="Daniel portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Daniel.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className="
            group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
          "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          download
          href="/CV-ptbr.pdf"
          className="
            group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none
            focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack
            dark:bg-white/10
          "
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://linkedin.com/in/daniel-k-albanez"
          target="_blank"
          className="
            bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer outline-none
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack
            dark:bg-white/10 dark:text-white/60
          "
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/d-kunrath"
          target="_blank"
          className="
            bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer outline-none
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack
            dark:bg-white/10 dark:text-white/60
          "
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}
