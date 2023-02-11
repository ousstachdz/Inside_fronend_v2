import { Route, Routes } from 'react-router-dom'

import Navbar from './components/_commun/_Navbar'
import Login from './components/auth/_Login'
import Home from './components/home/_Home'
import Register from './components/auth/_Register'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Profile from './components/profile/_Profile'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { isAuth, isLoading } = useContext(AuthContext)
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div className={`${isDarkTheme ? 'dark ' : ''} `}>
      <Navbar />
      {isLoading ? null : isAuth ? (
        <Routes>
          <Route path='/' element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      )}
    </div>
  )
}

export default App
