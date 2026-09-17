import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'

const UserRegister = () => {
	const navigate = useNavigate()
	const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
	const [message, setMessage] = useState('')

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setMessage('')

		if (form.password !== form.confirmPassword) {
			setMessage('Passwords do not match.')
			return
		}

		try {
			await axios.post('http://localhost:3000/api/auth/user/register', {
				fullName: form.fullName,
				email: form.email,
				password: form.password,
			}, {
				withCredentials: true
			})
			navigate('/user/login')
		} catch (error) {
			const backendMessage = error.response?.data?.message
			setMessage(backendMessage || 'Unable to create your account. Please try again.')
		}

	}


	return (
		<AuthLayout role="user" mode="register" title="Create your account" description="Join us for your next favourite meal.">
			<form className="auth-form" onSubmit={handleSubmit}>
				<label>
					Full name
					<input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" required />
				</label>
				<label>
					Email address
					<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
				</label>
				<label>
					Password
					<input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />
				</label>
				<label>
					Confirm password
					<input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter your password" required />
				</label>
				{message && <p className="auth-message" role="alert">{message}</p>}
				<button type="submit">Create account</button>
			</form>
		</AuthLayout> 
	)
}

export default UserRegister