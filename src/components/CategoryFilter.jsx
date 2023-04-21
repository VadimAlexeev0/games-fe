import React, { useState, useEffect } from "react"
import { fetchCategories } from "../api.js"

export default function CategoryFilter() {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetchCategories().then((data) => {
			setCategories(data.categories)
			setLoading(false)
		})
	}, [])

	// render data
	return (
		<div className="flex w-screen gap-5 overflow-x-auto lg:w-auto lg:flex-col">
			<Category slug="All Reviews" />
			{loading ? (
				<span className="text-white">Loading...</span>
			) : (
				categories.map((category) => {
					return <Category key={category.slug} {...category} />
				})
			)}
		</div>
	)
}

export function Category({ slug }) {
	return (
		<div className="min-w-fit rounded-lg border-2 p-1 text-center text-white">
			<span>{slug}</span>
		</div>
	)
}
