import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'
import cementWhite1Image from '../images/cement-white-1.jpeg'
import cementWhite2Image from '../images/cement-white-2.jpeg'
import cementWhite3Image from '../images/cement-white-3.jpeg'

const FinalImagesSection: React.FC = () => {
  return (
    <motion.section
      id="final-images"
      className="section final-images"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="cement-images" variants={itemVariants}>
          <motion.img
            src={cementWhite1Image}
            alt="Цемент в белых мешках в порту"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={cementWhite2Image}
            alt="Цемент в белых мешках в порту"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={cementWhite3Image}
            alt="Цемент в белых мешках в порту"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FinalImagesSection
