/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


const AdvisoryBoardSlider = ({ heading, text, advisors }) => {
    const sectionRef = useRef(null)
    const canvasRef = useRef(null)
    const [currentAdvisor, setCurrentAdvisor] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentAdvisor((prev) => {
                if (direction === 1) {
                    return prev === advisors.length - 1 ? 0 : prev + 1
                } else {
                    return prev === 0 ? advisors.length - 1 : prev - 1
                }
            })
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [isAutoPlaying, direction])

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            if (canvas && canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth
                canvas.height = canvas.parentElement.offsetHeight
            }
        }

        setCanvasDimensions()
        window.addEventListener("resize", setCanvasDimensions)

        // Particles configuration
        const particlesArray = []
        const numberOfParticles = 50
        const colors = ["rgba(220, 38, 38, 0.2)", "rgba(239, 68, 68, 0.1)", "rgba(248, 113, 113, 0.15)"]

        // Create particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 5 + 2
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
                this.color = colors[Math.floor(Math.random() * colors.length)]
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
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        // Initialize particles
        const init = () => {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle())
            }
        }

        init()

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update()
                particlesArray[i].draw()
            }

            // Draw connecting lines
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x
                    const dy = particlesArray[a].y - particlesArray[b].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(220, 38, 38, ${0.1 * (1 - distance / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                        ctx.stroke()
                    }
                }
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", setCanvasDimensions)
        }
    }, [])

    const handlePrev = () => {
        setIsAutoPlaying(false)
        setCurrentAdvisor((prev) => (prev === 0 ? advisors.length - 1 : prev - 1))
        setDirection(-1)
    }

    const handleNext = () => {
        setIsAutoPlaying(false)
        setCurrentAdvisor((prev) => (prev === advisors.length - 1 ? 0 : prev + 1))
        setDirection(1)
    }

    useEffect(() => {
        if (!isAutoPlaying) {
            const timeout = setTimeout(() => {
                setIsAutoPlaying(true)
            }, 10000) // Resume auto-playing after 10 seconds of inactivity
            return () => clearTimeout(timeout)
        }
    }, [isAutoPlaying, currentAdvisor])

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    }

    return (
        <section
            ref={sectionRef}
            className="py-20 relative overflow-hidden min-h-screen flex items-center"
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(circle at center, rgba(255, 0, 0, 0.2), rgba(255, 255, 255, 0.8))",
                    backgroundSize: "150% 150%",
                    backgroundPosition: "center",
                }}
            />

            <motion.div
                className="absolute top-5 right-5 w-64 h-64 rounded-full bg-red-500/20"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                }}
            />

            <motion.div
                className="absolute bottom-10 left-5 w-80 h-80 bg-red-500/20 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                }}
            /> 

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F0002A] to-red-400"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        {heading}
                    </motion.h2>
                    <motion.div
                        className="h-1 w-20 bg-[#F0002A] mx-auto my-4"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    />
                    <motion.p
                        className="text-red-700 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {text}
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="flex justify-center space-x-2 mb-8">
                        {advisors.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentAdvisor === index ? "bg-[#F0002A] w-6" : "bg-red-300"
                                    }`}
                                onClick={() => {
                                    setCurrentAdvisor(index)
                                    setIsAutoPlaying(false)
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-[#F5FAFA] h-[400px] md:h-[350px] md:p-16 p-4 flex justify-center items-center"
                        style={{
                            boxShadow: '0 0 20px 6px #ff0000',
                        }}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentAdvisor}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.5 },
                                }}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 flex items-center justify-center bg-[#F0002A] text-white rounded-full mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{advisors[currentAdvisor].name}</h3>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                                                    {advisors[currentAdvisor]?.specialty}
                                                </span>
                                                {advisors[currentAdvisor]?.experience &&
                                                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                                                        {advisors[currentAdvisor]?.experience}
                                                    </span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-0 left-0 w-10 h-10 -ml-2 -mt-2 text-red-300 opacity-30">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-10 h-10"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 006.75-6.75c0-2.007-.81-3.817-2.115-5.122A6.721 6.721 0 005.25 7.5a6.721 6.721 0 00-6.75 6.75c0 1.847.746 3.519 1.952 4.733.143.13.298.276.447.408z"
                                                    clipRule="evenodd"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.5 6a6.707 6.707 0 001.196.098 6.721 6.721 0 006.75-6.75c0-2.007-.81-3.817-2.115-5.122A6.721 6.721 0 0010.5 0 6.721 6.721 0 003.75 6.75c0 1.847.746 3.519 1.952 4.733.143.13.298.276.447.408z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        <p className="text-gray-600 md:text-lg text-sm">{advisors[currentAdvisor].bio}</p>
                                    </div>
                                </div>

                                <div className="text-right mt-4 text-red-500 font-medium md:block hidden">
                                    {currentAdvisor + 1} / {advisors?.length}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#F5FAFA] rounded-full md:flex items-center justify-center text-[#F0002A] shadow-lg hover:bg-white transition-all z-10 hidden"
                            onClick={handlePrev}
                            aria-label="Previous slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#F5FAFA] rounded-full md:flex items-center justify-center text-[#F0002A] shadow-lg hover:bg-white transition-all z-10 hidden"
                            onClick={handleNext}
                            aria-label="Next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvisoryBoardSlider
