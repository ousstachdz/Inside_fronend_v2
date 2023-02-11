import { React, createContext, useState } from 'react'
import Cookies from 'js-cookie'

export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
  const initValue = Cookies.get('theme')
  let coockiesValue = false
  if (initValue == 'dark') {
    coockiesValue = true
  }

  const [isDarkTheme, setDarkTheme] = useState(coockiesValue)

  const setIsDarkTheme = (isDarkTheme) => {
    setDarkTheme(!isDarkTheme)
    if (!isDarkTheme) {
      Cookies.set('theme', 'dark')
    } else {
      Cookies.remove('theme', { path: '/' })
    }
  }
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
