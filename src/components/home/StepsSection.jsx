/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Upload",
    description: "Upload your brain CT securely to our platform.",
    image: "/assets/step-one.avif",
  },
  {
    number: "2",
    title: "Process",
    description: "Our AI analyzes the Brain CT using advanced algorithms.",
    image: "/assets/step-two.avif",
  },
  {
    number: "3",
    title: "Results",
    description: "Receive preliminary results and recommendations.",
    image: "/assets/step-three.avif",
  },
]

const StepsSection = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1])

  return (
    <motion.section
      ref={containerRef}
      className="py-20 relative overflow-hidden min-h-screen"
      style={{ opacity }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500/10 to-transparent"
        style={{ opacity: backgroundOpacity }}
      />

      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500/5 to-transparent"
        animate={{ x: [0, 20, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-500/30 to-transparent transform -translate-x-1/2 hidden md:block" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Process
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Follow our proven step-by-step approach to transform your ideas into reality.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-32 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden">
                <div className="absolute -left-4 -top-4 md:w-24 md:h-24 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-400 text-white text-3xl font-bold rounded-full shadow-lg">
                  {step?.number}
                </div>

                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{step?.title}</h3>
                  <p className="text-gray-600">{step?.description}</p>

                  {/* <motion.button
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-full font-medium inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button> */}
                </div>

                <motion.div
                  className="md:w-1/2 rounded-xl overflow-hidden shadow-lg relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                >
                  <img src={step?.image} alt={step?.title} className="w-full h-auto object-cover" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-1/2 bottom-0 w-0.5 h-16 bg-gradient-to-b from-red-500/50 to-transparent transform -translate-x-1/2 translate-y-full hidden md:block"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default StepsSection
