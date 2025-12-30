
import React from 'react';
import {
    CheckCircle2, Brain, Sparkles, TrendingUp, ShieldCheck, Heart,
    MessageCircle, Zap, Smile, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const Results = () => {
    return (
        <div className="w-full flex flex-col gap-12 py-16 px-6 lg:px-24" id="results">

            {/* HERDER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-4xl mx-auto text-center space-y-6"
            >
                <h2 className="text-3xl lg:text-5xl font-bold text-[#008080]">Results That Speak For Themselves</h2>
                <div className="h-1 w-24 bg-[#008080] mx-auto rounded-full" />
                <p className="text-xl text-black font-medium leading-relaxed">
                    Bright Bridge is designed to deliver visible, meaningful improvement — not just temporary motivation. <br />
                    <span className="text-[#008080] font-bold">Within 15 days, parents and students consistently notice real change.</span>
                </p>
            </motion.div>

            {/* SECTION 1: WHAT PARENTS NOTICE FIRST */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-5xl mx-auto w-full"
            >
                <div className="bg-[#F3F4F6] rounded-3xl p-8 lg:p-12 border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8">
                        <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                            <EyeIcon /> What Parents Notice First
                        </h3>
                        <ul className="space-y-4">
                            <CheckItem text="Children start understanding concepts clearly" />
                            <CheckItem text="Classroom explanations become easier to follow" />
                            <CheckItem text="Study fear reduces significantly" />
                            <CheckItem text="Children ask doubts confidently" />
                            <CheckItem text="Learning feels calmer and less stressful" />
                        </ul>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#008080]"
                    >
                        <p className="text-lg italic text-black font-medium leading-relaxed">
                            Parents often say: <br />
                            <span className="text-2xl text-[#008080] not-italic block mt-4 font-bold">“We can finally see clarity in our child’s learning.”</span>
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* SECTION 2: ACADEMIC & CONFIDENCE (Split) */}
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Academic Improvements */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg shadow-gray-100 border border-gray-100 flex flex-col gap-6"
                >
                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-[#008080] mb-2">
                        <Brain size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Academic Improvements</h3>
                    <ul className="space-y-4">
                        <BulletItem text="Stronger foundation in basic concepts" />
                        <BulletItem text="Better recall and understanding" />
                        <BulletItem text="Improved writing and explanation ability" />
                        <BulletItem text="Faster learning speed" />
                        <BulletItem text="Reduced confusion while studying new topics" />
                    </ul>
                    <p className="text-sm text-black font-medium pt-4 border-t border-gray-100 mt-auto">
                        Focus: <span className="text-[#008080]">Clarity comes first, performance follows.</span>
                    </p>
                </motion.div>

                {/* Confidence & Mindset */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg shadow-gray-100 border border-gray-100 flex flex-col gap-6"
                >
                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-[#008080] mb-2">
                        <Sparkles size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Confidence & Mindset Change</h3>
                    <ul className="space-y-4">
                        <BulletItem text="Children stop saying “I don’t understand”" />
                        <BulletItem text="Fear of studies reduces" />
                        <BulletItem text="Willingness to try increases" />
                        <BulletItem text="Learning becomes enjoyable again" />
                        <BulletItem text="Self-belief improves steadily" />
                    </ul>
                    <p className="text-sm text-black font-medium pt-4 border-t border-gray-100 mt-auto">
                        Outcome: <span className="text-[#008080]">When confidence improves, learning becomes effortless.</span>
                    </p>
                </motion.div>
            </div>

            {/* SECTION 3: LONG TERM IMPACT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full bg-white text-gray-900 rounded-3xl p-10 lg:p-16 text-center shadow-lg border border-gray-100 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-32 bg-[#008080]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold mb-8 text-[#008080]">Long-Term Impact <span className="text-black text-xl block mt-2 font-normal">(Not Short-Term Hype)</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                        <ImpactCard text="Build a strong base for future classes" />
                        <ImpactCard text="Learn independently with confidence" />
                        <ImpactCard text="Face academic challenges without fear" />
                        <ImpactCard text="Develop healthy study habits" />
                    </div>
                </div>
            </motion.div>

            {/* SECTION 4: WHAT PARENTS FEEL */}
            <div className="max-w-5xl mx-auto w-full">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What Parents Feel</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeelCard icon={<Heart />} text="Relief from constant academic worry" />
                    <FeelCard icon={<ShieldCheck />} text="Trust in the learning process" />
                    <FeelCard icon={<TrendingUp />} text="Clear visibility of progress" />
                    <FeelCard icon={<MessageCircle />} text="Better communication with mentors" />
                    <FeelCard icon={<Star />} text="Confidence about future learning" />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#E0F2F1] p-6 rounded-2xl flex items-center justify-center text-center font-bold text-[#008080]"
                    >
                        Bright Bridge brings peace of mind to families.
                    </motion.div>
                </div>
            </div>

            {/* SECTION 5: REAL RESULTS SUMMARY */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-4xl mx-auto w-full bg-gray-50 rounded-3xl p-10 border border-gray-200"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-6 flex-1">
                        <h3 className="text-2xl font-bold text-black border-b border-gray-200 pb-4">Real Results in Just 15 Days</h3>
                        <div className="space-y-3">
                            <SummaryItem text="Clear concept understanding" />
                            <SummaryItem text="Improved classroom performance" />
                            <SummaryItem text="Positive attitude towards studies" />
                            <SummaryItem text="Reduced stress & resistance" />
                            <SummaryItem text="Faster grasping ability" />
                        </div>
                    </div>
                    <div className="flex-1 text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
                        <h4 className="text-lg font-bold text-black mb-4 uppercase tracking-widest">The Promise</h4>
                        <div className="space-y-2 text-xl font-bold text-black">
                            <p>Clear Foundations.</p>
                            <p>Confident Learners.</p>
                            <p>Lasting Improvement.</p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-black">
                            We don’t promise marks. <br /> We promise careful growth.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* FINAL STATEMENT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-center space-y-6 pt-10"
            >
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    <span className="text-[#008080]">100% visible learning improvement in 15 days</span> <br />
                    — because strong foundations change everything.
                </p>
            </motion.div>

        </div>
    );
};

// --- Sub-components ---

const CheckItem = ({ text }) => (
    <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3">
        <CheckCircle2 className="text-[#008080] shrink-0 mt-0.5" size={20} />
        <span className="text-black font-medium text-lg">{text}</span>
    </motion.li>
);

const BulletItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-gray-300 mt-2.5 shrink-0" />
        <span className="text-black text-lg">{text}</span>
    </li>
);

const ImpactCard = ({ text }) => (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-[#E0F2F1] hover:text-[#008080] transition-colors">
        <p className="font-semibold">{text}</p>
    </motion.div>
);

const FeelCard = ({ icon, text }) => (
    <motion.div
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4"
    >
        <div className="text-[#008080]">{icon}</div>
        <p className="text-black font-medium">{text}</p>
    </motion.div>
);

const SummaryItem = ({ text }) => (
    <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-[#008080] flex items-center justify-center text-white text-xs">✓</div>
        <span className="text-black font-medium">{text}</span>
    </div>
);

const EyeIcon = () => <Zap size={24} className="text-[#008080]" />;

export default Results;
