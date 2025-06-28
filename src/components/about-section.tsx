"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Passionate full-stack developer with a strong foundation in modern web technologies. I specialize in
                creating scalable applications with clean, maintainable code and exceptional user experiences. My
                approach combines technical expertise with creative problem-solving to deliver solutions that make a
                real impact.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I thrive in collaborative environments and enjoy working with cross-functional teams to bring innovative
                ideas to life. Always eager to learn new technologies and stay current with industry best practices.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span>🎯 Problem Solver</span>
                <span>🤝 Team Collaborator</span>
                <span>⚡ Performance Focused</span>
                <span>📚 Continuous Learner</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
