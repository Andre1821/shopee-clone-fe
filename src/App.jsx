import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Cart from './component/Cart'
import { useEffect } from 'react'
import RegisterAdmin from './component/RegisterAdmin'
import PageStore from './component/PageStore'


function App() {
  const data = JSON.parse(localStorage.getItem("Data")) || {}
  const token = data.token
  const navigate = useNavigate()
  const location = useLocation()

  const setLastPage = () => {
    if (location.pathname !== "/login" && token) {
      localStorage.setItem("last-page", location.pathname)
    }
  }

  const redirectPage = () => {
    if (token && location.pathname === "/login") {
      navigate(localStorage.getItem("last-page"))
    }
    if (token && location.pathname === "/pageStore") {
      navigate('/')
    }
  }

  useEffect(() => {
    redirectPage()
    setLastPage()
  }, [location])

  return (
    <>
      <Routes>
        <Route index path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registerAdmin' element={<RegisterAdmin />} />
        {token ? (
          <>
            <Route path='/cart' element={<Cart />} />
            {data.role === "ROLE_ADMIN" ? (
              <Route path='/pageStore' element={<PageStore />} />
            ) : (
              null
            )}
          </>
        ) : (
          <Route path='/login' element={<Login />} />
        )}
      </Routes>
    </>
  )
}

export default App
