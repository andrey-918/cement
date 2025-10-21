import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'
import boatInPort1Image from '../images/boat-in-port-1.webp'
import boatInPort2Image from '../images/boat-in-port-2.jpeg'
import boatInPort3Image from '../images/boat-in-port-3.jpg'
import boatInPort4Image from '../images/boat-in-port-4.jpg'

const TechnicalSection: React.FC = () => {
  return (
    <motion.section
      id="technical"
      className="section technical"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Технические детали</motion.h2>
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}><strong>Суда:</strong> Трюмные сухогрузы (навал или биг-бэги).</motion.li>
          <motion.li variants={itemVariants}><strong>Грузоподъемность:</strong> 3 000–25 000 тонн за рейс.</motion.li>
          <motion.li variants={itemVariants}><strong>Таможня:</strong> Упрощенное оформление через Каспийский экономический коридор.</motion.li>
        </motion.ul>
        <motion.div className="cement-images" variants={itemVariants}>
          <motion.img
            src={boatInPort1Image}
            alt="Сухогруз с цементом в порту Астрахани"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={boatInPort2Image}
            alt="Сухогруз с цементом в порту Астрахани"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={boatInPort3Image}
            alt="Сухогруз с цементом в порту Астрахани"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={boatInPort4Image}
            alt="Сухогруз с цементом в порту Астрахани"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TechnicalSection
