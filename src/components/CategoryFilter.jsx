import React, { useState, useEffect } from "react"
import useSWR from "swr"
import * as api from "../api"

export default function CategoryFilter() {
	const {
		data: { categories },
		error,
		isLoading,
	} = useSWR("/categories", api.fetcher)

	if (error) return <div>failed to load</div>
	if (isLoading) return <div>loading...</div>

	console.log(categories)
	// render data
	return (
		<>
			<Category slug="All Reviews" />
			{categories.map((category) => {
				return <Category {...category} />
			})}
		</>
	)
}

export function Category({ slug }) {
	return (
		<div className="w-2/3 border-4">
			<span>{slug}</span>
		</div>
	)
}
