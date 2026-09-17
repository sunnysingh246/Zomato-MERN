import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateFoodPartner = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', description: '' })
  const [videoFile, setVideoFile] = useState(null)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')

    if (!videoFile) {
      setMessage('Please choose a video file before posting.')
      return
    }

    const payload = new FormData()
    payload.append('name', form.name)
    payload.append('description', form.description)
    payload.append('video', videoFile)

    setIsSubmitting(true)

    try {
      await axios.post('http://localhost:3000/api/food', payload, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      navigate('/')
    } catch (error) {
      setMessage(error.response?.data?.message || 'Unable to upload food. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <div className="auth-card">
          <div className="auth-heading">
            <span className="mobile-brand">zomato</span>
            <p className="form-kicker">Food partner</p>
            <h2>Create a food listing</h2>
            <p>Upload a short food video to feature on the home feed.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Food name
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Crispy Paneer Bowl" required />
            </label>

            <label>
              Description
              <textarea name="description" value={form.description} onChange={handleChange} rows="4" placeholder="Tell customers what makes this dish special" required />
            </label>

            <label>
              Food video
              <input type="file" accept="video/*" onChange={(event) => setVideoFile(event.target.files[0])} required />
            </label>

            {message && <p className="auth-message" role="alert">{message}</p>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Uploading...' : 'Post food video'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default CreateFoodPartner
