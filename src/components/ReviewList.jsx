import React, { useState, useEffect } from "react"
import * as api from "../api"

export default function ReviewList() {
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		api.fetchReviews().then((data) => {
			setReviews(data.reviews)
		})
	}, [])
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
	)
}
