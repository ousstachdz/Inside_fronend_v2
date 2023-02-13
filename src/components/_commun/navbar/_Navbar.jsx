import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  const toggoleTheme = () => {
    setIsDarkTheme(isDarkTheme)
  }

  return (
    <nav className='flex fixed justify-center items-center h-16 w-full  border_thin bg-white dark:bg-gray-800 z-50'>
      <div className='w-10/12 flex justify-between items-center'>
        <p className='text-xl w-28 sm:w-32'>
          <Link to={'/'}>InSide</Link>
        </p>
        <button onClick={toggoleTheme}>
          {isDarkTheme ? (
            <FontAwesomeIcon
              className='  w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className='  w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
              icon={faMoon}
            />
          )}
        </button>
        <NavbarItems />
      </div>
    </nav>
  )
}
