/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ScrollingFeatures from "./ScrollingFeatures"

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

      <motion.div
        className="text-center z-10 h-full flex flex-col justify-center overflow-y-auto max-h-screen py-12"
        style={{ y }}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-6"
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
          <span className="block mt-2 text-[#F0002A]">Brain Aneurysm Diagnosis</span>
          <span className="block mt-2">with AI Precision</span>
        </motion.h1>

        <motion.p
          className="md:text-lg text-sm text-gray-700 max-w-3xl mx-auto mb-6 px-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lilia AI's Brain Aneurysm solution leverages Convolutional Neural Networks and Large Language Models to analyze cranial CT angiograms and detect brain aneurysms with remarkable speed and accuracy.
        </motion.p>
        <ScrollingFeatures />
      </motion.div>
    </motion.section>
  )
}

export default HeroSection





