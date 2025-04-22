import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: {
        ease: [0.35, 0, 0.65, 1],
        duration: 0.3
      }
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-surface/80 nav-shadow py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/" className="text-2xl font-bold gradient-text">
            VM
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex space-x-8"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, i) => (
            <motion.div 
              key={link.name}
              variants={linkVariants}
            >
              <Link href={link.href} className="text-text-secondary hover:text-primary transition-all duration-300">
                <span className="text-accent mr-1 font-mono text-sm">{i + 1}.</span> {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={linkVariants}
          >
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button text-sm rounded-lg"
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
              }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-accent focus:outline-none p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-3/4 bg-dark-surface/95 backdrop-blur-lg p-6 md:hidden flex flex-col border-l border-light-surface/20"
          >
            <div className="flex justify-end">
              <motion.button 
                onClick={() => setIsOpen(false)} 
                className="text-accent mb-8 p-2"
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={24} />
              </motion.button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.08,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)} 
                    className="text-text-secondary hover:text-primary transition-all duration-300 text-lg flex items-center"
                  >
                    <span className="text-accent mr-3 font-mono">{i + 1}.</span> {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: navLinks.length * 0.08,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="pt-4 mt-4 border-t border-light-surface/20"
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button w-full justify-center inline-flex"
                >
                  Resume
                </a>
              </motion.div>
            </nav>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-auto text-center text-xs text-text-secondary font-mono"
            >
              <p>vedangnitin.malusare@siden.edu</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
