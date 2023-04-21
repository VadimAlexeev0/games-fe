import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import * as api from "../api"
import Comments from "../components/Comments"
import Vote from "../components/Vote"
import formatRelative from "date-fns/formatRelative"

export default function Review() {
	const { review_id } = useParams()

	const [reviewData, setReviewData] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		api.fetchReview(review_id).then(({ review }) => {
			setReviewData(review)
			setLoading(false)
		})
	}, [review_id])

	if (loading)
		return (
			<h1 className="grid h-screen place-items-center text-3xl lg:h-full">
				Loading...
			</h1>
		)

	const {
		title,
		category,
		designer,
		owner,
		review_body,
		review_img_url,
		created_at,
		votes,
	} = reviewData

	return (
		<>
			<div className="flex flex-col-reverse p-5 lg:flex-row">
				<div className="pr-5 lg:w-3/4">
					<Link to="/">
						<span>&lt; Back</span>
					</Link>
					<pre className="pt-5">{category}</pre>
					<h1 className=" text-3xl font-bold">{title}</h1>
					<p className="pt-3 text-lg">{review_body}</p>
				</div>
				<div className="grow">
					<img
						src={review_img_url}
						alt={`Display Image for ${title} by ${designer}`}
						className="aspect-auto rounded-xl"
					/>
					<p>
						Created at:{" "}
						{formatRelative(new Date(created_at), new Date())}
					</p>
					<p>Owner: {owner}</p>
					<Vote id={review_id} votes={votes} />
				</div>
			</div>
			<Comments id={review_id} />
		</>
	)
}
