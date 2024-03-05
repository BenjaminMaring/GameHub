import OhHell from './Pages/OhHell'
import OhHellGameBoard from './Pages/OhHellGameBoard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<OhHell />}/>
          <Route path="/play" element={<OhHellGameBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
