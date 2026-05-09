"use client";

import Link from "next/link";
import TerminalCard from "./components/TerminalCard";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Left Content */}
      <div className="w-full lg:flex-1 space-y-6">

        {/* Intro */}
        <p className="text-blue-400 font-mono tracking-widest uppercase text-xs">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Arnob{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600">
            Paul
          </span>
        </h1>

        {/* Animated Full Text */}
         <TypeAnimation
          sequence={[
            "CSE Student, Frontend Developer, and Cybersecurity Enthusiast passionate about building secure, modern, and impactful digital experiences.",
            2000,

          ]}
          wrapper="p"
          speed={65}
          cursor={true}
           repeat={0} 
          className="text-gray-400 text-base max-w-md leading-relaxed min-h-[90px]"
        />

        {/* Button */}
        <div className="pt-4">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 transition-all inline-block"
          >
            View My Work
          </Link>
        </div>
      </div>

      {/* Right Side Terminal */}
      <TerminalCard />
    </div>
  );
}