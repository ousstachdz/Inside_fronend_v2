import React, { createContext, useEffect, useState } from 'react'
import Coockies from 'js-cookie'
import axios from '../api/axios'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const checkTocken = async () => {
    let token = Coockies.get('refresh')
    if (token) {
      await axios
        .post('api/token/verify/', { token })
        .then((response) => {
          setIsAuth(true)
        })
        .catch((error) => {
          setIsAuth(false)
          Coockies.remove('refresh', { path: '/' })
        })
    }
    setIsLoading(false)
  }
  useEffect(() => {
    checkTocken()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
