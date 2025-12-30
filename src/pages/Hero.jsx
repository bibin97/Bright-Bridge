import React from 'react';
import { Layers, TrendingUp, UserCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import heroStudent from '../assets/hero-student.png';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom "easeOutQuint" alike
        }
    };

    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="w-full flex flex-col justify-center px-6 lg:px-24 pt-32 lg:pt-40 pb-16 gap-6 lg:gap-10 overflow-hidden">

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

                {/* Left: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex flex-col gap-8 w-full pr-0 lg:pr-8"
                >
                    <motion.h1 variants={itemVariants} className="text-4xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                        <span className="text-[#008080] block mb-2">Strong Basics.</span>
                        <span className="text-black block mb-2">Clear Concepts.</span>
                        <span className="text-[#008080] block">Guaranteed Improvement</span>
                        <span className="text-black text-2xl lg:text-4xl font-medium mt-4 block">— in just 15 days.</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-lg lg:text-xl text-black font-medium leading-relaxed max-w-2xl">
                            Bright Bridge is a foundation-building program designed to reset weak basics, fix learning gaps, and bring <span className="font-bold text-[#008080]">100% visible improvement</span>.
                        </h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4">
                        <motion.button
                            onClick={openModal}
                            whileHover={{ scale: 1.03, y: -2, boxShadow: "0 20px 30px -10px rgba(0, 128, 128, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-[#008080] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            Book a Free Diagnostic Session
                        </motion.button>
                        <p className="text-sm text-black mt-4 pl-4 font-medium">No commitment required. Just clarity.</p>
                    </motion.div>
                </motion.div>

                {/* Right: Illustration Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end"
                >
                    {/* Hero Student Image */}
                    <motion.img
                        src={heroStudent}
                        alt="Confident Student Learning"
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                        animate={floatAnimation}
                    />
                </motion.div>
            </div>

            {/* Feature Cards Grid (4 Columns) */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-0"
            >
                <IconCard
                    icon={<Layers size={20} strokeWidth={1.5} />}
                    title="Strong Basics"
                    desc="Rebuilding foundation in 15 days"
                />
                <IconCard
                    icon={<TrendingUp size={20} strokeWidth={1.5} />}
                    title="Visible Growth"
                    desc="100% improvement you can see"
                />
                <IconCard
                    icon={<UserCheck size={20} strokeWidth={1.5} />}
                    title="1-on-1 Focus"
                    desc="Personalised coaching attention"
                />
                <IconCard
                    icon={<HeartHandshake size={20} strokeWidth={1.5} />}
                    title="Mentor Care"
                    desc="Scientific & emotional support"
                />
            </motion.div>
        </div >
    );
};

// Sub-component for Icon Cards
const IconCard = ({ icon, title, desc }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        whileHover={{ y: -3, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.08)" }}
        className="bg-white p-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center text-center gap-2 group cursor-default transition-all duration-300"
    >
        <div className="p-2.5 bg-gray-50 rounded-lg text-gray-400 group-hover:text-[#008080] group-hover:bg-[#E0F2F1] transition-all duration-500 ease-out">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-black text-base mb-0.5">{title}</h3>
            <p className="text-black text-xs font-medium leading-tight">{desc}</p>
        </div>
    </motion.div>
);

export default Hero;
