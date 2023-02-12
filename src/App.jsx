import { Route, Routes } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { ThemeContext } from './context/ThemeContext'

import Navbar from './components/_commun/_Navbar'
import Home from './components/home/_Home'
import Profile from './components/profile/_Profile'
import Messages from './components/messages/_Messages'
import Login from './components/auth/_Login'
import Register from './components/auth/_Register'

function App() {
  const { isAuth, isLoading } = useContext(AuthContext)
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div className={`${isDarkTheme ? 'dark ' : ''} `}>
      <Navbar />
      {isLoading ? null : isAuth ? (
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
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
