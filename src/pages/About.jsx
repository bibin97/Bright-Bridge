import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Brain, Search, BookOpen, UserCheck, MessageCircle, Heart, Star, CloudRain, Sun, X, Check } from 'lucide-react';

const About = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerStagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className="w-full flex flex-col gap-16 py-16 px-6 lg:px-24">

            {/* SECTION 1: INTRO / HERO */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                className="max-w-4xl mx-auto w-full text-center space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#008080]">What is Bright Bridge?</h2>
                    <p className="text-lg text-black font-medium">
                        A short-term, high-impact foundation rebuilding program designed to reset learning habits.
                    </p>
                </div>

                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border-l-4 border-[#008080] text-left">
                    <p className="text-lg text-black leading-relaxed font-medium">
                        Bright Bridge systematically identifies and fixes root-level learning gaps. It helps students <span className="text-[#008080] font-bold">rebuild understanding step by step</span>, ensuring they move from confusion to clarity without the stress of regular academic pressure.
                    </p>
                </div>
            </motion.div>

            {/* SECTION 2: WHO IS BRIGHT BRIDGE FOR */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerStagger}
                className="max-w-5xl mx-auto w-full space-y-12"
            >
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-[#008080]">Who is Bright Bridge For?</h2>
                    <p className="text-black">Designed for students who need a fresh start with their basics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TargetCard icon={<Brain size={24} />} text="Students with weak fundamentals" />
                    <TargetCard icon={<CloudRain size={24} />} text="Children simple struggling in class" />
                    <TargetCard icon={<MessageCircle size={24} />} text="Learners who say “I don’t understand”" />
                    <TargetCard icon={<GraduationCap size={24} />} text="Students promoted without clarity" />
                    <TargetCard icon={<Heart size={24} />} text="Children lacking confidence or interest" />
                    <TargetCard icon={<UserCheck size={24} />} text="Parents worried about long-term growth" />
                </div>
            </motion.div>

            {/* SECTION 4: PHILOSOPHY QUOTE */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto text-center py-10"
            >
                <p className="text-2xl lg:text-3xl font-serif italic text-black">
                    “Every child learns at their own speed — without pressure.”
                </p>
                <div className="w-16 h-1 bg-gray-200 mx-auto mt-8 rounded-full" />
            </motion.div>

            {/* SECTION 5: WHAT MAKES BRIGHT BRIDGE DIFFERENT */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                className="max-w-5xl mx-auto w-full space-y-12"
            >
                <h2 className="text-3xl font-bold text-[#008080] text-center">What Makes Bright Bridge Different?</h2>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                    {/* Left: What we are not */}
                    <div className="flex-1 p-10 lg:p-14 space-y-6">
                        <h3 className="text-xl font-bold text-black uppercase tracking-widest">Bright Bridge Is:</h3>
                        <ul className="space-y-4">
                            <MutedItem text="Not exam-oriented or rushed" />
                            <MutedItem text="Not focused on chasing marks" />
                            <MutedItem text="Not driven by syllabus completion" />
                        </ul>
                    </div>

                    {/* Right: What we focus on */}
                    <div className="flex-1 bg-[#E0F2F1] p-10 lg:p-14 space-y-6">
                        <h3 className="text-xl font-bold text-[#008080] uppercase tracking-widest">Instead, We Focus On:</h3>
                        <ul className="space-y-4">
                            <TealItem text="Understanding before memorising" />
                            <TealItem text="Confidence before speed" />
                            <TealItem text="Clarity before performance" />
                            <TealItem text="Emotional safety in learning" />
                        </ul>
                    </div>
                </div>

                <p className="text-center text-xl font-medium text-black">
                    That’s why improvement happens naturally — and <span className="text-[#008080] font-bold">stays.</span>
                </p>
            </motion.div>

        </div>
    );
};

// --- Sub-components ---

const TargetCard = ({ icon, text }) => (
    <motion.div
        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
        whileHover={{ y: -5, borderColor: '#008080', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
        className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 transition-all duration-300"
    >
        <div className="p-3 bg-gray-50 rounded-full text-[#008080] shrink-0">
            {icon}
        </div>
        <p className="text-black font-medium leading-tight">{text}</p>
    </motion.div>
);

const MutedItem = ({ text }) => (
    <li className="flex items-center gap-3 opacity-60">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
        <span className="text-lg font-medium text-black decoration-gray-400">{text}</span>
    </li>
);

const TealItem = ({ text }) => (
    <li className="flex items-center gap-3">
        <Sun size={20} className="text-[#008080] shrink-0" />
        <span className="text-lg font-bold text-black">{text}</span>
    </li>
);

export default About;
