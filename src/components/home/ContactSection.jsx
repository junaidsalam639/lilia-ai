/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
// import emailjs from '@emailjs/browser';
// import { form } from "framer-motion/client";
// Junaid Email template
// serviceId : service_6cobt4e
// templateId : template_ayh69gy
// key : CMncn_cQSRcbjUfcf

// Lilia Email template
// serviceId : service_6cobt4e
// templateId : template_ayh69gy
// key : CMncn_cQSRcbjUfcf


const ContactSection = () => {
    const formRef = useRef(null);
    const isInView = useInView(formRef, { once: false, amount: 0.3 });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const baseUrl = "http://localhost:8000";

    const inputVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * i,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // await emailjs.send(
            //     'service_6cobt4e',
            //     'template_ayh69gy',
            //     {
            //         to_email: 'junaidsalam639@gmail.com',
            //         from_name: `${formData.firstName} ${formData.lastName}`,
            //         from_email: formData.email,
            //         message: formData.message,
            //         first_name: formData.firstName,
            //         last_name: formData.lastName
            //     },
            //     'CMncn_cQSRcbjUfcf'
            // );


            const dataSend = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                message: formData.message,
            };


            const res = await fetch(`${baseUrl}/email/sendEmail`, {
                method: "POST",
                body: JSON.stringify(dataSend),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                setSubmitStatus({ success: true, message: 'Message sent successfully!' });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            }

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="md:py-20 py-10 relative overflow-hidden bg-[#F5FAFA]" id="contact">
            <motion.h2
                className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F0002A] to-red-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Contact Us
            </motion.h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <motion.div
                        className="lg:col-span-2 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-[#F0002A] text-white p-8 rounded-xl relative">
                            <motion.h2
                                className="text-3xl font-bold mb-6 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5 }}
                            >
                                Contact Us
                            </motion.h2>

                            <motion.p
                                className="mb-8 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Have questions about our technology or interested in partnership opportunities? Get in touch with our
                                team.
                            </motion.p>

                            <div className="space-y-4 relative z-10">
                                {[
                                    { icon: "mail", text: "info@lilia-ai.com" },
                                    { icon: "map-pin", text: "Houston, Texas" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                    >
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                {item.icon === "mail" && (
                                                    <>
                                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                                        <path d="M22 7l-10 7L2 7"></path>
                                                    </>
                                                )}
                                                {item.icon === "map-pin" && (
                                                    <>
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </>
                                                )}
                                            </svg>
                                        </div>
                                        <a href={item?.icon === "mail" ? `mailto:${item.text}` : ""}>{item.text}</a>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mt-8 flex space-x-4 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <motion.a
                                    href="https://www.instagram.com/liliabiotechnology?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
                                    target="_blank"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F0002A]"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="https://www.facebook.com/profile.php?id=100093139035730"
                                    target="_blank"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F0002A]"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="https://x.com/LiliaBiotech"
                                    target="_blank"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F0002A]"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >

                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/company/liliabiomed/"
                                    target="_blank"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F0002A]"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <>
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </>
                                    </svg>
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>


                    <motion.div
                        ref={formRef}
                        className="lg:col-span-3 bg-[#F5FAFA] p-8 rounded-xl shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <motion.div
                                    custom={1}
                                    variants={inputVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border bg-[#F5FAFA] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0002A] focus:border-transparent"
                                        placeholder="John"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    custom={2}
                                    variants={inputVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border bg-[#F5FAFA] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0002A] focus:border-transparent"
                                        placeholder="Doe"
                                        required
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                className="mb-6"
                                custom={3}
                                variants={inputVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border bg-[#F5FAFA] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0002A] focus:border-transparent"
                                    placeholder="john.doe@example.com"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                className="mb-6"
                                custom={4}
                                variants={inputVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border bg-[#F5FAFA] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0002A] focus:border-transparent"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </motion.div>

                            {submitStatus && (
                                <motion.div
                                    className={`mb-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                className="w-full bg-[#F0002A] text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                custom={5}
                                variants={inputVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

