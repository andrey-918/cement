import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'

const FinancialSection: React.FC = () => {
  return (
    <motion.section
      id="financial"
      className="section financial"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Финансовая эффективность</motion.h2>
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}>
            <strong>Стоимость цемента в порту Астрахани:</strong> от 7 000 руб с НДС 20% за тонну (дешевле, чем ж/д и фурами).
          </motion.li>
          <motion.li variants={itemVariants}><strong>Налоги:</strong> Льготы по соглашению Иран-ЕАЭС.</motion.li>
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default FinancialSection
