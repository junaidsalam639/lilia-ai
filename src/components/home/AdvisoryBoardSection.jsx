/* eslint-disable no-unused-vars */
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const advisors = [
  {
    title: "Ali Haider - Chief Executive Officer",
    image: "/assets/founder/ali_haider.jpg",
    bio: [
      "Ali is an internationally recognized, award-winning medical scientist with 2 national research fellowships and over 150 peer-reviewed scientific publications, national conference presentations, and textbook chapters. His research interests are focused on innovation in neurosurgical devices and cancer precision medicine.",
      "His scientific work has been published in world-renowned medical research journals such as Nature Communications, Neuro-Oncology, Journal of Neuroimmunology, Journal of Neurosurgery, and Journal of Neuro-Oncology. Ali’s research has been cited and discussed at leading academic medical centers and has contributed to improving the standard of care for patients with neurological conditions throughout the world.",
      "He has over 10 years of healthcare experience at the world’s leading medical institutions, including the University of Texas M.D. Anderson Cancer Center and the University of Toronto’s Hospital for Sick Children. Ali is pursuing dual graduate degrees, an MBA at the Rice University Jones Graduate School of Business and an MS in Computer Science at the University of Pennsylvania School of Engineering and Applied Science."
    ],
    shortName: "CEO",
    link: "https://www.linkedin.com/in/alishaider"
  },
  {
    title: "Abdul Durrani, MS - Chief Technology Officer",
    image: "/assets/founder/durrani.jpg",
    bio: [
      "Abdul has worked in the technology sector for over 10 years to include extensive experience software and cybersecurity.",
      "In addition to his extensive cybersecurity expertise, he has a strong background in artificial intelligence, with a focus on developing and researching machine learning models. Leveraging frameworks such as TensorFlow, he has worked extensively with Convolutional Neural Networks (CNNs), achieving groundbreaking results, including the development of a model that reached a predictive accuracy of 99.19%.",
      "Abdul currently holds a Masters in Computer Science from the University of Dayton with a Graduate certificate in AI Image Autonomous Systems. He is currently pursuing his Masters in Business Administration at Rice University.",
    ],
    shortName: "CTO",
    link: "http://linkedin.com/in/abdul-muqtadir-durrani-860b33107"
  },
  {
    title: "Adam Watts - President",
    image: "/assets/founder/adam_watts.jpg",
    bio: [
      "Adam got his start in the United States Army where he began his service as a Medic for six years before commissioning as an Engineer Officer. During his military tenure, he served in multiple formal and informal leadership roles.",
      "Outside of the Army, he has worked extensively in supply chain and operational roles both domestically and internationally.",
      "Adam is currently pursuing his Masters in Business Administration at Rice University alongside his co-founders.",
    ],
    shortName: "President",
    link: "http://linkedin.com/in/adam-j-watts"
  },
]

const AdvisoryBoardSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section className="py-20 relative overflow-hidden bg-[#F5FAFA]" id="founders">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F0002A] to-red-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Founders
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-[#F0002A] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative md:px-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden md:h-[70vh] w-full"
                  style={{
                    boxShadow: '0 0 20px 6px #ff0000',
                  }}
                >
                  <img
                    src={advisors[activeIndex]?.image}
                    alt={advisors[activeIndex]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold">{advisors[activeIndex].shortName}</h3>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <motion.a
                href={advisors[activeIndex]?.link}
                target="_blank"
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F0002A] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-5">{advisors[activeIndex].title}</h3>
                  {advisors[activeIndex]?.bio?.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      className="text-gray-700 mb-4 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center items-center md:mt-auto mt-10">
                <motion.button
                  className="md:absolute -left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#F5FAFA] rounded-full flex items-center justify-center text-[#F0002A] shadow-lg hover:bg-white transition-all z-10"
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? advisors.length - 1 : prev - 1))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </motion.button>

                <motion.button
                  className="md:absolute -right-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#F5FAFA] rounded-full flex items-center justify-center text-[#F0002A] shadow-lg hover:bg-white transition-all z-10"
                  onClick={() => setActiveIndex((prev) => (prev === advisors.length - 1 ? 0 : prev + 1))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoardSection
