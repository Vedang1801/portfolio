import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="research" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">Research</h2>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card hover:transform hover:scale-105 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-white text-xl font-bold">Personality Prediction using Machine Learning and NLP</h3>
          <p className="text-secondary font-mono">August 2023</p>
        </div>
        <p className="text-slate mb-4">
          Researched and developed ML models for personality classification, contributing to a paper published at IEEE - ICCUBEA 2023.
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-slate flex items-center">
            <div className="bg-white p-1 rounded flex items-center justify-center mr-3">
              <img
                src="/logos/ieee-logo.png"
                alt="IEEE Logo"
                className="w-12 h-5"
                style={{ objectFit: 'contain' }}
              />
            </div>
            IEEE Conference Publication
          </div>
          <a 
            href="https://ieeexplore.ieee.org/document/10392087" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:underline flex items-center"
          >
            View Publication <FaExternalLinkAlt className="ml-1" size={12} />
          </a>
        </div>
        <div className="mt-4 pt-4 border-t border-slate/20">
          <p className="text-slateLight text-sm italic">
            A. Mahandule, G. Fiske, V. Malusare, O. Bhambure and R. Shedge, "Personality Prediction Using ML and NLP," 2023
            7th International Conference On Computing, Communication, Control And Automation (ICCUBEA), IEEE.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Research
