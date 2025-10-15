import React from 'react'
import { motion } from 'framer-motion'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // высота навигации + отступ
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    // Плавная анимация с easing
    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    const duration = 1000 // 1 секунда
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

export const Header: React.FC = () => {
  const navItems = [
    { id: 'intro', label: 'Главная' },
    { id: 'advantages', label: 'Преимущества' },
    { id: 'route', label: 'Маршрут' },
    { id: 'iran-advantages', label: 'Иран' },
    { id: 'delivery', label: 'Доставка' },
    { id: 'technical', label: 'Техника' },
    { id: 'financial', label: 'Финансы' },
    { id: 'safety', label: 'Безопасность' },
    { id: 'contacts', label: 'Контакты' }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Поставка цемента из Ирана в Россию
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Элитные решения для строительной отрасли
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="premium-badge"
        >
          <span>СМ Групп</span>
        </motion.div>
      </div>
    </header>
  )
}
