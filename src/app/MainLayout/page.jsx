'use client' // এটি উপরে দিন কারণ আমরা স্টেট ব্যবহার করছি
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_top_right,_#1e293b,_transparent)] p-0 md:p-8 lg:p-10 flex items-center justify-center relative selection:bg-blue-500/30 selection:text-blue-200 ">
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[90%] max-w-[1200px] flex flex-col md:grid md:grid-cols-12 md:h-[90vh] md:rounded-[2.5rem] overflow-hidden border-none md:border md:border-white/5 shadow-2xl bg-[#0b0f1a]/40 backdrop-blur-sm relative"
        >
          {/* Sidebar */}
          <div className="md:col-span-4 lg:col-span-3 bg-white/5 backdrop-blur-3xl pt-12  p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5">
              <InfoCard/>
          </div>

          {/* Content Area */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col h-full overflow-hidden">
              <div className="hidden md:block p-8 pb-4">
                  <Navbar/>
              </div>
              
              <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-12 pt-0 md:pt-4 pb-32 md:pb-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={children} // সেকশন চেঞ্জ হলে এটি রি-অ্যানিমেট হবে
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      {children}
                    </motion.div>
                  </AnimatePresence>
              </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Sticky Navbar */}
      {!isLoading && (
        <div className="md:hidden fixed bottom-4 left-0 right-0 px-4 z-[9999]">
           <Navbar />
        </div>
      )}
    </div>
  );
};

export default MainLayout;