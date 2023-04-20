import React, { useEffect, useState } from "react"
import * as api from "../api"

export default function Comments({ id }) {
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		api.fetchComments(id).then((data) => {
			setComments(data.comments)
			setLoading(false)
		})
	}, [])
	console.log(comments)

	if (loading) return null

	return (
		<div className="p-5">
			<h1>Comments:</h1>
			{comments.map(({ comment_id, body, author, created_at, votes }) => (
				<div key={comment_id}>
					<span>{body}</span>
				</div>
			))}
		</div>
	)
}
