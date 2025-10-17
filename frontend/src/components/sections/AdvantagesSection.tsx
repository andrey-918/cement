import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'

const AdvantagesSection: React.FC = () => {
  return (
    <motion.section
      id="advantages"
      className="section advantages"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Наши преимущества</motion.h2>
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}>Быстротвердеющий цемент с <strong>гарантированной прочностью</strong></motion.li>
          <motion.li variants={itemVariants}>Полный пакет <strong>российской сертификации</strong> (пройдены все необходимые испытания)</motion.li>
          <motion.li variants={itemVariants}>Гибкие условия поставок и <strong>долгосрочное сотрудничество</strong></motion.li>
        </motion.ul>
        <motion.p variants={itemVariants}>
          Готовы обсудить ваши потребности и предложить <strong>оптимальные решения</strong> по поставкам. Давайте работать вместе!
        </motion.p>
      </div>
    </motion.section>
  )
}

export default AdvantagesSection
