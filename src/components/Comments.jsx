import React, { useEffect, useState } from "react"
import * as api from "../api"
import formatRelative from "date-fns/formatRelative"
import NewComment from "./NewComment"

export default function Comments({ id }) {
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(true)

	const [createComment, setCreateComment] = useState(false)

	useEffect(() => {
		api.fetchComments(id).then((data) => {
			setComments(data.comments)
			setLoading(false)
		})
	}, [])

	if (loading) return <h1 className="text-center text-lg">Loading....</h1>

	return (
		<div className="p-5">
			<div className="flex justify-between object-center pb-5 ">
				<h1 className="text-2xl font-bold">Comments:</h1>
				<button
					onClick={() => {
						setCreateComment(true)
					}}
					className="rounded-md bg-indigo-400 px-4"
				>
					Create New
				</button>
			</div>
			{createComment ? (
				<NewComment id={id} setComments={setComments} />
			) : null}
			{comments.length === 0 ? (
				<h1>Nothing here :-(</h1>
			) : (
				comments.map(
					({ comment_id, body, author, created_at, votes }) => (
						<div
							key={comment_id}
							className="m-3 grid grid-cols-1 gap-2 border-b-2 text-center lg:grid-cols-3 lg:p-6"
						>
							<span className="font-semibold">{author}:</span>
							<span>{body}</span>
							<span className="font-semibold">
								Created:{" "}
								{formatRelative(
									new Date(),
									new Date(created_at)
								)}
							</span>
						</div>
					)
				)
			)}
		</div>
	)
}
