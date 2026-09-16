import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'

const FoodPartnerRegister = () => {
	const navigate = useNavigate()
	const [form, setForm] = useState({ name: '', businessName: '', contactNumber: '', businessAddress: '', email: '', password: '', confirmPassword: '' })
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
			await axios.post('http://localhost:3000/api/auth/foodPartner/register', {
				name: form.name,
				businessName: form.businessName,
				contactNumber: form.contactNumber,
				businessAddress: form.businessAddress,
				email: form.email,
				password: form.password,
			}, {
				withCredentials: true
			})
			navigate('/create-food')
		} catch (error) {
			setMessage(error.response?.data?.message || 'Unable to create your account. Please try again.')
		}
	}

	return (
		<AuthLayout role="food-partner" mode="register" title="Create your account" description="Join us for your next favourite meal.">
			<form className="auth-form" onSubmit={handleSubmit}>
				<div className="partner-fields">
					<label>
						Your name
						<input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
					</label>
					<label>
						Contact number
						<input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="Phone number" required />
					</label>
					<label className="address-field">
						Business name
						<input type="text" name="businessName" value={form.businessName} onChange={handleChange} placeholder="Restaurant name" required />
					</label>
					<label className="address-field">
						Business address
						<textarea name="businessAddress" value={form.businessAddress} onChange={handleChange} placeholder="Restaurant address" rows="2" required />
					</label>
				</div>
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

export default FoodPartnerRegister