/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-red-500 mb-4">LILIA AI</h3>
            <p className="text-gray-400">
              Creating impactful apps for the world, empowering users to achieve more through innovation.
            </p>
          </motion.div>

          {[
            {
              title: "Company",
              links: ["About", "Team", "Careers", "News"],
            },
            {
              title: "Products",
              links: ["PhotoAI", "VideoGen", "AudioMix", "TextCraft"],
            },
            {
              title: "Resources",
              links: ["Blog", "Documentation", "Support", "Contact"],
            },
          ].map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <motion.li key={linkIdx} whileHover={{ x: 5 }}>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="h-px bg-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} LILIA AI. All rights reserved.
          </motion.p>

          <motion.div
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#" className="text-gray-400 hover:text-red-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              Cookie Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
