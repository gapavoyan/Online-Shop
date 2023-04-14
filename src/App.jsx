import Header from './header'
import Home from './home'
import Basket from './basket'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/home' element={<Home/>} />
            <Route path='/basket' element={<Basket/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
