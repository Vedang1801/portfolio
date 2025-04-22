import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { random } from 'maath'

const StarField = (props: any) => {
  const ref = useRef<THREE.Points>(null!)
  const sphere = random.inSphere(new Float32Array(6000), { radius: 1.8 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 20
    ref.current.rotation.z -= delta / 30
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#8a7fff" // Updated color to match new theme
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 1.2
      }
    },
    hover: { 
      y: -3, // Reduced from -5 to -3 for subtler effect
      transition: {
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="font-mono text-accent mb-2"
          >
            Hi, my name is
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold text-text-primary mb-4"
          >
            <span className="gradient-text">Vedang Malusare.</span>
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-6xl font-bold text-text-secondary mb-6"
          >
            I build intelligent systems.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-text-secondary max-w-xl text-lg mb-10"
          >
            I'm a computer science professional specializing in 
            <span className="text-accent"> artificial intelligence</span>, 
            <span className="text-accent"> machine learning</span>, and 
            <span className="text-accent"> software engineering</span>. 
            Currently pursuing my MS in Computer Science 
            at Pace University with a focus on AI.
          </motion.p>
          
          <motion.div
            variants={buttonVariants}
            className="flex gap-5"
          >
            <motion.a
              href="#projects"
              className="button"
              whileHover="hover"
              initial={false} // Add this to prevent initial animation interference
            >
              Check out my work
            </motion.a>
            <motion.a
              href="#contact"
              className="button-outline"
              whileHover="hover"
              initial={false} // Add this to prevent initial animation interference
            >
              Contact me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mouse scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.8,
          ease: [0.215, 0.61, 0.355, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-7 h-12 border-2 border-accent/50 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-accent rounded-full"
            animate={{ y: [0, 13, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="text-accent/60 text-xs mt-2 font-mono">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
