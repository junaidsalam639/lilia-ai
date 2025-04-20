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
    <section ref={ref} className="py-20 relative overflow-hidden bg-[#F5FAFA]">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto text-center mb-16" style={{ opacity, y, scale }}>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Where knowledge meets care, awareness grows, and <span className="text-[#F0002A]">breakthroughs</span> in brain aneurysm treatment begin.
          </motion.h2>

          <motion.div
            className="h-0.5 w-20 md:w-40 bg-[#F0002A] mx-auto my-8"
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
            <h3 className="text-2xl font-bold mb-2">Breakthrough in Brain Aneurysm Care</h3>
            <p className="text-white/90">
              Our platform empowers early detection, supports life-saving research, and raises awareness to prevent ruptures before they happen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default IdeasSection
