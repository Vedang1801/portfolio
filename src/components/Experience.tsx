import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      company: "Software Development Group (SDG)",
      position: "Intern",
      location: "Ramrao Adik Institute of Technology, Navi-Mumbai, MH",
      duration: "January 2022 – June 2022",
      description: [
        "Created a user-friendly web-based application for managing class schedules using machine learning models to reduce schedule conflicts by 20%.",
        "Gained technical proficiency in Python, Data Analysis, Machine Learning, Web Application Design, and Project Management."
      ]
    },
    {
      company: "Association for Computing Machinery (ACM)",
      position: "Intern",
      location: "Navi-Mumbai, MH",
      duration: "October 2021 – January 2022",
      description: [
        "Architected a blood donation management system with a team of 4, implementing indexed donor search algorithms and optimizing MySQL query performance for critical medical matching scenarios.",
        "Optimized database queries by 15%, reducing load times by 30%.",
        "Applied HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL to build responsive UI components and manage backend logic.",
        "Managed version control workflow with Git and managed project tasks using JIRA for streamlined team collaboration."
      ]
    }
  ]

  return (
    <section id="experience" className="section bg-navy">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">Experience</h2>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/4"
        >
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left min-w-max md:border-b-0 ${
                  activeTab === index 
                    ? 'text-secondary border-secondary md:border-l-2 -ml-px md:pl-5 font-medium' 
                    : 'text-slate hover:text-secondary hover:bg-navyLight'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-3/4"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <h3 className="text-xl text-white font-bold">
                {exp.position} <span className="text-secondary">@ {exp.company}</span>
              </h3>
              <p className="text-slate mb-4 font-mono">{exp.duration}</p>
              <p className="text-slate mb-2">{exp.location}</p>
              <ul className="space-y-4">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="text-slate flex">
                    <span className="text-secondary mr-2">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
