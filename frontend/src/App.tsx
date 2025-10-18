import Home from './pages/Home.tsx'
import { Footer } from './components/layout/Footer.tsx'
import { Header } from './components/layout/Header.tsx'

import './styles/style.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/navigation.css'
import './styles/mobile.css'



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App