import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from '../../utils/scroll'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Close menu after navigation
  }

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
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
      </div>
    </header>
  )
}
