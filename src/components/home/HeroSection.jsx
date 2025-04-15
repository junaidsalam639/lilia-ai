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

  return (
    <motion.section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="container mx-auto px-4 text-center z-10" style={{ y }}>
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <span className="block">Creating</span>
          <span className="block mt-2 text-red-600">impactful Apps</span>
          <span className="block mt-2">for the World</span>
        </motion.h1>

        <motion.div
          className="h-0.5 w-20 md:w-40 bg-red-600 mx-auto my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We create innovative applications that transform ideas into reality, empowering users to achieve more.
        </motion.p>

        <motion.button
          className="mt-10 px-8 py-3 bg-red-600 text-white rounded-full font-medium"
          whileHover={{ scale: 1.05, backgroundColor: "#ff0000" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
