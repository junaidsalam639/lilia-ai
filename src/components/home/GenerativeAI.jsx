/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const GenerativeAI = () => {
  const ref = useRef(null)
  const canvasRef = useRef(null)
  const waveCanvasRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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

    const particlesArray = []
    const numberOfParticles = 100
    const colors = ["rgba(255, 0, 0, 0.5)", "rgba(255, 255, 255, 0.3)", "rgba(255, 50, 50, 0.4)"]

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.connections = []
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }

      findConnections(particles) {
        this.connections = []
        for (let i = 0; i < particles.length; i++) {
          const dx = this.x - particles[i].x
          const dy = this.y - particles[i].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            this.connections.push({
              particle: particles[i],
              distance: distance,
            })
          }
        }
      }

      drawConnections() {
        for (let i = 0; i < this.connections.length; i++) {
          const opacity = 1 - this.connections[i].distance / 100
          ctx.strokeStyle = `rgba(255, 50, 50, ${opacity * 0.5})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(this.connections[i].particle.x, this.connections[i].particle.y)
          ctx.stroke()
        }
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    init()
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].findConnections(particlesArray)
      }
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].drawConnections()
      }
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  useEffect(() => {
    if (!waveCanvasRef.current) return

    const canvas = waveCanvasRef.current
    const ctx = canvas.getContext("2d")
    const setCanvasDimensions = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)
    const waves = [
      {
        y: canvas.height * 0.3,
        length: 0.01,
        amplitude: 50,
        frequency: 0.01,
        color: "rgba(255, 0, 0, 0.1)",
      },
      {
        y: canvas.height * 0.5,
        length: 0.015,
        amplitude: 40,
        frequency: 0.015,
        color: "rgba(255, 50, 50, 0.08)",
      },
      {
        y: canvas.height * 0.7,
        length: 0.02,
        amplitude: 30,
        frequency: 0.02,
        color: "rgba(255, 100, 100, 0.06)",
      },
    ]

    let increment = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < waves.length; i++) {
        const wave = waves[i]
        ctx.fillStyle = wave.color
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.length + increment * wave.frequency) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()
      }

      increment += 0.05
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const shapes = [
    { type: "circle", size: 80, x: "10%", y: "20%", delay: 0, duration: 25 },
    { type: "triangle", size: 60, x: "85%", y: "15%", delay: 5, duration: 30 },
    { type: "square", size: 50, x: "75%", y: "75%", delay: 10, duration: 35 },
    { type: "circle", size: 40, x: "15%", y: "70%", delay: 15, duration: 28 },
    { type: "triangle", size: 70, x: "50%", y: "85%", delay: 7, duration: 32 },
  ]

  return (
    <section ref={ref} className="py-20 bg-black text-white relative overflow-hidden min-h-[100vh] flex items-center">
      <canvas ref={waveCanvasRef} className="absolute inset-0 w-full h-full opacity-70" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {shapes?.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute z-0"
          initial={{
            x: shape.x,
            y: shape.y,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: shape.delay * 0.1,
            },
            rotate: {
              duration: shape.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: shape.delay * 0.2,
            },
          }}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
        >
          {shape.type === "circle" && (
            <div className="w-full h-full rounded-full border-2 border-red-500/20 backdrop-blur-sm" />
          )}
          {shape.type === "square" && (
            <div className="w-full h-full border-2 border-white/20 backdrop-blur-sm rotate-45" />
          )}
          {shape.type === "triangle" && (
            <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-l-transparent border-r-transparent border-b-red-500/20" />
          )}
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(0,0,0,0) 70%)",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
        }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-black/90 z-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-red-500/10 blur-xl z-0"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-[#F0002A]/10 blur-xl z-0"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/10 blur-xl z-0"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />

      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`star-${index}`}
          className="absolute w-1 h-1 bg-white rounded-full z-0"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" style={{ opacity, y, scale }}>
          <motion.p
            className="text-sm text-red-500 uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Powered by Innovation
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Generative AI
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Unleash the Power of AI
          </motion.p>

          <motion.div
            className="h-0.5 w-20 md:w-40 bg-[#F0002A] mx-auto my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Neural Networks", icon: "brain-circuit", delay: 0.2 },
            { title: "Machine Learning", icon: "cpu", delay: 0.4 },
            { title: "Deep Learning", icon: "network", delay: 0.6 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-xl p-6 hover:bg-red-950/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: item.delay }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.1)" }}
            >
              <motion.div className="w-16 h-16 mx-auto mb-4 text-red-500" variants={floatingVariants} animate="animate">
                {item.icon === "brain-circuit" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
                    <path d="M16 8V5c0-1.1.9-2 2-2" />
                    <path d="M12 13h4" />
                    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                    <path d="M12 8h8" />
                    <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  </svg>
                )}
                {item.icon === "cpu" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M15 2v2" />
                    <path d="M15 20v2" />
                    <path d="M2 15h2" />
                    <path d="M2 9h2" />
                    <path d="M20 15h2" />
                    <path d="M20 9h2" />
                    <path d="M9 2v2" />
                    <path d="M9 20v2" />
                  </svg>
                )}
                {item.icon === "network" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="19" cy="12" r="2" />
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                    <line x1="12" y1="7" x2="12" y2="17" />
                    <line x1="7" y1="12" x2="17" y2="12" />
                    <line x1="6.7" y1="6.7" x2="17.3" y2="17.3" />
                    <line x1="17.3" y1="6.7" x2="6.7" y2="17.3" />
                  </svg>
                )}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-400 text-center">
                Advanced {item.title.toLowerCase()} technologies powering next-generation AI solutions.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Discover what shapes our identity</h3>

          <motion.div
            className="w-16 h-16 mx-auto mb-8 relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-500 rounded-full text-white font-medium mt-6 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore AI Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default GenerativeAI
