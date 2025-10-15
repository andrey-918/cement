import React, { useState } from 'react'
import { motion, easeOut, easeInOut } from 'framer-motion'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // высота навигации + отступ
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    // Плавная анимация с easing
    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    const duration = 400 // 1 секунда
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      // Easing функция для плавности
      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }
}

const Home: React.FC = () => {
  const [isContactsExpanded, setIsContactsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  }

  return (
    <main className="main-content">
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
              src="include/cement/boat-in-ocean-1.jpeg"
              alt="Корабль в море"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="include/cement/boat-in-ocean-2.jpg"
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
              src="include/cement/boat-in-port-1.webp"
              alt="Сухогруз с цементом в порту Астрахани"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="include/cement/boat-in-port-2.jpeg"
              alt="Сухогруз с цементом в порту Астрахани"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="include/cement/boat-in-port-3.jpg"
              alt="Сухогруз с цементом в порту Астрахани"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="include/cement/boat-in-port-4.jpg"
              alt="Сухогруз с цементом в порту Астрахани"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

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
              <p><strong>Тел.:</strong> 8 (916) 888-19-48</p>
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
                <p><strong>Тел.:</strong><br />
                  8 (495) 960-50-00</p>
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
                  setTimeout(() => {
                    const scrollToSection = (sectionId: string) => {
                      const element = document.getElementById(sectionId)
                      if (element) {
                        const offset = 80 // высота навигации + отступ
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - offset

                        // Плавная анимация с easing
                        const startPosition = window.pageYOffset
                        const distance = offsetPosition - startPosition
                        const duration = 400 // 1 секунда
                        let startTime: number | null = null

                        const animation = (currentTime: number) => {
                          if (startTime === null) startTime = currentTime
                          const timeElapsed = currentTime - startTime
                          const progress = Math.min(timeElapsed / duration, 1)

                          // Easing функция для плавности
                          const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
                          const easedProgress = easeInOutCubic(progress)

                          window.scrollTo(0, startPosition + distance * easedProgress)

                          if (progress < 1) {
                            requestAnimationFrame(animation)
                          }
                        }

                        requestAnimationFrame(animation)
                      }
                    }
                    scrollToSection('contacts')
                  }, 10);
                }
              }}
              className="expand-button"
            >
              {isContactsExpanded ? 'Показать меньше' : 'Показать больше'}
            </button>
          </div>
        </div>
      </motion.section>

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
              src="include/cement/cement-white-1.jpeg"
              alt="Цемент в белых мешках в порту"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="include/cement/cement-white-2.jpeg"
              alt="Цемент в белых мешках в порту"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="include/cement/cement-white-3.jpeg"
              alt="Цемент в белых мешках в порту"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="call-to-action"
        className="section call-to-action"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h3 variants={itemVariants}>Готовы к сотрудничеству?</motion.h3>
          <motion.p variants={itemVariants}>
            Начните свой проект уже сегодня! Первая поставка — через 25 дней.
          </motion.p>
          <motion.button
            className="cta-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contacts')}
          >
            Связаться с нами
          </motion.button>
        </div>
      </motion.section>
    </main>
  )
}

export default Home
