/* eslint-disable no-unused-vars */
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const advisors = [
  {
    name: "Donald Schomer, MD, MBA, HSME",
    title: "Venture Advisor at Mercury Fund",
    image: "/assets/men-one.avif",
    bio: [
      "Dr. Donald Schomer is a Venture Advisor at Mercury Fund, a board-certified neuroradiologist, inventor/engineer, and health system leader in cancer imaging.",
      "He is Professor and past Chairman of the Department of Neuroradiology at the University of Texas MD Anderson Cancer Center.",
      "He holds several patents and has founded multiple medical device, biotech, and technology companies that have been successfully acquired.",
    ],
  },
  {
    name: "Jane Smith, PhD",
    title: "Chief Scientific Officer",
    image: "/assets/men-two.avif",
    bio: [
      "Dr. Jane Smith is a renowned neuroscientist with over 20 years of experience in brain-computer interfaces.",
      "She has published more than 100 peer-reviewed papers and holds 15 patents in the field of neurotechnology.",
      "Previously, she served as the Director of Research at the National Institute of Neurological Disorders.",
    ],
  },
  {
    name: "Michael Johnson, MD",
    title: "Medical Director",
    image: "/assets/men-three.avif",
    bio: [
      "Dr. Michael Johnson is a practicing neurologist specializing in movement disorders and neuromodulation.",
      "He has pioneered several novel treatments for Parkinson's disease and essential tremor.",
      "He serves on multiple editorial boards and has been recognized with the Presidential Award for Clinical Excellence.",
    ],
  },
]

const AdvisoryBoardSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Advisory Board
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-red-600 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={advisors[activeIndex].image || "/placeholder.svg"}
                    alt={advisors[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold">{advisors[activeIndex].name}</h3>
                    <p className="text-red-300">{advisors[activeIndex].title}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {advisors[activeIndex].bio.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      className="text-gray-700 mb-4 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex space-x-2">
                {advisors.map((_, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === activeIndex ? "bg-red-600" : "bg-gray-300"}`}
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                  />
                ))}
              </div>

              <div className="mt-8 flex space-x-4">
                <motion.button
                  className="p-3 rounded-full bg-gray-100 text-gray-700 disabled:opacity-50"
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? advisors.length - 1 : prev - 1))}
                  whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </motion.button>

                <motion.button
                  className="p-3 rounded-full bg-gray-100 text-gray-700 disabled:opacity-50"
                  onClick={() => setActiveIndex((prev) => (prev === advisors.length - 1 ? 0 : prev + 1))}
                  whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoardSection
