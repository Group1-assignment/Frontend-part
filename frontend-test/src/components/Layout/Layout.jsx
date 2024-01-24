import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Left from "../Left/Left";
import Right from "../Right/Right";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div>
			<Header />
			<div className="content">
				<Left />
				<div className="middle">
					<Outlet />
				</div>
				<Right />
			</div>
			<Footer />
		</div>
	);
}
