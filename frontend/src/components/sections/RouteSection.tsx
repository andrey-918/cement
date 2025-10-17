import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'

const RouteSection: React.FC = () => {
  return (
    <motion.section
      id="route"
      className="section route"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Маршрут поставки</motion.h2>
        <motion.p variants={itemVariants}>
          <strong>Иран, порт Амирабад → Каспийское море → Порт Астрахань</strong>
        </motion.p>
        <motion.p variants={itemVariants}>
          Морские грузоперевозки цемента: надежный логистический мост между Ираном и Россией.
        </motion.p>
        <motion.div className="cement-images" variants={itemVariants}>
          <motion.img
            src="include/cement/amirabad.webp"
            alt="Сухогруз в порту Амирабад"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="include/cement/boat-in-ocean.webp"
            alt="Сухогруз в Каспийском море"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="include/cement/astrakhan.webp"
            alt="Сухогруз в порту Астрахани"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default RouteSection
