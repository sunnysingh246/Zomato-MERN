import { useEffect, useState } from 'react'

const STORAGE_KEY = 'zomato-theme'

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  if (savedTheme) return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <button
      type="button"
      className={`theme-toggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
    >
      <span className="toggle-track">
        <span className="toggle-thumb">
          {theme === 'dark' ? '☀' : '☾'}
        </span>
      </span>
      <span className="toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
