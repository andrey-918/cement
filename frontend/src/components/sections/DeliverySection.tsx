import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'

const DeliverySection: React.FC = () => {
  return (
    <motion.section
      id="delivery"
      className="section delivery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Схема доставки</motion.h2>
        <motion.ol variants={itemVariants}>
          <motion.li variants={itemVariants}><strong>Погрузка в Иране:</strong> Порт Бендер-Энзели или Амирабад.</motion.li>
          <motion.li variants={itemVariants}><strong>Морской переход:</strong> Сухогрузы типа Handysize (10–20 тыс. тонн).</motion.li>
          <motion.li variants={itemVariants}><strong>Разгрузка в Астрахани:</strong> Глубина порта — до 6 м, подходит для река-море судов.</motion.li>
        </motion.ol>
        <motion.div className="map" variants={itemVariants}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae48a92ad14955ecbf03f695498c5f561803c2df031f93176d5b7cc0044e2a032&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default DeliverySection
