import React, { useState } from "react"
import * as api from "../api"
export default function NewComment({ id, setComments }) {
	const [comment, setComment] = useState("")
	const [loading, setLoading] = useState(false)

	const commentSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		api.postComment(id, {
			username: "cooljmessy",
			body: comment,
		})
			.then(({ newComment }) => {
				setComments((current) => {
					return [newComment, ...current]
				})
				setLoading(false)
				setComment("")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="rounded-md bg-stone-600 p-4 text-3xl">
			<form
				onSubmit={commentSubmit}
				className="flex flex-col items-center justify-center gap-4 lg:flex-row"
			>
				<label htmlFor="comment">Comment:</label>
				<input
					disabled={loading}
					id="comment"
					type="text"
					className="grow rounded-md p-3 text-black"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<button className="rounded-md bg-indigo-400 p-3">Post</button>
			</form>
		</div>
	)
}
