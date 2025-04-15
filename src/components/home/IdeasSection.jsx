/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const IdeasSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto text-center mb-16" style={{ opacity, y, scale }}>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Where ideas collide, creativity thrives, and <span className="text-red-600">breakthroughs</span> happen.
          </motion.h2>

          <motion.div
            className="h-0.5 w-20 md:w-40 bg-red-600 mx-auto my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/assets/bg-image.jpg"
            alt="Creative visualization"
            className="w-full h-auto object-cover"
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">Breakthrough Innovation</h3>
            <p className="text-white/90">
              Our platform enables creators to push boundaries and explore new possibilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default IdeasSection
