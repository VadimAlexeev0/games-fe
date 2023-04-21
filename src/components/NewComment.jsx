import React from "react"
import * as api from "../api"
export default function NewComment() {
	return (
		<div className="flex items-center justify-center gap-4 rounded-md bg-stone-600 p-4 text-3xl">
			<label htmlFor="comment">Comment:</label>
			<input
				name="comment"
				type="text"
				className="grow rounded-md p-3 text-black"
			/>
			<button className="rounded-md bg-indigo-400 p-3">Post</button>
		</div>
	)
}
