import React, { useState, useEffect } from "react"
import * as api from "../api"

export default function UserSwitcher() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [selectedUser, setSelected] = useState({
		username: "tickle122",
		name: "Tom Tickle",
		avatar_url:
			"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
	})

	useEffect(() => {
		api.fetchUsers().then(({ users }) => {
			setUsers(users)
			setLoading(false)
		})
	}, [])

	return (
		<>
			<div className="w-full self-end text-white">
				{loading ? (
					<span>Loading....</span>
				) : (
					<User {...selectedUser} />
				)}
			</div>
		</>
	)
}
function User({ name, username, avatar_url }) {
	return (
		<div className="flex justify-evenly rounded-lg border-2 p-2">
			<img
				src={avatar_url}
				alt={`${name}'s Avatar`}
				className="aspect-square w-9 rounded-full"
			/>
			<h1 className="text-lg font-semibold">{name}</h1>
		</div>
	)
}
