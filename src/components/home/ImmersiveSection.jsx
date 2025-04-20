/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const cards = [
  {
    title: "Photo Editing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: "AI Generation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v8" />
        <path d="M18.4 6.5l-4.4 4.4" />
        <path d="M20 12h-8" />
        <path d="M17.5 18.4l-4.4-4.4" />
        <path d="M12 22v-8" />
        <path d="M6.5 17.5l4.4-4.4" />
        <path d="M2 12h8" />
        <path d="M5.6 6.5l4.4 4.4" />
      </svg>
    ),
  },
]

const ImmersiveSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={ref} className="py-20  relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" style={{ opacity, y }}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Immerse Yourself in the Art of Photo
            <br />
            <span className="text-[#F0002A]">Editing and Generative AI</span>
          </motion.h2>

          <motion.div
            className="h-0.5 w-20 md:w-40 bg-[#F0002A] mx-auto my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#F0002A] to-red-800 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-center">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImmersiveSection
