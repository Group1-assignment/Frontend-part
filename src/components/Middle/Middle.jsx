import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import PostList from "./PostList";
import { useLogin } from "../Contexts/LoginContext";
import NewPost from "./Post";

function Middle() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPosts(result.data);
      })
  }, []);



  return (
    <main className="middle">
      <NewPost />
      {posts ? <PostList posts={posts} /> : <Loading />}
    </main>
  );
}

export default Middle;
