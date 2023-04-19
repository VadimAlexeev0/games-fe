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

	// render data
	return (
		<div className="flex w-screen gap-5 overflow-x-auto lg:w-auto lg:flex-col">
			<Category slug="All Reviews" />
			{categories.map((category) => {
				return <Category key={category.slug} {...category} />
			})}
		</div>
	)
}

export function Category({ slug }) {
	return (
		<div className="min-w-fit rounded-lg border-2 p-1 text-white">
			<span>{slug}</span>
		</div>
	)
}
