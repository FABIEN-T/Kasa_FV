import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import LodgingSheet from './pages/LodgingSheet'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lodging-sheet/:id" element={<LodgingSheet />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
