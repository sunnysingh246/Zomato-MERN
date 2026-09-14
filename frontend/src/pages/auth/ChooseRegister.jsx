import { Link } from 'react-router-dom'

const ChooseRegister = () => {
  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <div className="auth-card role-choice-card">
          <div className="auth-heading">
            <span className="mobile-brand">zomato</span>
            <p className="form-kicker">Get started</p>
            <h2>Join zomato</h2>
            <p>Choose how you want to use the platform.</p>
          </div>
          <div className="role-choice-links">
            <Link to="/user/register">Create a customer account</Link>
            <Link to="/food-partner/register">Register as a food partner</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ChooseRegister