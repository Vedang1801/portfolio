import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a backend
    console.log('Form submitted:', formData)
    alert('Thanks for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="section-title">
          <span className="section-line"></span>
          <h2 className="section-title-text">Contact</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-white text-2xl font-bold mb-6">Get In Touch</h3>
          <p className="text-slate mb-8">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-secondary" size={20} />
              <a href="mailto:vedangnitin.malusare@siden.edu" className="text-slate hover:text-secondary transition-colors">
                vedangnitin.malusare@siden.edu
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-secondary" size={20} />
              <a href="tel:+1-516283921" className="text-slate hover:text-secondary transition-colors">
                +1-516283921
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-secondary" size={20} />
              <a 
                href="https://www.linkedin.com/in/vedang-malusare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-secondary transition-colors"
              >
                linkedin.com/in/vedang-malusare
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-secondary" size={20} />
              <a 
                href="https://github.com/Vedang1801" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-secondary transition-colors"
              >
                github.com/Vedang1801
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-slateLight mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-navyLight border border-slate/20 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slateLight mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-navyLight border border-slate/20 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slateLight mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-navyLight border border-slate/20 rounded p-3 text-white focus:border-secondary focus:outline-none transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="border border-secondary text-secondary px-6 py-3 rounded font-medium hover:bg-secondary/10 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
