/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor({
  color = "#ef4444",
  size = 10,
  ringSize = 36,
  ringColor = "rgba(239, 68, 68, 0.2)",
  trailEffect = true,
}) {
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const cursorX = useSpring(mouseX, { stiffness: 300, damping: 20 })
  const cursorY = useSpring(mouseY, { stiffness: 300, damping: 20 })

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300)

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX + window.scrollX)
      mouseY.set(e.clientY + window.scrollY)
    }

    const updateCursorType = () => {
      const el = document.elementFromPoint(mouseX.get(), mouseY.get())
      const cursorStyle = el ? window.getComputedStyle(el).cursor : "auto"
      setIsPointer(cursorStyle === "pointer")
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.body.style.cursor = "none"

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousemove", updateCursorType)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      clearTimeout(timeout)
      document.body.style.cursor = "auto"
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousemove", updateCursorType)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, []);

  const mainSize = isPointer ? size * 1.5 : size

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: mainSize,
          height: mainSize,
          marginLeft: -mainSize / 2,
          marginTop: -mainSize / 2,
          backgroundColor: color,
          opacity: isVisible ? 1 : 0,
          boxShadow: `0 0 6px ${color}66`,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          x: cursorX,
          y: cursorY,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          borderColor: ringColor,
          borderWidth: 2,
          opacity: isVisible ? 1 : 0.6,
        }}
        animate={{
          scale: isClicking ? 0.85 : isPointer ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

      {trailEffect &&
        Array.from({ length: 4 })?.map((_, i) => {
          const trailSize = size / 2
          const opacity = 0.2 - i * 0.04
          const delay = (i + 1) * 0.05
          return (
            <motion.div
              key={i}
              className="fixed top-0 left-0 z-[9997] rounded-full pointer-events-none"
              style={{
                width: trailSize,
                height: trailSize,
                backgroundColor: color,
                opacity,
              }}
              animate={{
                x: mouseX.get() - trailSize / 2,
                y: mouseY.get() - trailSize / 2,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay,
              }}
            />
          )
        })}
    </>
  )
}
