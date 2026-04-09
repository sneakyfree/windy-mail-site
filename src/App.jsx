import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TwoModes from './components/TwoModes'
import Webmail from './components/Webmail'
import GmailComparison from './components/GmailComparison'
import TrustReputation from './components/TrustReputation'
import ForDevelopers from './components/ForDevelopers'
import Pricing from './components/Pricing'
import Ecosystem from './components/Ecosystem'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-windy-darker text-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <TwoModes />
      <Webmail />
      <GmailComparison />
      <TrustReputation />
      <ForDevelopers />
      <Pricing />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
