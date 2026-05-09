"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

export default function TerminalCard() {
  return (
    <div className="w-full lg:flex-1 relative group py-10 lg:py-0">

      {/* Main Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        className="bg-[#0d1117] border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl font-mono relative overflow-hidden transition-all duration-500 hover:border-blue-500/30"
      >

        {/* Animated Glow Background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-[length:200%_200%]"
        />

        {/* Window Controls */}
        <div className="flex gap-2 mb-8 items-center relative z-10">
          <div className="w-3 h-3 bg-red-500/90 rounded-full shadow-lg shadow-red-500/20"></div>
          <div className="w-3 h-3 bg-yellow-500/90 rounded-full shadow-lg shadow-yellow-500/20"></div>
          <div className="w-3 h-3 bg-green-500/90 rounded-full shadow-lg shadow-green-500/20"></div>
          <span className="ml-auto text-[10px] text-gray-500 font-bold tracking-widest uppercase">
            developer.js
          </span>
        </div>

        {/* Code Content */}
        <div className="text-[11px] md:text-sm leading-relaxed tracking-wide relative z-10">
          <p className="text-gray-300">
            <span className="text-blue-400 italic">const</span>{" "}
            <span className="text-yellow-400">developer</span> = {"{"}<br />
            &nbsp;&nbsp;<span className="text-gray-400">name:</span>{" "}
            <span className="text-green-400">'Arnob Paul'</span>,<br />
            &nbsp;&nbsp;<span className="text-gray-400">education:</span>{" "}
            <span className="text-green-400">'CSE'</span>,<br />
            &nbsp;&nbsp;<span className="text-gray-400">skills:</span> [
            <span className="text-green-400">'MongoDB', 'React', 'Next.js'</span>
            ],<br />
            &nbsp;&nbsp;<span className="text-gray-400">status:</span>{" "}
            <span className="text-green-400">'Building awesome UIs'</span><br />
            {"}"};
          </p>
        </div>

        {/* Console Output */}
        <div className="mt-6 pt-6 border-t border-white/5 font-mono relative z-10">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-tighter">
            {">"} arnob.init();
          </p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-blue-400 text-[10px] md:text-xs mt-1"
          >
            Loading components... Done in 2.4s
          </motion.p>
        </div>
      </motion.div>

      {/* Floating Badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-5 left-10 md:-bottom-10 bg-[#161b22]/90 backdrop-blur-2xl border border-white/10 p-2 md:p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
      >
        <div className="bg-blue-500/20 p-2 rounded-xl text-blue-400 ring-1 ring-blue-500/20">
          <FaCode size={20} className="md:w-3 md:h-3" />
        </div>
        <div>
          <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] leading-none mb-1">
            Clean Code
          </p>
          <p className="font-extrabold text-lg md:text-xl leading-none text-white tracking-tight">
            100%
          </p>
        </div>
      </motion.div>

      {/* Floating Badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute top-20 -right-4 md:top-20 md:-right-8 bg-[#161b22]/90 backdrop-blur-2xl border border-white/10 px-2 py-2 md:px-4 md:py-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
      >
        <div className="bg-orange-500/20 p-2 rounded-xl text-orange-400 ring-1 ring-orange-500/20">
          <HiLightningBolt size={20} className="md:w-3 md:h-3" />
        </div>
        <p className="font-black text-xs md:text-lg text-white uppercase tracking-widest italic">
          Fast
        </p>
      </motion.div>

    </div>
  );
}