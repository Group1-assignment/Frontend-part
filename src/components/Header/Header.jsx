import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import Register from "./Modal/Register";



const active = ({ isActive }) => ({
	color: isActive ? "black" : "white",
	textDecoration: "none",
});

function Header() {
	useEffect(() => {

		fetch("https://localhost:7168/api/post")
			.then((response) => {
				if (response.ok) {
					return response.json();
				} console.log(response)
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(`%c ${error}`, 'color: orange;');
			})
	}, [])
	const [modal, setModal] = useState("")
	

	return (
		<header className={styles.Header}>

			<h1 className={styles.WebName}>My Website</h1>
			<nav >
				<ul className={styles.Navbar}>
					<li>

						<NavLink to="/" style={active}>
							Home
						</NavLink>

					</li>
					<li >
						<NavLink to="second" style={active}>
							Second
						</NavLink>
					</li>
					<li >
						<NavLink to="third" style={active}>
							Third
						</NavLink>
					</li>
				</ul>

			</nav>
			<a className={styles.loginbtn}
			onClick={() => {
						setModal("login")
					}}>
				<button
					className="openModal"
					
				>
					sign in</button></a>
			{modal == "login" && <Modal setModal={setModal} />}
			
			<a className={styles.loginbtn}
			onClick={() => {
						setModal("register");
					}}>
				<button
					className="openModal"
					
				>
					Register</button></a>
			{modal == "register" && <Register setModal={setModal} />}
		</header>


	);
}
export default Header;
