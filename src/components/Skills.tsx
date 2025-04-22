import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiTensorflow, SiJavascript, SiCplusplus, SiPostgresql, SiMysql, SiFlask, SiJenkins } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  const skillVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  const categories = [
    {
      name: "Programming & Systems",
      skills: [
        { name: "Python", icon: <FaPython size={24} /> },
        { name: "JavaScript", icon: <SiJavascript size={24} /> },
        { name: "C++", icon: <SiCplusplus size={24} /> },
        { name: "Algorithms & Data Structures", icon: null },
        { name: "Parallel Computing", icon: null }
      ]
    },
    {
      name: "Software Engineering",
      skills: [
        { name: "RESTful APIs", icon: null },
        { name: "Flask", icon: <SiFlask size={24} /> },
        { name: "React", icon: <FaReact size={24} /> },
        { name: "Node.js", icon: <FaNodeJs size={24} /> },
        { name: "Git", icon: <FaGitAlt size={24} /> },
        { name: "GitHub", icon: <FaGithub size={24} /> },
        { name: "Jenkins", icon: <SiJenkins size={24} /> },
        { name: "JIRA", icon: null }
      ]
    },
    {
      name: "Data & ML",
      skills: [
        { name: "Scikit-learn", icon: null },
        { name: "TensorFlow", icon: <SiTensorflow size={24} /> },
        { name: "XGBoost", icon: null },
        { name: "CatBoost", icon: null },
        { name: "Pandas", icon: null },
        { name: "NumPy", icon: null },
        { name: "SQL (MySQL, PostgreSQL)", icon: null }
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "AWS S3", icon: <FaAws size={24} /> },
        { name: "CI/CD", icon: null },
        { name: "Web Application Architecture", icon: null }
      ]
    }
  ]

  return (
    <section id="skills" className="section section-alt py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="mb-12 motion-element"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">Skills</h2>
        </div>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            className="card hover:bg-dark-surface/30"
          >
            <h3 className="text-xl font-bold gradient-text mb-6">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  className="flex items-center space-x-3"
                >
                  {skill.icon ? (
                    <span className="text-accent">
                      {skill.icon}
                    </span>
                  ) : (
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                  )}
                  <span className="text-text-primary text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
