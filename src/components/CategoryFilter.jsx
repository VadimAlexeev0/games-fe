import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchCategories } from "../api.js"

export default function CategoryFilter() {
	const [categories, setCategories] = useState([])
	let [activeTab, setActiveTab] = useState("All Reviews")

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
			{categories.map((category, i) => {
				return (
					<button
						key={i}
						onClick={() => setActiveTab(i)}
						className={`${
							activeTab === i ? "" : "hover:text-white/60"
						} relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
						style={{
							WebkitTapHighlightColor: "transparent",
						}}
					>
						{activeTab === i && (
							<motion.span
								layoutId="bubble"
								className="absolute inset-0 z-10 bg-white mix-blend-difference"
								style={{ borderRadius: 9999 }}
								transition={{
									type: "spring",
									bounce: 0.2,
									duration: 0.6,
								}}
							/>
						)}
						{category.slug}
					</button>
				)
			})}
		</>
	)
}
