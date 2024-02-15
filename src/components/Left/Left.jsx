import { NavLink } from "react-router-dom";
import SearchBar from "./Search/SearchBar";
import { useState } from "react";
import SerchResultsList from "./Search/SerchResultsList";
import Sidebar from "./Sidebar/Sidebar";



function Left() {

	const [results, setResults] = useState([])
	

	return (
		<aside className="left">
			<div>
			
			<SearchBar setResults={setResults}/>
			<SerchResultsList results={results}/>
			<Sidebar/>
			</div>
			
		</aside>
	);
}

export default Left;
