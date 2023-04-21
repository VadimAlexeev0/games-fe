import axios from "axios"

const api = axios.create({
	baseURL: "https://games-backend-db47.onrender.com/api",
})

export const fetchCategories = () =>
	api.get("/categories").then((res) => res.data)

export const fetchReviews = () => api.get("/reviews").then((res) => res.data)

export const fetchReview = (reviewID) =>
	api.get(`/reviews/${reviewID}`).then((res) => res.data)

export const fetchComments = (reviewID) =>
	api.get(`/reviews/${reviewID}/comments`).then((res) => res.data)
