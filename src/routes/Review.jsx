import React from "react"
import { useParams } from "react-router-dom"

export default function Review() {
	const { review_id } = useParams()
	return <div>Review {review_id}</div>
}
