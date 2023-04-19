import React, { useState, useEffect } from "react"
import { fetchCategories } from "../api.js"

export default function CategoryFilter() {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetchCategories().then((data) => {
			setCategories(data.categories)
		})
	}, [])

	// if (error) return <div>failed to load</div>
	// if (isLoading) return <div>loading...</div>

	console.log(categories)
	// render data
	return (
		<>
			<Category slug="All Reviews" />
			{categories.map((category) => {
				return <Category key={category.slug} {...category} />
			})}
		</>
	)
}

export function Category({ slug }) {
	return (
		<div className="rounded-lg border-2 p-1 text-white">
			<span>{slug}</span>
		</div>
	)
}
