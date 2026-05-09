'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinished }) => {
    useEffect(() => {
        const timer = setTimeout(onFinished, 2500); // ২.৫ সেকেন্ড পর শেষ হবে
        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#020617] flex items-center justify-center flex-col gap-4"
        >
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl font-bold text-white tracking-tighter text-center"
            >
                Welcome to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500">Arnob's Portfolio</span>
            </motion.h1>
            
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-24 bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;