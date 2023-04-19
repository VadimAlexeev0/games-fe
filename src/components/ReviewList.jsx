import React, { useState, useEffect } from "react"
import * as api from "../api"

export default function ReviewList() {
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		api.fetchReviews().then((data) => {
			setReviews(data.reviews)
		})
	}, [])
	console.log(reviews)
	return (
		<div className="grid grid-cols-3 gap-16 p-16">
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
			<img src={review_img_url} alt="temp" className="rounded-xl" />
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
