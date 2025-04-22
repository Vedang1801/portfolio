import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  return (
    <footer className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/50 to-transparent -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-8 mb-6">
            <motion.a 
              href="https://github.com/Vedang1801" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-all duration-300"
              whileHover={socialVariants.hover}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/vedang-malusare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-all duration-300"
              whileHover={socialVariants.hover}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:vedangnitin.malusare@siden.edu"
              className="text-text-secondary hover:text-accent transition-all duration-300"
              whileHover={socialVariants.hover}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>
          <div className="relative">
            <p className="text-text-secondary text-sm mb-2">
              Designed & Built by Vedang Malusare
            </p>
            <div className="h-px w-36 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent my-3"></div>
            <p className="text-text-secondary/60 text-xs">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          
          <motion.div 
            className="mt-6 text-xs text-text-secondary/40 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span>Built with React, Next.js, Framer Motion & Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
