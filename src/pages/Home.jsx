/* eslint-disable no-unused-vars */
// import MagicalNumbers from "../components/home/MagicalNumbers"
// import ImmersiveSection from "../components/home/ImmersiveSection"
// import GenerativeAI from "../components/home/GenerativeAI"
// import { useEffect, useState } from "react"
// import Lenis from "@studio-freight/lenis"
// import PageLoader from "../components/PageLoader"
import { motion, useScroll } from "framer-motion"
import Layout from "../components/layout/Layout"
import HeroSection from "../components/home/HeroSection"
import IdeasSection from "../components/home/IdeasSection"
import AdvisoryBoardSection from "../components/home/AdvisoryBoardSection"
import ContactSection from "../components/home/ContactSection"
import BusinessAdvisoryBoard from "../components/home/BusinessAdvisoryBoard"
import ClinicAdvisoryBoard from "../components/home/ClinicalAdvisoryBoard"

function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     direction: "vertical",
  //     gestureOrientation: "vertical",
  //     smoothWheel: true,
  //     smoothTouch: false,
  //     touchMultiplier: 1.5,
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)

  //   return () => {
  //     lenis.destroy()
  //   }
  // }, [])

  // const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();


  return (
    <div className="relative">
      {/* {loading ?
        <PageLoader loading={loading} setLoading={setLoading} />
        : ( */}
          <>
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-[#F0002A] origin-left z-50"
              style={{ scaleX: scrollYProgress }}
            />

            <Layout>
              <main>
                <HeroSection />
                <IdeasSection />
                <AdvisoryBoardSection />
                <BusinessAdvisoryBoard />
                <ClinicAdvisoryBoard />
                {/* <MagicalNumbers /> */}
                {/* <ImmersiveSection /> */}
                {/* <GenerativeAI /> */}
                {/* <StepsSection /> */}
                {/* <LovableProducts /> */}
                <ContactSection />
              </main>
            </Layout>
          </>
        {/* )} */}
    </div>
  )
}

export default Home
