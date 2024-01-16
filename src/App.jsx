import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Cart from './component/Cart'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
