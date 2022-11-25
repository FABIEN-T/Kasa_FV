import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LodgingSheet from './pages/LodgingSheet'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging-sheet" element={<LodgingSheet />} />
      </Routes>
    </div>
  )
}

export default App
