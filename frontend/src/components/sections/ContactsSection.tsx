import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animations'
import { scrollToSection } from '../../utils/scroll'

interface ContactsSectionProps {
  isContactsExpanded: boolean
  setIsContactsExpanded: (expanded: boolean) => void
}

const ContactsSection: React.FC<ContactsSectionProps> = ({ isContactsExpanded, setIsContactsExpanded }) => {
  return (
    <motion.section
      id="contacts"
      className="section contacts"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Контакты</motion.h2>
        <div className="contact-info">
          <motion.div className="contact-left" variants={itemVariants}>
            <p><strong>Общество с ограниченной ответственностью «СМ ГРУПП»</strong></p>
            <p><strong>Тел.:</strong> 8 (495) 960-50-00</p>
            <p><strong>Адрес:</strong> 105082, г. Москва, ул. Фридриха Энгельса, дом 75, строение 21</p>
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isContactsExpanded ? 'auto' : 0,
              opacity: isContactsExpanded ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div className="contact-center" variants={itemVariants}>
              <motion.img
                src="include/cement/logo.png"
                alt="Логотип СМ ГРУПП"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <p><strong>Сайты:</strong><br />
                <a href="https://www.tk-cm.ru" target="_blank">www.tk-cm.ru</a><br />
                <a href="https://www.wall-craft.ru" target="_blank">www.wall-craft.ru</a><br />
                <a href="https://www.roommall.ru" target="_blank">www.roommall.ru</a></p>
            </motion.div>
            <motion.div className="contact-right" variants={itemVariants}>
              <p><strong>Юридический адрес:</strong><br />
                127018, г. Москва, Вн. Тер. г. Муниципальный округ Марьина Роща, ул. Полковая, д. 3, стр. 9, Помещ. 31</p>
              <p><strong>Почтовый адрес:</strong><br />
                105082, г. Москва, ул. Фридриха Энгельса, дом 75, строение 21, почтовый ящик №19</p>
              <p><strong>Идентификатор ЭДО КонтурДиадок:</strong><br />
                2BM-9715427862-771501001-202209221123303154947</p>
              <p><strong>Реквизиты:</strong></p>
              <div className="requisites">
                <div>
                  <p><strong>ИНН:</strong> 9715427862</p>
                  <p><strong>КПП:</strong> 771501001</p>
                  <p><strong>ОГРН:</strong> 1227700586520</p>
                </div>
                <div>
                  <p><strong>ОКАТО:</strong> 45280569000</p>
                  <p><strong>ОКПО:</strong> 75172575</p>
                  <p><strong>ОТМО:</strong> 45357000000</p>
                </div>
              </div>
              <p><strong>Банк:</strong> ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ»<br />
                <strong>Р/счет:</strong> 40702810601500149843<br />
                <strong>К/счет:</strong> 30101810745374525104<br />
                <strong>БИК:</strong> 044525104</p>
              <p><strong>Генеральный директор:</strong><br />
                Садков Максим Олегович</p>
            </motion.div>
          </motion.div>
          <button
            onClick={() => {
              const newExpandedState = !isContactsExpanded;
              setIsContactsExpanded(newExpandedState);
              if (!newExpandedState) {
                scrollToSection('contacts')
              }
            }}
            className="expand-button"
          >
            {isContactsExpanded ? 'Показать меньше' : 'Показать больше'}
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactsSection
