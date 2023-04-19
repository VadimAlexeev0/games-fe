import React, { useState, useEffect } from "react"
import * as api from "../api"
import { Link } from "react-router-dom"

export default function ReviewList() {
	const [reviews, setReviews] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(true)
		api.fetchReviews().then((data) => {
			setReviews(data.reviews)
			setLoading(false)
		})
	}, [])
	if (loading) {
		return (
			<h1 className="grid h-screen place-items-center text-3xl lg:h-full">
				Loading...
			</h1>
		)
	}
	return (
		<div className="grid grid-cols-1 gap-16 p-3 lg:grid-cols-3 lg:p-16">
			{reviews.map((review) => {
				return <Review key={review.review_id} {...review} />
			})}
		</div>
	)
}

function Review({
	review_id,
	title,
	owner,
	category,
	comment_count,
	designer,
	created_at,
	review_img_url,
	votes,
}) {
	return (
		<Link to={`/review/${review_id}`}>
			<div className="w-full rounded-xl bg-stone-900 shadow-lg">
				<img
					src={review_img_url}
					alt={`Display Image for ${title} by ${designer}`}
					className="rounded-xl"
				/>
				<div className="flex flex-col p-6">
					<h2 className="text-xl font-bold">{title}</h2>
					<span>{designer}</span>
					<span>
						{votes} Votes & {comment_count} Comments
					</span>
				</div>
			</div>
		</Link>
	)
}
