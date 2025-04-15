/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const products = [
  {
    name: "PhotoAI",
    color: "from-purple-600 to-indigo-600",
    image: "/assets/image-five.avif",
  },
  {
    name: "VideoGen",
    color: "from-blue-600 to-cyan-600",
    image: "/assets/image-two.avif",
  },
  {
    name: "AudioMix",
    color: "from-red-600 to-orange-600",
    image: "/assets/image-three.svg",
  },
  {
    name: "TextCraft",
    color: "from-green-600 to-teal-600",
    image: "/assets/image-four.avif",
  },
]

const LovableProducts = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" style={{ opacity, y }}>
          <motion.h2
            className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Lovable Products
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designed with care, built with precision, loved by millions
          </motion.p>

          <motion.div
            className="h-0.5 w-20 md:w-40 bg-red-600 mx-auto my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {products?.map((product, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${product?.color}`}
              variants={cardVariants}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="p-6 text-white">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-auto rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-center">{product?.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="text-2xl font-bold text-red-600"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            800K+ Daily Active User Base
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LovableProducts
