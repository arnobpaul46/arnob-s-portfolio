'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineHome, HiOutlineUser, HiOutlineBriefcase, HiOutlineChatAlt2 } from 'react-icons/hi';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", icon: <HiOutlineHome size={20}/>, label: "Home" },
        { href: "/about-me", icon: <HiOutlineUser size={20}/>, label: "About" },
        { href: "/projects", icon: <HiOutlineBriefcase size={20}/>, label: "Projects" },
        { href: "/contact", icon: <HiOutlineChatAlt2 size={20}/>, label: "Contact" },
    ];

    return (
        <div className="w-full">
            {/* Mobile View: Floating Bottom Bar */}
            <div className="md:hidden bg-[#0f172a]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-2 shadow-2xl">
                <ul className="flex items-center justify-around">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link href={link.href} className={`flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
                                    {link.icon}
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">{link.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Desktop View: Sleek Floating Top Bar */}
            <div className="hidden md:block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 px-4">
                <ul className="flex items-center gap-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link href={link.href} className={`flex items-center gap-2 text-sm font-semibold transition-all py-2 px-4 rounded-xl relative group ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                                    {link.icon} 
                                    <span>{link.label}</span>
                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;