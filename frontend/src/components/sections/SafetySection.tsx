import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'

const SafetySection: React.FC = () => {
  return (
    <motion.section
      id="safety"
      className="section safety"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Безопасность и гарантии</motion.h2>
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}><strong>Страхование груза:</strong> Allianz, Ingosstrakh.</motion.li>
          <motion.li variants={itemVariants}><strong>Мониторинг:</strong> GPS-трекинг судов в реальном времени.</motion.li>
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default SafetySection
