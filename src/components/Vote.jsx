import React, { useState } from "react"
import * as api from "../api"

export default function Vote({ votes, id }) {
	const [update, setUpdate] = useState(0)
	const [errorMsg, setErrorMsg] = useState()

	const downVote = () => {
		setUpdate((current) => {
			return current - 1
		})
		api.patchReview(id, {
			inc_votes: -1,
		}).catch((err) => {
			setErrorMsg(err.message)
		})
	}

	const upVote = () => {
		setUpdate((current) => {
			return current + 1
		})
		api.patchReview(id, {
			inc_votes: 1,
		}).catch((err) => {
			setErrorMsg(err.message)
		})
	}

	return (
		<div className="grid grid-cols-3 pt-2 text-center">
			<button className="rounded-sm bg-rose-600" onClick={downVote}>
				I hate this -1
			</button>
			<span>
				{votes + update} Votes {errorMsg}
			</span>
			<button className="rounded-sm bg-green-600" onClick={upVote}>
				This is great +1
			</button>
		</div>
	)
}
