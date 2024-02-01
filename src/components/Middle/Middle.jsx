import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import PostList from "./PostList";

function Middle() {
	const [posts, setPosts] = useState(null) 

	useEffect(() =>{
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then((result) => {
			setPosts(result.data);
		})
	},[] ) // [] only fires when the component loads
	return (
		<main className="middle">
			{posts ? <PostList posts= {posts}/> : <Loading />}
			<Outlet />
		</main>
	);
}
export default Middle;
