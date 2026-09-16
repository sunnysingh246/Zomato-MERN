import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'

const UserLogin = () => {
	const navigate = useNavigate()
	const [form, setForm] = useState({ email: '', password: '' })
	const [message, setMessage] = useState('')

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setMessage('')

		try {
			await axios.post('http://localhost:3000/api/auth/user/login', form, {
				withCredentials: true
			})
			navigate('/')
		} catch (error) {
			setMessage(error.response?.data?.message || 'Unable to sign in. Please try again.')
		}
	}

	return (
		<AuthLayout role="user" mode="login" title="Welcome back" description="Sign in to continue where you left off.">
			<form className="auth-form" onSubmit={handleSubmit}>
				<label>
					Email address
					<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
				</label>
				<label>
					Password
					<input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />
				</label>
				<Link className="forgot-link" to="/user/login">Forgot password?</Link>
				{message && <p className="auth-message" role="alert">{message}</p>}
				<button type="submit">Sign in</button>
			</form>
		</AuthLayout>
	)
}

export default UserLogin