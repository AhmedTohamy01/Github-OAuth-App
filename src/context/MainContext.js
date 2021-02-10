import { createContext, useState } from 'react'

const hasCode = window.location.href.includes('?code=')
if (hasCode) {
  localStorage.setItem('isLoggedIn', 'true')
}
const localStorageValue = localStorage.getItem('isLoggedIn')

export const MainContext = createContext([{}, () => {}])

export const MainContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorageValue)
  const [profileData, setProfileData] = useState(
    JSON.parse(localStorage.getItem('profileData')) || ' '
  )

  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profileData,
        setProfileData,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
