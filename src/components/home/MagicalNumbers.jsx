/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, animate } from "framer-motion"

const stats = [
  { value: "15+", label: "Years Experience", endValue: 15 },
  { value: "2.5B+", label: "Downloads", endValue: 2.5 },
  { value: "800K+", label: "Daily Active Users", endValue: 800 },
]

const MagicalNumbers = () => {
  const ref = useRef(null)
  const canvasRef = useRef(null)
  const gridCanvasRef = useRef(null)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const [mainCount, setMainCount] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value > 0.2 && !hasAnimated) {
        setHasAnimated(true)
        stats.forEach((stat, index) => {
          animate(0, stat.endValue, {
            duration: 2,
            onUpdate: (value) => {
              setAnimatedStats((prev) => {
                const newStats = [...prev]
                newStats[index] = value
                return newStats
              })
            },
          })
        })

        // Animate the main counter
        animate(0, 150, {
          duration: 2.5,
          onUpdate: (value) => setMainCount(Math.round(value)),
        })
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, hasAnimated])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const setCanvasDimensions = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)
    const numbersArray = []
    const numberOfNumbers = 50
    const possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "%", "$", "B", "M", "K"]

    class FloatingNumber {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 10
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.number = possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]
        this.opacity = Math.random() * 0.2 + 0.1
        this.color =
          Math.random() > 0.7 ? "rgba(255, 50, 50, " + this.opacity + ")" : "rgba(255, 255, 255, " + this.opacity + ")"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.font = `${this.size}px Arial`
        ctx.fillStyle = this.color
        ctx.fillText(this.number, this.x, this.y)
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfNumbers; i++) {
        numbersArray.push(new FloatingNumber())
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i].update()
        numbersArray[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  useEffect(() => {
    if (!gridCanvasRef.current) return

    const canvas = gridCanvasRef.current
    const ctx = canvas.getContext("2d")
    const setCanvasDimensions = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)
    const gridSize = 30
    let offset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(255, 0, 0, 0.1)"
      ctx.lineWidth = 0.5

      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      offset += 0.2
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        opacity: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: i * 0.1,
        },
        scale: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: i * 0.1,
        },
      },
    }),
  }

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden min-h-[100vh] flex items-center">
      <canvas ref={gridCanvasRef} className="absolute inset-0 w-full h-full opacity-50" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-500"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial="hidden"
          animate="visible"
          custom={i}
          variants={particleVariants}
        />
      ))}

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-black/80 z-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" style={{ opacity, y }}>
          <motion.div
            className="inline-block bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
          >
            <h3 className="text-xl font-medium">The Magical Numbers</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats?.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full bg-black/50 backdrop-blur-sm border-2 border-[#F0002A] flex items-center justify-center mb-6 relative"
                  whileInView={{
                    boxShadow: [
                      "0 0 0 0 rgba(255, 0, 0, 0)",
                      "0 0 0 10px rgba(255, 0, 0, 0.1)",
                      "0 0 0 20px rgba(255, 0, 0, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
                    {stat.value.includes("B") ? (
                      <>{animatedStats[index].toFixed(1)}B+</>
                    ) : stat.value.includes("K") ? (
                      <>{Math.round(animatedStats[index])}K+</>
                    ) : (
                      <>{Math.round(animatedStats[index])}+</>
                    )}
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-full border border-red-500/30"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
                <motion.span
                  className="text-base text-gray-300 font-medium"
                  whileHover={{ color: "#ef4444", scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="absolute w-40 h-40 rounded-full border-4 border-dashed border-red-500/20 -z-10"
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          <motion.div
            className="absolute w-60 h-60 rounded-full border border-red-500/10 -z-10"
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white mb-8 relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {mainCount}
            <span className="text-[#F0002A]">M+</span>

            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 text-yellow-500"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116.001-1.46c-.107-.345-.346-.624-.822-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z" />
              </svg>
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Downloads
          </motion.p>

          <motion.div
            className="mt-10 flex md:flex-row flex-col justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Statistics
            </motion.button>

            <motion.button
              className="px-6 py-2 bg-transparent border border-red-500 rounded-full text-white font-medium hover:bg-red-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MagicalNumbers
