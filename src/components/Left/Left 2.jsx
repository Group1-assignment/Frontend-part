import { NavLink } from "react-router-dom";
import SearchBar from "./Search/SearchBar";
import { useState } from "react";
import SerchResultsList from "./Search/SerchResultsList";


function Left() {

	const [results, setResults] = useState([])

	return (
		<aside className="left">
			<SearchBar setResults={setResults}/>
			<SerchResultsList results={results}/>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => ({
								color: isActive ? "black" : "#485F73",
								textDecoration: "none",
							})}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="second"
							style={({ isActive }) => ({
								color: isActive ? "black" : "#485F73",
								textDecoration: "none",
							})}
						>
							Second
						</NavLink>
					</li>
					<li>
						<NavLink
							to="third"
							style={({ isActive }) => ({
								color: isActive ? "black" : "#485F73",
								textDecoration: "none",
							})}
						>
							Third
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Left;
