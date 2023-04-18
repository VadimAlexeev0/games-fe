import React, { useState } from "react"
import Home from "./routes/Home"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

function App() {
	return (
		<div className="grid min-h-screen grid-cols-[auto_1fr] justify-center gap-6 overflow-hidden bg-stone-900 p-10">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
