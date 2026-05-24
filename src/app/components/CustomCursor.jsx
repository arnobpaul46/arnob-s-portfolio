'use client'
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // স্মুথ এনিমেশন কনফিগ
    const springConfig = { damping: 25, stiffness: 250 };
    const dotX = useSpring(mouseX, { damping: 20, stiffness: 800 });
    const dotY = useSpring(mouseY, { damping: 20, stiffness: 800 });
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.closest('a') || target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[1000000]">
            {/* ছোট নীল ডট */}
            <motion.div
                style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
                className="fixed w-3 h-3 bg-sky-500 rounded-full z-20 shadow-[0_0_8px_#3b82f6]"
            />

            {/* বাইরের সাদা বর্ডার রিং */}
            <motion.div
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
                animate={{
                    width: isHovered ? 60 : 35,
                    height: isHovered ? 60 : 35,
                    borderColor: isHovered ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.3)",
                }}
                className="fixed border-2 rounded-full z-10"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
            />
        </div>
    );
};

export default CustomCursor;