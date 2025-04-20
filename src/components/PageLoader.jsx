/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PageLoader = (props) => {
  const { setLoading } = props || {};

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setLoading(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  const dots = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }))

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden h-screen w-full"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {dots?.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-[#F0002A]/10"
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}

        <motion.div
          className="flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <motion.div
            className="w-32 h-32 mb-12 relative"
            animate={{
              rotate: 360,
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            <div className="absolute inset-0 rounded-full border-t-4 border-[#F0002A]"></div>
            <div className="absolute inset-0 rounded-full border-r-4 border-red-600/30"></div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0.8, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <span className="text-3xl font-bold text-[#F0002A]">Lilia AI</span>
            </motion.div>
          </motion.div>

          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#F0002A] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.p
            className="mt-4 text-white font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(progress)}% Loading...
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageLoader
