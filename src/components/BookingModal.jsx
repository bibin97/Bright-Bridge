import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        studentName: '',
        whatsappNumber: '',
        grade: '',
        subject: '',
        place: ''
    });
    const [loading, setLoading] = useState(false);
    const [step1Logged, setStep1Logged] = useState(false);

    // Reset state when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setIsSubmitted(false);
                setStep1Logged(false);
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStep1Submit = async (e) => {
        e.preventDefault();
        if (!formData.studentName || !formData.whatsappNumber) return;

        setLoading(true);

        // Simulating "Hidden Submit" for Step 1
        try {
            console.log('Step 1 Hidden Submit:', {
                studentName: formData.studentName,
                whatsappNumber: formData.whatsappNumber
            });

            // Here you would typically send to a spreadsheet or backend
            // To prevent duplicate entries if they go back and forth:
            if (!step1Logged) {
                // Actually trigger the submission logic here
                // e.g., await fetch('...', { method: 'POST', body: ... })
                setStep1Logged(true);
            }

            setStep(2);
        } catch (error) {
            console.error('Error in step 1 submit', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log('Final Submit (Full Details):', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            // Auto close after success
            setTimeout(() => {
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Error in final submit', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
                {!isSubmitted ? (
                    <>
                        {/* Header */}
                        <div className="bg-[#FFC107] p-6 pt-8 text-center relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-1 text-black/60 hover:text-black hover:bg-black/10 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>

                            <h2 className="text-[22px] font-bold text-black mb-1 tracking-tight">
                                Book Your Free Demo
                            </h2>
                            <p className="text-black/80 text-sm mb-5 font-medium">
                                {step === 1 ? "Step 1: Let's get to know you" : "Step 2: Academic Details"}
                            </p>

                            {/* Step Indicator */}
                            <div className="flex justify-center items-center gap-1.5">
                                <motion.div
                                    animate={{ width: step === 1 ? 24 : 6, opacity: step === 1 ? 1 : 0.4 }}
                                    className="h-1.5 bg-black rounded-full transition-all duration-300"
                                />
                                <motion.div
                                    animate={{ width: step === 2 ? 24 : 6, opacity: step === 2 ? 1 : 0.4 }}
                                    className="h-1.5 bg-black rounded-full transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <form onSubmit={step === 1 ? handleStep1Submit : handleFinalSubmit} className="space-y-5">
                                        {step === 1 ? (
                                            <>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-800 ml-1">Student Name</label>
                                                    <input
                                                        type="text"
                                                        name="studentName"
                                                        required
                                                        placeholder="e.g. Mohammed Ali"
                                                        style={{ color: '#000000' }}
                                                        value={formData.studentName}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] rounded-xl outline-none transition-all placeholder:text-gray-400 font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-800 ml-1">WhatsApp Number (GCC)</label>
                                                    <input
                                                        type="tel"
                                                        name="whatsappNumber"
                                                        required
                                                        placeholder="e.g. +971 50 123 4567"
                                                        style={{ color: '#000000' }}
                                                        value={formData.whatsappNumber}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] rounded-xl outline-none transition-all placeholder:text-gray-400 font-medium"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="w-full bg-[#008080] hover:bg-[#006666] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#008080]/20 transition-all flex items-center justify-center gap-2 mt-4"
                                                >
                                                    {loading ? 'Processing...' : (
                                                        <>
                                                            Next Step
                                                            <ArrowRight size={20} className="stroke-[2.5]" />
                                                        </>
                                                    )}
                                                </button>

                                                <p className="text-[10px] text-gray-400 text-center leading-tight mt-4 px-4">
                                                    By submitting, you agree to our Privacy Policy and allow us to contact you via WhatsApp/Call.
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-800 ml-1">Grade / Class</label>
                                                    <select
                                                        name="grade"
                                                        required
                                                        value={formData.grade}
                                                        onChange={handleChange}
                                                        style={{ color: '#000000' }}
                                                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] rounded-xl outline-none transition-all font-medium appearance-none"
                                                    >
                                                        <option value="" disabled>Select Grade</option>
                                                        <option value="KG 1">KG 1</option>
                                                        <option value="KG 2">KG 2</option>
                                                        {[...Array(12)].map((_, i) => (
                                                            <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-800 ml-1">Subject</label>
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        required
                                                        placeholder="e.g. Mathematics"
                                                        style={{ color: '#000000' }}
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] rounded-xl outline-none transition-all placeholder:text-gray-400 font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-800 ml-1">Location (GCC)</label>
                                                    <input
                                                        type="text"
                                                        name="place"
                                                        required
                                                        placeholder="e.g. Dubai, Riyadh, Doha"
                                                        style={{ color: '#000000' }}
                                                        value={formData.place}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] rounded-xl outline-none transition-all placeholder:text-gray-400 font-medium"
                                                    />
                                                </div>

                                                <div className="flex gap-3 mt-6">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        className="flex-1 bg-gray-100 text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-all text-sm"
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="flex-[2] bg-[#008080] hover:bg-[#006666] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#008080]/20 transition-all flex items-center justify-center gap-2 text-sm"
                                                    >
                                                        {loading ? 'Submitting...' : 'Complete Booking'}
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </form>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-8 lg:p-10 text-center flex flex-col items-center justify-center h-full min-h-[400px]"
                    >
                        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={40} className="stroke-[2.5]" />
                        </div>
                        <h2 className="text-2xl font-bold text-black mb-3">Registration Successful!</h2>
                        <p className="text-gray-600 mb-8 max-w-[260px] mx-auto leading-relaxed">
                            Our academic counselor will contact you shortly on WhatsApp.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-10 py-3.5 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default BookingModal;
