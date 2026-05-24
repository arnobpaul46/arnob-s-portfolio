import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDownload, FaFacebook } from "react-icons/fa";

const InfoCard = () => {
    return (
        <div className="flex flex-col h-full text-white">
            <div className="flex flex-col items-center justify-center gap-4 pb-8 border-b border-white/10">
                <div className="relative w-32 h-32 rounded-full">

                    {/* Inner image with border */}
                    <div className="relative w-full h-full rounded-full border-2 border-gray-600 overflow-hidden">
                        <Image
                            src="/arnobpaul.webp"
                            fill
                            alt="Arnob Paul"
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight">Arnob Paul</h1>
                    <p className="text-[10px] text-gray-400 mt-1 px-3 py-1 bg-white/5 rounded-full inline-block border border-white/10">
                        MERN Stack Developer
                    </p>
                </div>
            </div>

            <div className="flex-grow py-8 space-y-5">
                <div className="space-y-4">
                    <ContactItem icon={<FaEnvelope />} label="Email" value="arnobpaulbd@gmail.com" />
                    <ContactItem icon={<FaPhoneAlt />} label="Phone" value="+880 1616-293446" />
                    <ContactItem icon={<FaMapMarkerAlt />} label="Address" value="Mymensingh, BD" />
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
                    <Link href={'https://www.linkedin.com/in/arnob-paul'} target="_blank"
                        rel="noopener noreferrer"><SocialLink icon={<FaLinkedin />} text="linkedin/in/arnobpaul" /></Link>
                    <Link href={'https://github.com/arnobpaul46'} target="_blank"
                        rel="noopener noreferrer"><SocialLink icon={<FaGithub />} text="github/arnobpaul" /></Link>
                    <Link href={'https://www.facebook.com/mr.arnob.paul'} target="_blank"
                        rel="noopener noreferrer"><SocialLink icon={<FaFacebook />} text="facebook/arnobpaul" /></Link>
                </div>
            </div>

            <Link href={"/"}><button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-sky-900 py-3 rounded-xl font-bold hover:shadow-blue-500/40 hover:-translate-y-1 hover:cursor-pointer">
                Download My CV <FaDownload size={12} />
            </button></Link>
        </div>
    );
};

const ContactItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-3">
        <div className="p-2 bg-white/5 rounded-lg text-blue-400">{icon}</div>
        <div>
            <p className="text-[9px] uppercase text-gray-500 font-bold">{label}</p>
            <p className="text-xs text-gray-300">{value}</p>
        </div>
    </div>
);

const SocialLink = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition-colors px-2">
        <span className="text-base">{icon}</span>
        <span className="text-xs">{text}</span>
    </div>
);

export default InfoCard;