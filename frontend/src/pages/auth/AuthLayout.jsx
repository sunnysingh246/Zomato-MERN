import { Link } from 'react-router-dom'
import ThemeToggle from '../../components/ThemeToggle'

const AuthLayout = ({ children, role, mode, title, description }) => {
  const basePath = role === 'user' ? '/user' : '/food-partner'
  const roleLabel = role === 'user' ? 'Customer' : 'Food partner'
  const isRegister = mode === 'register'

  return (
    <main className="auth-shell">
      <div className="theme-header">
        <Link className="auth-brand" to="/">zomato</Link>
        <ThemeToggle />
      </div>

      <section className="auth-panel">
        <div className="auth-card">
          <div className="auth-heading">
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
            <span>Use a different account</span>
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