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
        <div className="flex flex-col items-center text-center">
          {/* Social icons */}
          <div className="flex space-x-8 mb-6">
            <motion.a 
              href="https://github.com/Vedang1801" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-all duration-300"
              whileHover={socialVariants.hover}
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/vedang-malusare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-all duration-300"
              whileHover={socialVariants.hover}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:vedangnitin.malusare@pace.edu"
              className="text-slate hover:text-accent transition-all duration-300"
              whileHover={socialVariants.hover}
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>
          
          {/* Author and copyright information */}
          <div className="flex flex-col items-center">
            <p className="text-slate text-sm mb-2">
              Designed & Built by Vedang Malusare
            </p>
            <div className="h-px w-36 bg-gradient-to-r from-transparent via-primary/30 to-transparent my-3"></div>
            <p className="text-slate/60 text-xs">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
