"use client";

import { motion } from "framer-motion";

import {
    FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
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
            staggerChildren: 0.12,
        },
    },
};

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // alert("Thank you! Your message has been sent.");
        toast("Thank you! Your message has been sent.")
    };

    return (
        <div className="py-5 space-y-8 overflow-hidden">

            {/* Header */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
            >

                <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-3"
                >
                    <span className="w-10 h-[2px] bg-blue-500"></span>

                    <p className="text-blue-400 font-mono tracking-widest uppercase text-xs">
                        Get In Touch
                    </p>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold text-white"
                >
                    Contact{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500">
                        Me
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="text-gray-400 max-w-xl"
                >
                    Have a project in mind or just want to say hi?
                    Feel free to reach out. I'm always open to
                    discussing new projects and creative ideas.
                </motion.p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    whileHover={{
                        y: -3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl"
                >

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Name */}
                            <motion.div
                                variants={fadeUp}
                                className="space-y-2"
                            >
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Arnob Paul"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-600 focus:shadow-lg focus:shadow-blue-500/10"
                                    required
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                variants={fadeUp}
                                className="space-y-2"
                            >
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-600 focus:shadow-lg focus:shadow-blue-500/10"
                                    required
                                />
                            </motion.div>
                        </div>

                        {/* Message */}
                        <motion.div
                            variants={fadeUp}
                            className="space-y-2"
                        >
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-600 resize-none focus:shadow-lg focus:shadow-blue-500/10"
                                required
                            ></textarea>
                        </motion.div>

                        {/* Button */}
                        <motion.button
                            whileHover={{
                                scale: 1.02,
                            }}

                            whileTap={{
                                scale: 0.96,
                            }}

                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl font-bold text-white shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3 mt-4"
                        >
                            Send Message

                            <motion.div
                                animate={{
                                    x: [0, 4, 0],
                                }}

                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                            >
                                <FaPaperPlane size={14} />
                            </motion.div>
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactPage;