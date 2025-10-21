import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'
import boatInOcean1Image from '../images/boat-in-ocean-1.jpeg'
import boatInOcean2Image from '../images/boat-in-ocean-2.jpg'

const IntroSection: React.FC = () => {
  return (
    <motion.section
      id="intro"
      className="section intro"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="cement-images" variants={itemVariants}>
          <motion.img
            src={boatInOcean1Image}
            alt="Корабль в море"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={boatInOcean2Image}
            alt="Корабль в море"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.p variants={itemVariants}>
          <strong>ООО «СМ ГРУПП» — официальный представитель Иранского завода PJSC «Bojnurd Cement Company».</strong>
        </motion.p>
        <motion.p variants={itemVariants}>
          Мы предлагаем высококачественный портландцемент типа ЦЕМ 0, класс прочности 42,5Б (аналог М500), соответствующий:
        </motion.p>
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}><strong>ГОСТ 31108-2020</strong></motion.li>
          <motion.li variants={itemVariants}><strong>Европейскому стандарту CEM I 42,5R EN 197-1:2011</strong></motion.li>
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default IntroSection
