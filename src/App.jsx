import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LodgingSheet from './pages/LodgingSheet'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging-sheet" element={<LodgingSheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
