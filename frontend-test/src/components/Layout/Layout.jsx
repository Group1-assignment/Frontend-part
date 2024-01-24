import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Left from "../Left/Left";
import Right from "../Right/Right";
import Middle from "../Middle/Middle";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div>
			<Header />
			<Left />
			<Outlet />
			<Right />
			<Footer />
		</div>
	);
}
