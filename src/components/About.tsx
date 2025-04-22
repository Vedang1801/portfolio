import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const About = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-10px 0px"
  })
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
    rootMargin: "-20px 0px"
  })
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-20px 0px"
  })

  // New enhanced animation variants with more dynamic effects
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, rotate: -3 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  return (
    <section id="about" className="section">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="mb-12 motion-element"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">About Me</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -50 }}
          animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.215, 0.61, 0.355, 1],
            staggerChildren: 0.2
          }}
          className="md:col-span-2 motion-element"
        >
          <motion.p 
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="text-text-secondary mb-5 text-lg"
          >
            Hello! I'm <span className="gradient-text font-semibold">Vedang</span>, an MS Computer Science student at 
            Pace University, specializing in Artificial Intelligence. 
            With a strong foundation in software engineering and machine learning, I'm passionate about creating 
            intelligent systems that solve real-world problems.
          </motion.p>
          
          <motion.p 
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="text-text-secondary mb-5"
          >
            My journey in tech began during my Bachelor's in Computer Engineering in Mumbai, where I developed a deep interest 
            in machine learning and AI. Since then, I've worked on diverse projects ranging from personality prediction systems to 
            recipe management applications, always focused on creating efficient and intuitive solutions.
          </motion.p>
          
          <motion.p 
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="text-text-secondary"
          >
            I'm constantly exploring new technologies and methodologies, with particular interests in 
            <span className="text-accent font-medium"> natural language processing</span>, 
            <span className="text-accent font-medium"> deep learning</span>, and 
            <span className="text-accent font-medium"> cloud computing</span>. 
            When I'm not coding, I'm involved in sustainability initiatives and 
            technology community events.
          </motion.p>
        </motion.div>

        <motion.div
          ref={imageRef}
          variants={imageVariants}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.03, rotate: 2, transition: { duration: 0.3 } }}
          className="flex justify-center items-start motion-element"
        >
          <div className="relative w-64 h-64 rounded-xl overflow-hidden">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 z-10"></div>
            <div className="w-full h-full bg-dark-surface flex items-center justify-center">
              <span className="gradient-text text-xl font-bold">VM</span>
            </div>
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-primary to-secondary opacity-50 blur-sm -z-10"></div>
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/20 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
