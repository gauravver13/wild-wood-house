"use client"
import { createContext, useContext } from 'react'
import type { Theme } from './type'

const ThemeContext = createContext<Theme | undefined>(undefined)

export function ThemeProvider({
  children,
  theme
}: {
  children: React.ReactNode
  theme: Theme
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const theme = useContext(ThemeContext)
  if (!theme) throw new Error('useTheme must be used within ThemeProvider')
  return theme
}
