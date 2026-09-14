import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = ({ children, role, mode, title, description }) => {
  const [isLightTheme, setIsLightTheme] = useState(() => localStorage.getItem('zomato-theme') === 'light')
  const basePath = role === 'user' ? '/user' : '/food-partner'
  const roleLabel = role === 'user' ? 'Customer' : 'Food partner'
  const isRegister = mode === 'register'

  useEffect(() => {
    const theme = isLightTheme ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    localStorage.setItem('zomato-theme', theme)
  }, [isLightTheme])

  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <div className="auth-card">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
            onClick={() => setIsLightTheme((currentTheme) => !currentTheme)}
          >
            {isLightTheme ? 'Dark' : 'Light'} mode
          </button>

          <div className="auth-heading">
            <span className="mobile-brand">zomato</span>
            <p className="form-kicker">{roleLabel}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          {children}

          <p className="auth-switch">
            {isRegister ? 'Already have an account?' : 'New to zomato?'}{' '}
            <Link to={`${basePath}/${isRegister ? 'login' : 'register'}`}>
              {isRegister ? 'Sign in' : 'Create an account'}
            </Link>
          </p>

          <div className="role-switch">
            <span>Register as</span>
            <div className="role-links">
              <Link to="/user/register">Normal user</Link>
              <Link to="/food-partner/register">Food partner</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AuthLayout