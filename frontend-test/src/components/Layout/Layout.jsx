import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Left from "../Left/Left";
import Right from "../Right/Right";
<<<<<<< Updated upstream:frontend-test/src/components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
=======
import Modal from "../Header/Modal/Modal";
>>>>>>> Stashed changes:src/components/Layout/Layout.jsx

export default function Layout() {
	return (
		<div>
			<Header />
			<Modal/>
			
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
