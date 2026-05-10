"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolderOpen,
} from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "SkillSphere",
    desc: "A premium online learning platform with a dark glassmorphism theme. Users can explore courses, search interests, and manage enrolled courses and profiles seamlessly.",
    image: "/skillsphere.webp",
    live: "https://skill-sphere-a8-arnob.vercel.app",
    repo: "https://github.com/arnobpaul46/assignment-eight",
    tech: ["React", "Next.js", "Tailwind CSS", "MongoDB", "GitHub"],
  },

  {
    id: 2,
    title: "KeenKeeper",
    desc: "A personal connection shelf to nurture relationships. It tracks interactions and reminds you when it's time to reach out to the people who matter most in a fast-paced world.",
    image: "/keenkeeper.webp",
    live: "https://keen-keeper-arnob.vercel.app",
    repo: "https://github.com/arnobpaul46/assignment-seven",
    tech: ["Next.js", "React", "Tailwind CSS", "GitHub"],
  },

  {
    id: 3,
    title: "DigiTools",
    desc: "A modern digital marketplace for premium assets. Features include real-time shopping cart, transparent pricing, and a professional dark-themed interface built for speed.",
    image: "/digitool.webp",
    live: "https://digi-tools-platform-arnob.netlify.app",
    repo: "https://github.com/arnobpaul46/assignment-six",
    tech: ["React", "Tailwind CSS", "GitHub",],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectPage = () => {
  return (
    <div className="py-5 space-y-10 overflow-hidden">

      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="w-10 h-[2px] bg-blue-500"></span>

          <p className="text-blue-400 font-mono tracking-widest uppercase text-xs">
            My Work
          </p>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Recent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500">
            Projects
          </span>
        </motion.h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col"
          >

            {/* Project Image */}
            {/* Project Image Area */}
            <div className="relative h-64 w-full overflow-hidden border-b border-white/5">

              {/* ১. নিচের এই লাইনটি (Overlay) কালচে ভাবের মূল কারণ, এটি আমি হালকা করে দিয়েছি বা চাইলে পুরোপুরি মুছে দিতে পারেন */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/40 to-transparent z-10"></div>

              {/* ২. Background Icon - ইমেজ লোড হওয়ার আগে এটি দেখা যাবে */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-500/5">
                <FaFolderOpen size={40} className="text-blue-500/10" />
              </div>

              {/* ৩. Image Component - ফিল্টার যোগ করা হয়েছে উজ্জ্বলতার জন্য */}
              <div className="relative h-60 w-full overflow-hidden">
    <Image
      src={project.image}
      fill
      quality={100}
      className="object-cover transition-transform duration-700 brightness-110 contrast-110 group-hover:scale-110 group-hover:brightness-125"
      alt={project.title}
    />
    {/* Subtle gradient to make text below readable, but not making the image dark */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0f1a]/30 z-10"></div>
  </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mt-3">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, index) => (
                    <motion.span
                      key={index}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="text-[10px] px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/5">

                <Link
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </Link>

                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={16} />
                  Source Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPage;