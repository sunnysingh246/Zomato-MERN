import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const authCopy = {
  user: {
    eyebrow: 'For food lovers',
    title: 'Good food, right this way.',
    description: 'Discover local favourites and get every craving delivered.',
  },
  'food-partner': {
    eyebrow: 'For food partners',
    title: 'Your kitchen. More reach.',
    description: 'Grow your restaurant and connect with hungry customers nearby.',
  },
}

const AuthPage = ({ role, mode }) => {
  const [isLightTheme, setIsLightTheme] = useState(() => localStorage.getItem('zomato-theme') === 'light')
  const copy = authCopy[role]
  const isRegister = mode === 'register'
  const basePath = role === 'user' ? '/user' : '/food-partner'
  const roleLabel = role === 'user' ? 'Customer' : 'Food partner'

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
            <h2>{isRegister ? 'Create your account' : 'Welcome back'}</h2>
            <p>{isRegister ? 'Join us for your next favourite meal.' : 'Sign in to continue where you left off.'}</p>
          </div>

          <form className="auth-form">
            {isRegister && role === 'food-partner' && (
              <div className="partner-fields">
                <label>
                  Business name
                  <input type="text" name="businessName" placeholder="Restaurant name" />
                </label>
                <label>
                  Contact number
                  <input type="tel" name="contact" placeholder="Phone number" />
                </label>
                <label className="address-field">
                  Business address
                  <textarea name="address" placeholder="Restaurant address" rows="2" />
                </label>
              </div>
            )}
            {isRegister && (
              <label>
                Full name
                <input type="text" name="name" placeholder="Your name" />
              </label>
            )}
            {isRegister && role === 'user' && (
              <label>
                Delivery address
                <textarea name="address" placeholder="Your delivery address" rows="2" />
              </label>
            )}
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="Enter your password" />
            </label>
            {isRegister && (
              <label>
                Confirm password
                <input type="password" name="confirmPassword" placeholder="Re-enter your password" />
              </label>
            )}
            {!isRegister && <Link className="forgot-link" to={`${basePath}/login`}>Forgot password?</Link>}
            <button type="button">{isRegister ? 'Create account' : 'Sign in'}</button>
          </form>

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

export default AuthPage