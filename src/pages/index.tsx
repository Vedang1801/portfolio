import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Research from '@/components/Research'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import AnimationFallback from '../components/AnimationFallback'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add fonts preload
    const fontPreloads = [
      { href: '/fonts/Outfit-Variable.woff2', type: 'font/woff2' },
      { href: '/fonts/JetBrainsMono-Variable.woff2', type: 'font/woff2' }
    ];

    fontPreloads.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = 'font';
      link.type = font.type;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Simulating loading time for the 3D elements
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const loaderVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8 }
    }
  }

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  }

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={loaderVariants}
            className="flex items-center justify-center h-screen"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl gradient-text font-bold"
              >
                VM
              </motion.div>
              <motion.div 
                className="absolute -inset-4 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-md opacity-50"></div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial="initial"
            animate="animate"
            variants={contentVariants}
          >
            <AnimationFallback />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Research />
            <Education />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
