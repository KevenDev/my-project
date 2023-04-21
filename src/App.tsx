import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import './App.css'
import SharedLayout from './assets/layouts/SharedLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/history' element={<History/>}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
