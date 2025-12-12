import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          &copy; {currentYear} СМ Групп. Все права защищены.
        </motion.p>
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>Телефон: <a href="tel:+74959605000" target="_blank" rel="noopener noreferrer">
            8 (495) 960-50-00
          </a> </p>
          <p>E-mail: <a href="mailto:info@cementiran.ru" target="_blank" rel="noopener noreferrer">
            info@cementiran.ru
          </a> </p>
          <a href="https://www.tk-cm.ru" target="_blank" rel="noopener noreferrer">
            www.tk-cm.ru
          </a>
          <a href="https://www.wall-craft.ru" target="_blank" rel="noopener noreferrer">
            www.wall-craft.ru
          </a>
          <a href="https://www.roommall.ru" target="_blank" rel="noopener noreferrer">
            www.roommall.ru
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
