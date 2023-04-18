import axios from "axios"
const api = axios.create({
	baseURL: "https://games-backend-db47.onrender.com/api",
})

export const fetcher = (url) => api.get(url).then((res) => res.data)
