import { Outlet } from "react-router-dom";

function Middle() {
	return (
		<main className="middle">
			<p>MiddleComponent</p>
			<Outlet />
		</main>
	);
}
export default Middle;
