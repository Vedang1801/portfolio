import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      school: "Pace University",
      degree: "MS in Computer Science",
      concentration: "Artificial Intelligence",
      duration: "August 2023 - May 2025 (Expected)",
      location: "New York, NY",
      gpa: "3.95",
      logo: "/logos/pace-logo-1.png", 
      courses: [
        "Python Programming", "Artificial Intelligence", "Deep Learning", 
        "Natural Language Processing", "Data Science", "Parallel Computing", 
        "Database Management", "Algorithms & Computing Theory", 
        "Internet Computing", "Cloud Computing"
      ]
    },
    {
      school: "D.Y Patil University, Ramrao Adik Institute Of Technology",
      degree: "Bachelor's in Computer Engineering",
      duration: "August 2019 - May 2023",
      location: "Mumbai, MH",
      gpa: "9.11",
      logo: "/logos/rait-logo.png", 
    }
  ]

  return (
    <section id="education" className="section bg-navy">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">Education</h2>
        </div>
      </motion.div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex"
          >
            <div className="mr-4 mt-1">
              <div className="bg-secondary text-navy p-2 rounded-full">
                <FaGraduationCap size={24} />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-1">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-8 h-8 mr-3 rounded bg-white object-contain border"
                    style={{ maxWidth: 32, maxHeight: 32 }}
                  />
                )}
                <h3 className="text-white text-xl font-bold">{edu.school}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-secondary">{edu.degree}</p>
                {edu.concentration && (
                  <>
                    <span className="text-slate">|</span>
                    <p className="text-slate">Concentration: {edu.concentration}</p>
                  </>
                )}
              </div>
              <p className="text-slate mb-1">{edu.duration}</p>
              <p className="text-slate mb-2">{edu.location}</p>
              <p className="text-slate mb-4">GPA: {edu.gpa}</p>
              
              {edu.courses && (
                <div className="mt-2">
                  <h4 className="text-slateLight font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => (
                      <span key={course} className="bg-navyLight px-3 py-1 rounded text-xs text-slate">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
