import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Left from "../Left/Left";

import Middle from "../Middle/Middle";
import Right from "../Right/Right";

export default function Layout() {
	return (
		<div>
			<Header />
			<div className="content">
				<Left /> 
				<Middle />
				<Right />
			</div>
			<Footer />
		</div>
	);
}
