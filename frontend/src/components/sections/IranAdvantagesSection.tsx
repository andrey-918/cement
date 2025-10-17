import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'

const IranAdvantagesSection: React.FC = () => {
  return (
    <motion.section
      id="iran-advantages"
      className="section iran-advantages"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Преимущества поставок из Ирана</motion.h2>
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}>
            <strong>Выгодная цена:</strong> Иранский цемент дешевле аналогов из Турции или Китая. По качеству лучше большинства российских производств.
          </motion.li>
          <motion.li variants={itemVariants}><strong>Качество:</strong> Соответствие ГОСТ (марки ПЦ-500).</motion.li>
          <motion.li variants={itemVariants}><strong>Логистика:</strong> Короткий маршрут через Каспийское море (7–10 дней).</motion.li>
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default IranAdvantagesSection
