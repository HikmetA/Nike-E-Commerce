import React from 'react'
import { Hero, Sales, FlexContent, Stories, Footer, Navbar } from './components'
import Cart from './components/Cart'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js'
import "./index.css";

const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App