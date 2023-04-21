import React, { useEffect, useState } from "react"
import * as api from "../api"
import formatRelative from "date-fns/formatRelative"

export default function Comments({ id }) {
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		api.fetchComments(id).then((data) => {
			setComments(data.comments)
			setLoading(false)
		})
	}, [])

	if (loading) return <h1 className="text-center text-lg">Loading....</h1>

	return (
		<div className="p-5">
			<h1 className="pb-5 text-2xl font-bold">Comments:</h1>
			{comments.length === 0 ? <h1>Nothing here :-(</h1> : null}
			{comments.map(({ comment_id, body, author, created_at, votes }) => (
				<div
					key={comment_id}
					className="grid grid-cols-1 gap-2 border-b-2 py-3 text-center lg:grid-cols-3 lg:p-3"
				>
					<span className="font-semibold">{author}:</span>
					<span>{body}</span>
					<span className="font-semibold">
						Created:{" "}
						{formatRelative(new Date(), new Date(created_at))}
					</span>
				</div>
			))}
		</div>
	)
}
