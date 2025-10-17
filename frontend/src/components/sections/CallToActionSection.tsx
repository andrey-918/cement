import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'
import { scrollToSection } from '../../utils/scroll'

const CallToActionSection: React.FC = () => {
  return (
    <motion.section
      id="call-to-action"
      className="section call-to-action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h3 variants={itemVariants}>Готовы к сотрудничеству?</motion.h3>
        <motion.p variants={itemVariants}>
          Начните свой проект уже сегодня! Первая поставка — через 25 дней.
        </motion.p>
        <motion.button
          className="cta-button"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contacts')}
        >
          Связаться с нами
        </motion.button>
      </div>
    </motion.section>
  )
}

export default CallToActionSection
