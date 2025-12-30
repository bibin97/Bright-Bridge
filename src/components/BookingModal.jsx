import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, User, Phone, GraduationCap, BookOpen, MapPin } from 'lucide-react';

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 lg:p-10">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-8">
                                    <div className="flex gap-2 mb-4">
                                        <div className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= 1 ? 'bg-[#008080]' : 'bg-gray-100'}`} />
                                        <div className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= 2 ? 'bg-[#008080]' : 'bg-gray-100'}`} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-black">
                                        {step === 1 ? 'Get Started' : 'Almost There!'}
                                    </h2>
                                    <p className="text-black text-sm mt-1">
                                        {step === 1 ? 'Fill in your basic details to continue.' : 'Provide academic details for better guidance.'}
                                    </p>
                                </div>

                                <form onSubmit={step === 1 ? handleStep1Submit : handleFinalSubmit} className="space-y-5">
                                    {step === 1 ? (
                                        <>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-black opacity-40 uppercase tracking-wider ml-1">Student Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-black opacity-30" size={18} />
                                                    <input
                                                        type="text"
                                                        name="studentName"
                                                        required
                                                        placeholder="Enter student name"
                                                        value={formData.studentName}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-[#008080] focus:bg-white rounded-xl outline-none transition-all text-black font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-black opacity-40 uppercase tracking-wider ml-1">WhatsApp Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-black opacity-30" size={18} />
                                                    <input
                                                        type="tel"
                                                        name="whatsappNumber"
                                                        required
                                                        placeholder="Enter WhatsApp number"
                                                        value={formData.whatsappNumber}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-[#008080] focus:bg-white rounded-xl outline-none transition-all text-black font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-[#008080] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#008080]/20 hover:bg-[#006666] transition-all flex items-center justify-center gap-2 mt-4"
                                            >
                                                {loading ? 'Processing...' : (
                                                    <>
                                                        Next
                                                        <ArrowRight size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-black opacity-40 uppercase tracking-wider ml-1">Grade / Class</label>
                                                <div className="relative">
                                                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-black opacity-30" size={18} />
                                                    <input
                                                        type="text"
                                                        name="grade"
                                                        required
                                                        placeholder="e.g. 10th Standard"
                                                        value={formData.grade}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-[#008080] focus:bg-white rounded-xl outline-none transition-all text-black font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-black opacity-40 uppercase tracking-wider ml-1">Subject</label>
                                                <div className="relative">
                                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-black opacity-30" size={18} />
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        required
                                                        placeholder="e.g. Mathematics"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-[#008080] focus:bg-white rounded-xl outline-none transition-all text-black font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-black opacity-40 uppercase tracking-wider ml-1">Place</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-black opacity-30" size={18} />
                                                    <input
                                                        type="text"
                                                        name="place"
                                                        required
                                                        placeholder="Enter your location"
                                                        value={formData.place}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-[#008080] focus:bg-white rounded-xl outline-none transition-all text-black font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    className="flex-1 bg-gray-100 text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="flex-[2] bg-yellow-400 text-black py-4 rounded-xl font-bold shadow-lg shadow-yellow-400/20 hover:bg-[#008080] hover:text-white transition-all flex items-center justify-center gap-2"
                                                >
                                                    {loading ? 'Submitting...' : 'Complete Booking'}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h2 className="text-2xl font-bold text-black mb-2">Registration Successful!</h2>
                                <p className="text-black mb-8">Our expert mentors will contact you on WhatsApp shortly.</p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all"
                                >
                                    Close
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingModal;
