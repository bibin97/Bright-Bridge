import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Info, BookOpen, Users, GraduationCap, ShieldCheck, HelpCircle, ArrowRight, Zap, Target, Activity, User, Sparkles } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const FAQ_DATA = [
    {
        category: "About Bright Bridge",
        icon: <Info size={20} />,
        questions: [
            {
                q: "What exactly is Bright Bridge?",
                a: "Bright Bridge is a foundation-focused learning platform designed to identify and fix the root causes of a student's academic struggles. We don't just teach subjects; we rebuild the clarity and confidence required for a lifetime of effective learning."
            },
            {
                q: "Is this tuition or something more?",
                a: "Traditional tuition focuses on finishing the school syllabus and chasing marks. Bright Bridge is much more—we focus on 'Learning Rehabilitation.' We go back to where the student started losing track and rebuild their fundamentals from that point."
            },
            {
                q: "Who is Bright Bridge NOT for?",
                a: "It is not for students looking for quick shortcuts to pass an exam without understanding the subject. It is also not suitable for those who want a crowded classroom environment; we are built for focused, high-intent learning."
            },
            {
                q: "How is this different from coaching centres?",
                a: "Coaching centres usually move at a fixed speed to cover a vast syllabus. At Bright Bridge, the pace is dictated by the student. We don't move to Chapter 2 until we are 100% sure the student has mastered the fundamentals of Chapter 1."
            }
        ]
    },
    {
        category: "Programs & Learning Model",
        icon: <BookOpen size={20} />,
        questions: [
            {
                q: "What happens in the free demo?",
                a: "The demo is actually a Diagnostic Session. We assess the student's current understanding, identify hidden learning gaps, and show you exactly where the confusion started. It’s an eye-opener for both students and parents."
            },
            {
                q: "Is the syllabus rushed or balanced?",
                a: "We never rush. Our priority is quality over quantity. We follow a 'Layered Mastery' model where we balance clear concept building with regular revision, ensuring the student never feels overwhelmed."
            },
            {
                q: "How do you track improvement?",
                a: "We don't just track marks. We monitor 'Clarity Metrics'—how fast a student understands a new topic, how accurately they recall previous concepts, and how much their fear of the subject has decreased."
            }
        ]
    },
    {
        category: "Mentors & Support System",
        icon: <Users size={20} />,
        questions: [
            {
                q: "Who teaches the classes?",
                a: "Our mentors are subject matter experts who are specifically trained in 'Concept-Oriented Teaching.' They aren't just teachers; they are academic coaches who understand student psychology."
            },
            {
                q: "Are mentors different from teachers?",
                a: "Yes. While a teacher delivers a lecture, a mentor observes the student's learning patterns, identifies where they get stuck, and provides personalised emotional and academic support to clear those blocks."
            },
            {
                q: "Will my child get individual attention?",
                a: "Absolutely. We maintain a strict student-to-mentor ratio to ensure that every doubt is heard and every struggle is addressed. Your child is never just another face in a crowd at Bright Bridge."
            }
        ]
    },
    {
        category: "Exams & Results",
        icon: <Target size={20} />,
        questions: [
            {
                q: "How do you reduce exam fear?",
                a: "Exam fear usually comes from lack of preparation or lack of clarity. By building a rock-solid foundation and conducting high-frequency, low-stress mini-tests, we make the actual exam feel like just another practice day."
            },
            {
                q: "Are results guaranteed?",
                a: "We promise 100% visible improvement in 15 days. While 'guaranteeing' a specific rank is impossible (and dishonest), we guarantee that your child will understand the subject better and approach studies with significantly more confidence."
            },
            {
                q: "Is last-month preparation enough?",
                a: "While we can show significant progress in a short time, true mastery takes consistent effort. Our 15-day reset is designed to put the student on the right track, but long-term success comes from following the system we build."
            }
        ]
    },
    {
        category: "Parents’ Common Doubts",
        icon: <MessageCircle size={20} />,
        questions: [
            {
                q: "Will parents get updates?",
                a: "Yes. We provide transparent and detailed progress reports. You won't just see marks; you'll see which specific concepts your child has mastered and where they are still practicing."
            },
            {
                q: "What if my child is already good?",
                a: "Even 'good' students often have invisible gaps that create trouble in higher classes. Bright Bridge helps high-performers achieve 'Elite Mastery'—perfecting their accuracy and speed to reach top-tier results."
            },
            {
                q: "What if we are not satisfied?",
                a: "Transparency is our core value. If you feel the program isn't the right fit for your child within the first few sessions, we have a clear and honest refund/exit policy because we only want to work with families who see genuine value."
            }
        ]
    },
    {
        category: "Enrollment & Privacy",
        icon: <ShieldCheck size={20} />,
        questions: [
            {
                q: "Can my child stop anytime?",
                a: "Yes. We believe in earning your trust every single day. There are no restrictive long-term contracts that force you to stay if you're not seeing the promised results."
            },
            {
                q: "How are the timings handled?",
                a: "We offer flexible scheduling to ensure the program doesn't clash with school hours or other essential activities. Learning should be a part of their day, not a burden on it."
            }
        ]
    }
];

const Faq = () => {
    const { openModal } = useModal();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen">
            {/* HERO SECTION */}
            <section className="relative py-16 px-6 lg:px-24 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center relative z-10">

                    {/* 1. Heading & Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 max-w-3xl"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-black leading-[1.1]">
                            Got Questions? We’ve Got <span className="text-[#008080]">Clear Answers.</span>
                        </h1>
                        <p className="text-xl text-black font-medium leading-relaxed">
                            Everything students and parents want to know about Bright Bridge — explained simply and honestly.
                        </p>
                    </motion.div>

                    {/* 2. Micro Cards Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
                    >
                        {/* Card 1 */}
                        <HeroCard
                            icon={<Activity size={20} />}
                            title="How Bright Bridge Works"
                            desc="A clear step-by-step system from diagnosis to improvement."
                        />
                        {/* Card 2 */}
                        <HeroCard
                            icon={<User size={20} />}
                            title="Who This Is For"
                            desc="Students who want clarity, confidence, and consistent progress."
                        />
                        {/* Card 3 */}
                        <HeroCard
                            icon={<Sparkles size={20} />}
                            title="Why We Are Different"
                            desc="Personal mentors, focused teaching, and honest tracking."
                        />
                        {/* Card 4 - Highlight */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="bg-[#008080]/5 p-6 rounded-2xl border border-[#008080]/10 flex items-center justify-center text-center hover:bg-[#008080]/10 transition-colors"
                        >
                            <p className="text-sm font-bold text-[#008080]">
                                “Every question you have is answered here — honestly and transparently.”
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* 3. CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            onClick={openModal}
                            className="bg-[#008080] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-[#008080]/20 hover:bg-[#006666] transition-all flex items-center gap-2 mx-auto"
                        >
                            Book a Free Demo Session <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-64 bg-[#008080]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute top-0 left-0 p-32 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 px-6 lg:px-24">
                <div className="max-w-4xl mx-auto space-y-20">
                    {FAQ_DATA.map((cat, catIdx) => (
                        <div key={catIdx} className="space-y-8">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#008080]">
                                    {cat.icon}
                                </div>
                                <h2 className="text-xl font-bold text-black tracking-tight uppercase tracking-widest text-[#008080]">
                                    {cat.category}
                                </h2>
                            </div>

                            {/* Questions */}
                            <div className="space-y-4">
                                {cat.questions.map((faq, faqIdx) => {
                                    const globalIdx = `${catIdx}-${faqIdx}`;
                                    const isActive = activeIndex === globalIdx;
                                    return (
                                        <motion.div
                                            layout
                                            key={faqIdx}
                                            className={`bg-white rounded-2xl border transition-colors duration-300 ${isActive ? 'border-[#008080]/30 shadow-md ring-1 ring-[#008080]/5' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
                                        >
                                            <button
                                                onClick={() => toggleFaq(globalIdx)}
                                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                                            >
                                                <span className={`text-lg font-medium transition-colors ${isActive ? 'text-[#008080]' : 'text-black group-hover:text-[#008080]'}`}>
                                                    {faq.q}
                                                </span>
                                                <div className={`shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#008080]' : 'text-black opacity-30'}`}>
                                                    <ChevronDown size={20} />
                                                </div>
                                            </button>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-6 pt-0 text-black leading-relaxed text-lg border-t border-gray-50 mt-2 pt-4">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Trust Micro-section */}
                            {(catIdx === 0 || catIdx === 2 || catIdx === 4) && (
                                <div className="py-10">
                                    <div className="bg-white/50 backdrop-blur-sm border border-dashed border-gray-200 rounded-3xl p-8 text-center space-y-2">
                                        <p className="text-[#008080] font-bold text-sm uppercase tracking-widest pb-1">
                                            {catIdx === 0 ? "Still unsure? That’s okay." : catIdx === 2 ? "Most parents had the same questions." : "Transparency First."}
                                        </p>
                                        <p className="text-black font-medium">
                                            {catIdx === 0 ? "Every student learning path is unique. We are here to help you navigate it." : catIdx === 2 ? "Deciding on your child's education is a big step. We ensure you have all the facts." : "We update parents at every milestone of their child's progress."}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-24 px-6 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 lg:p-12 text-center shadow-2xl shadow-teal-900/5 border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-[#008080]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-bold text-black">
                                Still Have Questions? <span className="text-[#008080]">Let’s Talk.</span>
                            </h2>
                            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
                                Every student is different. Speak with our academic team to find what truly fits your child's needs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#008080] hover:text-white transition-all shadow-xl shadow-yellow-400/20 cursor-pointer"
                            >
                                Book a Free Demo
                            </button>
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto bg-[#008080] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all shadow-xl shadow-teal-900/10 cursor-pointer"
                            >
                                Talk to an Academic Mentor
                            </button>
                        </div>

                        <div className="pt-8 border-t border-gray-50 flex items-center justify-center gap-2 text-black font-medium">
                            <HelpCircle size={18} />
                            <span>Available daily from 10 AM to 5 PM</span>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

const HeroCard = ({ icon, title, desc }) => (
    <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-full"
    >
        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#008080] shrink-0">
            {icon}
        </div>
        <div className="space-y-1">
            <h4 className="font-bold text-black text-sm">{title}</h4>
            <p className="text-xs text-black leading-relaxed font-medium">{desc}</p>
        </div>
    </motion.div>
);

export default Faq;
