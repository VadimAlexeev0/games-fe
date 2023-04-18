import CategoryFilter from "../components/CategoryFilter"

export default function Navbar() {
	return (
		<aside className="flex w-48 flex-col items-center justify-start gap-5">
			<h1 className="text-center text-4xl">
				NC
				<br />
				Games
			</h1>
			<CategoryFilter />
		</aside>
	)
}
