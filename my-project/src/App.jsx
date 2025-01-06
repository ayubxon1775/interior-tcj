import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Brands from './components/Brands/Brands'
import Services from './components/Services/Services'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Services/>
    </main>
  )
}

export default App