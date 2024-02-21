import { useState, useEffect } from "react";
import { useLogin } from "../Contexts/LoginContext";
import Chat from "./Chat/Chat";

function Right() {
const {isLoggedIn} = useLogin()

useEffect(() => {
    
	const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
	if (storedLoggedInStatus === "true") {
		isLoggedIn === true;
	}
}, []);
	return <aside className="right">
		{isLoggedIn ? (
			<div>
				<Chat/>
				
			</div>
		) : (
			<div>
				<h2>logg in to use chat</h2>

			</div>
		)}
		


	</aside>;
}
export default Right;
