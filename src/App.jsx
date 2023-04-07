import Header from './header'
import Home from './home'
import Basket from './basket'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
