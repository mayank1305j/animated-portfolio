"use client";

import React from "react";
import { motion } from "framer-motion";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { courgette } from "@/font";

gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimation = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 60%",
        // scrub: 2,
      },
    });

    tl2.fromTo(
      section,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="scroll-section">
      {children}
    </div>
  );
};

export const FilmAnimation = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // First Animation: Play immediately
    gsap.fromTo(
      section,
      {
        height: "100%",
      },
      {
        height: "20px",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
      }
    );

    // Second Animation: Control as you scroll down
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%", // Adjust the start position as needed
        end: "top 40%", // Adjust the end position as needed
        scrub: 2,
      },
    });

    tl.to(section, {
      height: "100%", // Adjust the desired height
      duration: 2.5, // Adjust the duration as needed
    }).fromTo(
      ".film-text",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-full w-full bg-[#141820] absolute bottom-0 left-0 z-[2] text-white flex justify-center items-center font-medium"
    >
      <span className={`film-text opacity-0 text-5xl ${courgette.className}`}>
        Where{" "}
        <span className="inline-block bg-[url(https://images.unsplash.com/photo-1561212044-bac5ef688a07?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-clip-text text-transparent">
          different
        </span>{" "}
        is the standard. Choose{" "}
        <span className="inline-block bg-[url(https://images.unsplash.com/photo-1561212044-bac5ef688a07?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-clip-text text-transparent">
          WebSeeder!
        </span>
      </span>
    </div>
  );
};

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -10,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const introTextUnblur = {
  hide: {
    opacity: 0,
    x: -10,
    filter: "blur(20px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
    },
  },
};

export const AnimateHeading = ({ children }) => {
  return (
    <motion.span
      initial="hide"
      whileInView="show"
      exit="hide"
      viewport={{ once: true }}
      variants={introHeaderVariants}
    >
      {children}
    </motion.span>
  );
};

export const AnimateTextUnblur = ({ children }) => {
  return (
    <motion.span
      initial="hide"
      whileInView="show"
      exit="hide"
      viewport={{ once: true }}
      variants={introTextUnblur}
    >
      {children}
    </motion.span>
  );
};
