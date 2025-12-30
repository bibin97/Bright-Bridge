import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Activity, MousePointer2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Features = () => {
    const { openModal } = useModal();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full flex flex-col gap-16 py-16 px-6 lg:px-24" id="features">

            {/* HEADER */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                className="text-center space-y-4 max-w-3xl mx-auto"
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-[#008080]">Why Bright Bridge Works</h2>
                <div className="w-20 h-1 bg-[#008080] mx-auto rounded-full opacity-60" />
                <p className="text-xl text-black font-medium font-serif italic">
                    "We don't just teach. We fix the pattern."
                </p>

                {/* Interaction Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center gap-2 text-[#008080] font-bold text-sm uppercase tracking-widest pt-4"
                >
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Activity size={16} />
                    </motion.div>
                    <span>Hover over any struggle to see the fix</span>
                </motion.div>
            </motion.div>

            {/* PROBLEM - SOLUTION MATRIX */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                className="max-w-6xl w-full mx-auto relative bg-white rounded-3xl p-8 lg:p-14 shadow-sm border border-gray-100 overflow-hidden"
            >
                {/* Glowing Vertical Divider */}
                <div className="absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-[#008080] rounded-full absolute -left-[2px] shadow-[0_0_10px_#008080]"
                            animate={{ y: [0, 450], opacity: [0, 1, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 1, // Stagger delays
                            }}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                    {/* LEFT: STUDENT PROBLEMS */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-black uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                            The Struggle
                        </h3>
                        {["Syllabus feels overwhelming", "Studying but marks not improving", "Forgetting formulas during exams", "Poor time management", "Exam fear & confusion"].map((text, i) => (
                            <ProblemItem
                                key={i}
                                text={text}
                                onHover={() => setHoveredIndex(i)}
                                onLeave={() => setHoveredIndex(null)}
                                isActive={hoveredIndex === i}
                            />
                        ))}
                    </div>

                    {/* RIGHT: BRIGHT BRIDGE SOLUTION */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-[#008080] uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                            The Solution
                        </h3>
                        {["Structured clarity-based learning", "Exam-oriented practice system", "Recall & accuracy training", "Time-bound mock strategy", "Confidence & performance mentoring"].map((text, i) => (
                            <SolutionItem
                                key={i}
                                text={text}
                                isHighlighted={hoveredIndex === i}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* POWER LINE & CTA */}
            <div className="text-center space-y-10 mt-4">
                <p className="text-2xl lg:text-3xl font-serif text-black leading-relaxed">
                    Bright Bridge doesn’t add pressure. <br className="hidden md:block" />
                    <span className="text-[#008080] font-sans font-bold not-italic">It removes confusion.</span>
                </p>

                <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-yellow-400/20 hover:bg-[#008080] hover:text-white transition-all duration-300 cursor-pointer"
                >
                    👉 See How Bright Bridge Solves Exam Stress
                </motion.button>
            </div>

        </div>
    );
};

// --- Sub-components ---

const ProblemItem = ({ text, onHover, onLeave, isActive }) => (
    <motion.div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={`flex items-center gap-5 p-4 rounded-xl transition-all duration-300 cursor-default group ${isActive ? 'bg-red-50/50 translate-x-2' : 'hover:bg-gray-50'}`}
    >
        <motion.div
            animate={!isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}
        >
            <X size={16} strokeWidth={2.5} />
        </motion.div>
        <p className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-red-900' : 'text-black group-hover:text-black'}`}>
            {text}
        </p>
    </motion.div>
);

const SolutionItem = ({ text, isHighlighted }) => (
    <motion.div
        className={`flex items-center gap-5 p-4 rounded-xl transition-all duration-500 border ${isHighlighted ? 'bg-[#E0F2F1] border-[#008080]/30 scale-105 shadow-md z-20' : 'bg-gray-50/30 border-transparent opacity-40'}`}
    >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isHighlighted ? 'bg-[#008080] text-white' : 'bg-white text-gray-200 border border-gray-100'}`}>
            <Check size={16} strokeWidth={3} />
        </div>
        <p className={`text-lg transition-colors duration-300 ${isHighlighted ? 'text-[#008080] font-bold' : 'text-black font-medium opacity-40'}`}>
            {text}
        </p>
    </motion.div>
);

export default Features;
