import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../components/ThemeToggle'
import './Home.css'

const Home = () => {
	const [foodItems, setFoodItems] = useState([])
	const [message, setMessage] = useState('')
	const videoRefs = useRef(new Map())

	useEffect(() => {
		const fetchFoodItems = async () => {
			try {
				const response = await axios.get('http://localhost:3000/api/food', {
					withCredentials: true
				})
				setFoodItems(response.data.foodItems || [])
			} catch (error) {
				setMessage(error.response?.data?.message || 'Sign in to discover food videos.')
			}
		}

		fetchFoodItems()
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.play().catch(() => {})
				} else {
					entry.target.pause()
				}
			})
		}, { threshold: 0.7 })

		videoRefs.current.forEach((video) => observer.observe(video))

		return () => observer.disconnect()
	}, [foodItems])

	const setVideoRef = (foodId, video) => {
		if (video) {
			videoRefs.current.set(foodId, video)
		} else {
			videoRefs.current.delete(foodId)
		}
	}

	return (
		<main className="reels-page">
			<header className="reels-header">
				<Link className="reels-brand" to="/">zomato</Link>
				<div className="reels-actions">
					<ThemeToggle />
					<Link className="reels-account" to="/user/login">Sign in</Link>
				</div>
			</header>

			{message && (
				<section className="reels-message">
					<p>{message}</p>
					<Link to="/user/login">Sign in to continue</Link>
				</section>
			)}

			{!message && foodItems.length === 0 && (
				<p className="reels-empty">No food videos available yet.</p>
			)}

			<section className="reels-feed" aria-label="Food videos">
				{foodItems.map((food) => (
					<article className="reel" key={food._id}>
						<video
							ref={(video) => setVideoRef(food._id, video)}
							className="reel-video"
							src={food.video}
							muted
							loop
							playsInline
							preload="metadata"
							aria-label={food.name}
						/>
						<div className="reel-shade" />
						<div className="reel-content">
							<div className="reel-copy">
								<p className="reel-name">{food.name}</p>
								<p className="reel-description">{food.description || 'Discover something delicious from this local food partner.'}</p>
							</div>
							<button className="visit-store" type="button">Visit store</button>
						</div>
					</article>
				))}
			</section>
		</main>
	)
}

export default Home
