import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true)
  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>
}
