import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  // Improved settings with larger threshold and negative margins for earlier triggering
  const [titleRef, titleInView] = useInView({
    triggerOnce: true, // Changed to true so it stays visible once seen
    threshold: 0.1,
    rootMargin: "-50px 0px"
  })

  // Using individual refs for each project to track them separately
  const projectRefs = Array(4).fill(0).map(() => useInView({
    triggerOnce: true, // Ensures animations stay visible once triggered
    threshold: 0.15,
    rootMargin: "-100px 0px" // More negative margin to trigger earlier
  }))

  const containerVariants = {
    hidden: { opacity: 1 }, // Start with container visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 }, // Reduced y offset for subtler animation
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  }

  const projects = [
    {
      title: "Recipe Management System",
      description: "A full-stack web application with a responsive recipe feed and SQL-based user profiles. Deployed AWS S3 for seamless image storage, with real-time front-end rendering of image links to enrich user engagement and interface responsiveness.",
      tech: ["React", "Node.js", "AWS S3", "SQL", "RESTful API"],
      github: "#",
      external: "#",
      image: "/projects/recipe-system.jpg",
      date: "March 2024 – May 2024"
    },
    {
      title: "Personality Prediction Using Machine Learning and NLP",
      description: "Developed a machine learning model using CatBoost with TF-IDF vectorization, achieving 85% accuracy, reducing manual evaluation time. Implemented a questionnaire system based on the MBTI model to classify personality types.",
      tech: ["Python", "CatBoost", "NLP", "TF-IDF", "Streamlit"],
      github: "#",
      external: "#",
      image: "/projects/personality-prediction.jpg",
      date: "July 2022 – March 2023"
    },
    {
      title: "Class Schedule Management System",
      description: "Created a user-friendly web-based application for managing class schedules using machine learning models to reduce schedule conflicts by 20%.",
      tech: ["Python", "ML", "Web Design", "Data Analysis"],
      github: "#",
      external: "#",
      image: "/projects/schedule-system.jpg",
      date: "January 2022 – June 2022"
    },
    {
      title: "Blood Donation Management System",
      description: "Architected a blood donation management system with a team of 4, implementing indexed donor search algorithms and optimizing MySQL query performance for critical medical matching scenarios.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      github: "#",
      external: "#",
      image: "/projects/blood-donation.jpg",
      date: "October 2021 – January 2022"
    }
  ]

  return (
    <section id="projects" className="section py-32">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="mb-16 motion-element"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">Projects</h2>
        </div>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => {
          const [ref, inView] = projectRefs[index];
          
          return (
            <motion.div
              key={project.title}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={projectVariants}
              className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'md:text-right' : ''}`}
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-xl h-64 bg-dark-surface/30 relative overflow-hidden
                                shadow-lg hover:shadow-2xl transition-all duration-500
                                border border-light-surface/30 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  {/* Replace with actual images later */}
                  <div className="absolute inset-0 flex items-center justify-center text-accent">
                    <span className="text-xl font-semibold gradient-text">Project Image</span>
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/50 to-secondary/50 
                                 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 z-[-1]"></div>
                </div>
              </div>

              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="text-accent font-mono text-sm mb-2 opacity-80">{project.date}</div>
                <h3 className="text-text-primary text-2xl font-bold mb-4 gradient-text">{project.title}</h3>
                <div className="card bg-dark-surface/50 hover:bg-dark-surface/70 backdrop-blur-md mb-5 shadow-lg">
                  <p className="text-text-secondary text-sm md:text-base">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-3 mb-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-secondary hover:text-primary"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGithub size={22} />
                  </motion.a>
                  <motion.a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-secondary hover:text-secondary"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaExternalLinkAlt size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  )
}

export default Projects
