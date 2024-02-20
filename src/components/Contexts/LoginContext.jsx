import React, {createContext, useState, useContext} from 'react'


const LoginContext = createContext()

export const  LoginProvider = ({children})  => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  const logout = () => {
    setIsLoggedIn(false)
  }
return (
  <LoginContext.Provider value={{isLoggedIn, toggleLogin, logout}}>
    {children}
    </LoginContext.Provider>
)
}

export const useLogin = ()  =>  useContext(LoginContext)
