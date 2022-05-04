import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.add(theme)
    root.classList.remove(colorTheme)
  }, [theme])

  return [colorTheme, setTheme] as const
}