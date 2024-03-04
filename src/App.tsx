import OhHell from './Pages/OhHell'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<OhHell />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
