/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const features = [
    "Near-instant brain aneurysm diagnoses",
    "Brain aneurysm identification on CTA images",
    "Real-time brain aneurysm measurements",
    "Clinical decision-making reports auto-generated for radiologists",
    "EHR and PACS integration",
]

export default function ScrollingFeatures() {
    const [width, setWidth] = useState(0)
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth)
        }
        const handleResize = () => {
            if (scrollRef.current) {
                setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const duplicatedFeatures = [...features, ...features, ...features]

    return (
        <div className="overflow-hidden">
            <motion.h2
                className="text-3xl font-bold text-center mb-8 text-red-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Key Features
            </motion.h2>

            <div className="relative overflow-hidden w-full mx-auto">
                <motion.div
                    ref={scrollRef}
                    className="flex gap-4"
                    initial={{ x: 0 }}
                    animate={{
                        x: [-width / 2, -width],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {duplicatedFeatures?.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-red-600 p-4 min-w-[320px] md:h-24 h-20 rounded-xl shadow-sm flex justify-center items-center flex-shrink-0"
                        >
                            <h3 className="text-white font-semibold text-base text-center">{feature}</h3>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    )
}

