import React, { useState } from 'react'
import IntroSection from '../components/sections/IntroSection'
import AdvantagesSection from '../components/sections/AdvantagesSection'
import RouteSection from '../components/sections/RouteSection'
import IranAdvantagesSection from '../components/sections/IranAdvantagesSection'
import DeliverySection from '../components/sections/DeliverySection'
import TechnicalSection from '../components/sections/TechnicalSection'
import FinancialSection from '../components/sections/FinancialSection'
import SafetySection from '../components/sections/SafetySection'
import ContactsSection from '../components/sections/ContactsSection'
import FinalImagesSection from '../components/sections/FinalImagesSection'
import CallToActionSection from '../components/sections/CallToActionSection'

const Home: React.FC = () => {
  const [isContactsExpanded, setIsContactsExpanded] = useState(false)

  return (
    <main className="main-content">
      <IntroSection />
      <AdvantagesSection />
      <RouteSection />
      <IranAdvantagesSection />
      <DeliverySection />
      <TechnicalSection />
      <FinancialSection />
      <SafetySection />
      <ContactsSection
        isContactsExpanded={isContactsExpanded}
        setIsContactsExpanded={setIsContactsExpanded}
      />
      <FinalImagesSection />
      <CallToActionSection />
    </main>
  )
}

export default Home
