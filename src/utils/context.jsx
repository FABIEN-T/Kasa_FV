import React, { useState, createContext } from 'react'

export const PageSelectedContext = createContext()

export const PageSelectedProvider = ({ children }) => {
  const [pageSelected, setPageSelected] = useState('welcome')
  const togglePageSelected = () => {
    setPageSelected(pageSelected === 'welcome' ? 'welcome' : 'about')
  }

  return (
    <PageSelectedContext.Provider value={{ pageSelected, togglePageSelected }}>
      {children}
    </PageSelectedContext.Provider>
  )
}
