import React from 'react'
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGpt3,
  Header,
} from './containers'
import { CTA, Brand, Navbar } from './components'
import './app.styles.scss'
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
