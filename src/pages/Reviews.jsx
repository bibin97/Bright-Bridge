import React, { useState, useEffect } from 'react';
import { Quote, Play, Star, UserCheck, TrendingUp, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const Reviews = () => {
    const { openModal } = useModal();
    return (
        <div className="w-full flex flex-col gap-16 py-16 px-6 lg:px-24" id="reviews">

            {/* SECTION 1: REVIEWS HERO */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto w-full text-center space-y-6 relative overflow-visible"
            >
                <Quote className="absolute -top-12 -left-12 text-gray-100 opacity-50 rotate-180 hidden lg:block" size={140} />

                <div className="inline-block bg-[#E0F2F1] text-[#008080] px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
                    Trusted by 100+ Families | Results in 15 Days
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black relative z-10">
                    Real Stories. <span className="text-[#008080]">Real Progress.</span>
                </h2>
                <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed relative z-10">
                    See how Bright Bridge transforms confusion into confidence through the words of students and parents.
                </p>
            </motion.div>

            {/* SECTION 2: STUDENT REVIEWS (CARDS) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <StudentReviewCard
                    name="Arjun Mehta"
                    grade="Grade 5"
                    quote="I used to feel scared in Math class. Now I raise my hand to answer questions!"
                    tag="Confidence Boosted"
                    initial="A"
                    color="bg-orange-100 text-orange-600"
                />
                <StudentReviewCard
                    name="Sana Khan"
                    grade="Grade 7"
                    quote="My basics were weak, but Bright Bridge fixed them. Learning feels easy now."
                    tag="Clear Concepts"
                    initial="S"
                    color="bg-purple-100 text-purple-600"
                />
                <StudentReviewCard
                    name="Rohan Das"
                    grade="Grade 4"
                    quote="I finished the 15-day program and now I can solve problems faster than my friends!"
                    tag="Faster Solving"
                    initial="R"
                    color="bg-blue-100 text-blue-600"
                />
            </motion.div>

            {/* SECTION 3: PARENT TEXT REVIEWS (MARQUEE) */}
            <div className="w-full py-12 overflow-hidden">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">What Parents Say <span className="text-[#008080]">Every Day</span></h2>
                    <p className="text-lg text-black font-medium">Real words from real families across the globe</p>
                </div>

                <div className="relative w-full overflow-hidden mask-fade-sides">
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                    >
                        {[...TESTIMONIALS, ...TESTIMONIALS].map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* SECTION 4: VIDEO TESTIMONIALS */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="space-y-12"
            >
                <div className="text-center space-y-3">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">Parents Speak. <span className="text-[#008080]">Results Show.</span></h2>
                    <p className="text-black">Hear directly from parents about the change they witnessed.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <VideoCard title="Math Anxiety Gone" author="Priya's Mom" />
                    <VideoCard title="From Failing to Confidence" author="Rahul's Dad" />
                    <VideoCard title="Finally Loves Studying" author="Ananya's Parents" />
                </div>
            </motion.div>

            {/* SECTION 5: SOCIAL PROOF STRIP */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full bg-gray-50 rounded-2xl border border-gray-200 py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
                <StatItem icon={<Star size={24} />} title="4.9/5" desc="Parent Satisfaction" />
                <StatItem icon={<UserCheck size={24} />} title="Grades 4-9" desc="Programs Supported" />
                <StatItem icon={<TrendingUp size={24} />} title="15 Days" desc="Visible Results" />
                <StatItem icon={<Clock size={24} />} title="1:1 Focus" desc="Mentor Support" />
            </motion.div>

            {/* SECTION 6: FINAL CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white rounded-3xl p-10 lg:p-16 text-center shadow-xl border border-[#008080]/20 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#008080]/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#008080]/5 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#008080]">See the Bright Bridge Difference</h2>
                    <p className="text-lg text-black font-medium">
                        Don't let them struggle in silence. Give them the foundation they deserve today.
                    </p>
                    <motion.button
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-[#008080] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        Book a Free Diagnostic Session
                    </motion.button>
                </div>
            </motion.div>

        </div>
    );
};

// --- Sub-components ---

const StudentReviewCard = ({ name, grade, quote, tag, initial, color }) => (
    <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
        className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6 h-full relative"
    >
        <div className="absolute top-6 right-6 opacity-10">
            <Quote size={40} className="text-[#008080]" />
        </div>

        <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-xl font-bold`}>
                {initial}
            </div>
            <div>
                <h4 className="font-bold text-black">{name}</h4>
                <p className="text-sm text-black">{grade}</p>
            </div>
        </div>

        <p className="text-black font-medium italic leading-relaxed flex-grow">"{quote}"</p>

        <div className="pt-4 border-t border-gray-50">
            <span className="inline-block bg-[var(--color-premium-silver)] text-[#008080] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {tag}
            </span>
        </div>
    </motion.div>
);

const VideoCard = ({ title, author }) => (
    <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)" }}
        className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-video shadow-lg"
    >
        {/* Placeholder Video Background */}
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" />
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Play size={20} className="text-[#008080] ml-1 fill-current" />
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-left">
            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors">{title}</h4>
            <p className="text-black text-sm">{author}</p>
        </div>
    </motion.div>
);

const StatItem = ({ icon, title, desc }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="text-[#008080] mb-1">{icon}</div>
        <h4 className="font-bold text-black text-xl">{title}</h4>
        <p className="text-black text-sm font-medium">{desc}</p>
    </div>
);

const TESTIMONIALS = [
    {
        quote: "Finally a tuition platform that actually cares about the child's understanding.",
        name: "Mohammed Aslam",
        details: "Father of Ziyan | Grade 7 | Kozhikode",
    },
    {
        quote: "The gap identification test was an eye opener. We know exactly where to focus now.",
        name: "Anjali P.",
        details: "Mother of Meenakshi | Grade 5 | Trivandrum",
    },
    {
        quote: "Supportive mentors and excellent teaching quality. Highly recommend Bright Bridge.",
        name: "Deepak K.",
        details: "Father of Rohan | Grade 9 | Mumbai",
    },
    {
        quote: "My son used to hate Math. Now he solves problems on his own without fear.",
        name: "Sarah Thomas",
        details: "Mother of Kevin | Grade 6 | Kochi",
    },
    {
        quote: "It's not just about marks, they actually build confidence. That's rare to find.",
        name: "Rajesh V.",
        details: "Father of Arjun | Grade 8 | Bangalore",
    }
];

const ReviewCard = ({ quote, name, details }) => (
    <div className="min-w-[160px] md:min-w-[180px] min-h-[220px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#008080] flex flex-col gap-2">
        <Quote className="text-[#008080] opacity-80" size={16} />
        <p className="text-black font-medium leading-relaxed text-xs">"{quote}"</p>
        <div className="mt-auto">
            <p className="font-bold text-black text-sm">{name}</p>
            <p className="text-[10px] text-black font-medium">{details}</p>
        </div>
    </div>
);

export default Reviews;
