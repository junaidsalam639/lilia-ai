/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Lenis from "@studio-freight/lenis"
import Layout from "../components/layout/Layout"
import HeroSection from "../components/home/HeroSection"
import IdeasSection from "../components/home/IdeasSection"
import MagicalNumbers from "../components/home/MagicalNumbers"
import ImmersiveSection from "../components/home/ImmersiveSection"
import GenerativeAI from "../components/home/GenerativeAI"
import StepsSection from "../components/home/StepsSection"
import LovableProducts from "../components/home/LovableProducts"
import AdvisoryBoardSection from "../components/home/AdvisoryBoardSection"
import PageLoader from "../components/PageLoader"
import ContactSection from "../components/home/ContactSection"

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative">
      {loading ?
        <PageLoader loading={loading} setLoading={setLoading} />
        : (
          <>
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
              style={{ scaleX: scrollYProgress }}
            />
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                background: "radial-gradient(circle at center, rgba(255, 0, 0, 0.2), rgba(255, 255, 255, 0.8))",
                backgroundSize: "150% 150%",
                backgroundPosition: "center",
                opacity,
                y,
              }}
            />
            <Layout>
              <main>
                <HeroSection />
                <IdeasSection />
                <MagicalNumbers />
                <ImmersiveSection />
                <GenerativeAI />
                <StepsSection />
                <AdvisoryBoardSection />
                <LovableProducts />
                <ContactSection />
              </main>
            </Layout>
          </>
        )}
    </div>
  )
}

export default Home
