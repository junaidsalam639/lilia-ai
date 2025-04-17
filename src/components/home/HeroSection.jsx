/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const HeroSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 0, 0, 0.2), rgba(255, 255, 255, 0.8))",
          backgroundSize: "150% 150%",
          backgroundPosition: "center",
          opacity,
          y,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 text-center z-10 h-full flex flex-col justify-center overflow-y-auto max-h-screen py-12"
        style={{ y }}
      >
        <motion.h1
          className="text-4xl md:text-4xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <span className="block">Transforming</span>
          <span className="block mt-2 text-red-600">Brain Aneurysm Diagnosis</span>
          <span className="block mt-2">with AI Precision</span>
        </motion.h1>

        <motion.div
          className="h-0.5 w-20 md:w-40 bg-red-600 mx-auto my-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.p
          className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6 px-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lilia AI's Brain Aneurysm solution leverages Convolutional Neural Networks and Large Language Models to analyze cranial CT angiograms and detect brain aneurysms with remarkable speed and accuracy.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="flex flex-row flex-wrap gap-4 max-w-5xl mx-auto justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            "Near-instant brain aneurysm diagnoses",
            "Brain aneurysm identification on CTA images",
            "Real-time brain aneurysm measurements",
            "Clinical decision-making reports auto-generated for radiologists",
            "EHR and PACS integration",
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 md:w-80 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-red-600 font-semibold text-base text-center">{feature}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
