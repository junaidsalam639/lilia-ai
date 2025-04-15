/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ContactSection = () => {
    const formRef = useRef(null)
    const isInView = useInView(formRef, { once: false, amount: 0.3 })

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
    }

    return (
        <section className="pb-20 relative overflow-hidden">
            <motion.h2
                className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
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
                        <div className="bg-red-600 text-white p-8 rounded-xl relative">
                            <motion.div
                                className="absolute -top-6 -left-6 w-12 h-12 bg-red-500 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                            />

                            <motion.div
                                className="absolute -bottom-8 -right-8 w-16 h-16 bg-red-500 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -180, 0],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                            />

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
                                    { icon: "mail", text: "info@liliaai.com" },
                                    { icon: "phone", text: "+1 (555) 123-4567" },
                                    { icon: "map-pin", text: "Houston, Texas, USA" },
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
                                                {item.icon === "phone" && (
                                                    <>
                                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
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
                                        <span>{item.text}</span>
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
                                {["instagram", "facebook", "twitter", "linkedin"].map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href="#"
                                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-600"
                                        whileHover={{ scale: 1.2, backgroundColor: "#ffffff" }}
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
                                            {social === "instagram" && (
                                                <>
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </>
                                            )}
                                            {social === "facebook" && (
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            )}
                                            {social === "twitter" && (
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            )}
                                            {social === "linkedin" && (
                                                <>
                                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </>
                                            )}
                                        </svg>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={formRef}
                        className="lg:col-span-3 bg-white p-8 rounded-xl shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form>
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="John"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="Doe"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    placeholder="john.doe@example.com"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    placeholder="Your message here..."
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                custom={5}
                                variants={inputVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                Send
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
