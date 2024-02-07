import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { Outlet } from "react-router-dom";



const active = ({ isActive }) => ({
	color: isActive ? "black" : "white",
	textDecoration: "none",
});

function Header() {
	return (
		<header>
			
			<h1 className={styles.head}>My Website</h1>
			<nav>
				<ul>
					<li>
						<NavLink to="/" style={active}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="second" style={active}>
							Second
						</NavLink>
					</li>
					<li>
						<NavLink to="third" style={active}>
							Third
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
		
	);
}
export default Header;
