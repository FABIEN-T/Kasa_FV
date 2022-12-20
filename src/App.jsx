import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LodgingSheet from './pages/LodgingSheet'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging-sheet/:id" element={<LodgingSheet />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
