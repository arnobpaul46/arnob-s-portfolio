"use client";

import {
  FaGraduationCap,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

import { motion } from "framer-motion";

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
      staggerChildren: 0.15,
    },
  },
};

const AboutMePage = () => {
  return (
    <div className="py-5 space-y-12 overflow-hidden">

      {/* --- Intro Section --- */}
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
            Get to know me
          </p>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-6xl font-extrabold text-white"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500">
            Me
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-base md:text-lg leading-relaxed text-justify max-w-4xl"
        >
          I am a{" "}
          <span className="text-white font-semibold">
            Computer Science and Engineering (CSE)
          </span>{" "}
          student and a passionate{" "}
          <span className="text-white font-semibold">
            Frontend Web Developer
          </span>{" "}
          dedicated to transforming ideas into modern, creative, and
          user-focused digital experiences. With a strong interest in
          clean design and interactive interfaces, I specialize in
          building responsive, visually appealing, and high-performing
          websites.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-base leading-relaxed text-justify max-w-4xl"
        >
          Beyond development, I have a deep fascination for{" "}
          <span className="text-blue-300">
            Networking and Cyber Security
          </span>
          , exploring how to build secure and robust digital
          environments. My approach focuses on developing scalable and
          efficient web solutions that balance creativity with
          functionality. I'm constantly learning and exploring new
          technologies to deliver better solutions.
        </motion.p>
      </motion.div>

      {/* --- Education & Skills Grid --- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >

        {/* Left: Education */}
        <motion.div
          variants={fadeUp}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <FaGraduationCap className="text-blue-500" />
            Education
          </h3>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <p className="text-blue-400 font-mono text-sm">
              Present
            </p>

            <h4 className="text-xl font-bold text-white mt-1">
              B.Sc. in Computer Science & Engineering
            </h4>

            <p className="text-gray-400 text-sm mt-2">
              I am pursuing a Bachelor's degree in Computer Science and Engineering (CSE) at the College of Business Science and Technology (CBST), affiliated with National University, where I am developing a solid foundation in algorithms, data structures, and computer networking.
            </p>
          </div>
        </motion.div>

        {/* Right: Skills */}
        <motion.div
          variants={fadeUp}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <FaCode className="text-blue-500" />
            MERN Stack Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SkillIcon
              icon={<SiMongodb />}
              name="MongoDB"
              color="text-green-500"
            />

            <SkillIcon
              icon={<SiExpress />}
              name="Express.js"
              color="text-gray-300"
            />

            <SkillIcon
              icon={<SiReact />}
              name="React.js"
              color="text-blue-400"
            />

            <SkillIcon
              icon={<SiNodedotjs />}
              name="Node.js"
              color="text-green-400"
            />
          </div>

          {/* Other Skills */}
          <p className="text-gray-500 text-sm font-mono mt-4">
            // Other Technologies
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-blue-500/20 transition-all">
              Next.js
            </span>

            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-blue-500/20 transition-all">
              Tailwind CSS
            </span>

            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-blue-500/20 transition-all">
              GitHub
            </span>

            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-blue-500/20 transition-all">
              Better Auth
            </span>

            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-blue-500/20 transition-all">
              Cyber Security
            </span>

            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-blue-500/20 transition-all">
              Networking
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* --- Interests Section --- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
      >

        {/* Cyber Security */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-start gap-4 hover:border-blue-500/30 transition-all duration-300"
        >
          <FaShieldAlt
            className="text-blue-400 mt-1"
            size={30}
          />

          <div>
            <h4 className="text-lg font-bold text-white">
              Cyber Security
            </h4>

            <p className="text-sm text-gray-400">
              Deep interest in secure coding, system vulnerabilities,
              ethical hacking concepts, and digital forensics. I enjoy
              learning about modern security practices and protecting
              digital systems from threats.
            </p>
          </div>
        </motion.div>

        {/* Networking */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-3xl flex items-start gap-4 hover:border-sky-500/30 transition-all duration-300"
        >
          <FaNetworkWired
            className="text-sky-400 mt-1"
            size={30}
          />

          <div>
            <h4 className="text-lg font-bold text-white">
              Networking
            </h4>

            <p className="text-sm text-gray-400">
              Studying network protocols, server management, routing,
              switching, and data communication to understand how
              modern internet infrastructure works efficiently and
              securely.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const SkillIcon = ({ icon, name, color }) => (
  <motion.div
    whileHover={{
      scale: 1.08,
      y: -5,
    }}
    transition={{ duration: 0.3 }}
    className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
  >
    <span className={`text-3xl ${color}`}>
      {icon}
    </span>

    <span className="text-[10px] mt-2 text-gray-400 font-bold uppercase">
      {name}
    </span>
  </motion.div>
);

export default AboutMePage;