import CategoryFilter from "../components/CategoryFilter"

export default function Navbar() {
	return (
		<aside className="flex w-screen flex-col items-center justify-start space-y-5 lg:w-auto">
			<h1 className="text-center text-4xl text-white">
				NC
				<br />
				Games
			</h1>
			<CategoryFilter />
		</aside>
	)
}
