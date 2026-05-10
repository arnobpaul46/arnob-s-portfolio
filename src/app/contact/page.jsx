'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
    const [status, setStatus] = useState("idle");

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");
        const toastId = toast.loading("Sending your message...");

        const formData = new FormData(event.target);
        formData.append("access_key", "1ee3fd31-c34c-4775-a305-c7bb091b5593");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                toast.update(toastId, { render: "Message Sent Successfully! ✅", type: "success", isLoading: false, autoClose: 3000 });
                event.target.reset();
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            setStatus("error");
            toast.update(toastId, { render: `Error: ${error.message}`, type: "error", isLoading: false, autoClose: 3000 });
        } finally {
            setStatus("idle");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-10 md:py-1 space-y-12 no-scrollbar"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Simple Intro */}
                <div className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-blue-500"></span>
                            <p className='text-blue-400 font-mono tracking-widest uppercase text-xs'>Get In Touch</p>
                        </div>
                        <h2 className='text-5xl md:text-7xl font-extrabold text-white leading-tight'>
                            Contact <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500'>Me</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
                    </p>
                </div>

                {/* Right Side: Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 p-4 md:p-8 rounded-4xl shadow-2xl"
                >
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                            <input 
                                name="name"
                                type="text" 
                                placeholder="Arnob Paul"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-700 text-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input 
                                name="email"
                                type="email" 
                                placeholder="example@mail.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-700 text-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                            <textarea 
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-700 resize-none text-sm"
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl font-black text-white shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 group hover:cursor-pointer"
                        > 
                            {status === "sending" ? "SENDING..." : "SEND MESSAGE"} 
                            <FaPaperPlane className={`text-sm transition-transform ${status === "sending" ? "" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactPage;