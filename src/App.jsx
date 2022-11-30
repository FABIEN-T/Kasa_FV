import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LodgingSheet from './pages/LodgingSheet'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging-sheet" element={<LodgingSheet />} />
          <Route path="/*" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
