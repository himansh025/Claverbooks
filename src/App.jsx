import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Component/Header'
import Hero from './Component/Hero';
import Features from './Component/Features';
import Testimonials from './Component/Testimonials';
import Integrations from './Component/Integrations';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Features />
      <Testimonials />
      <Integrations />
      <Contact />
      <Footer />
    </>
  )
}

export default App
