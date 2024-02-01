import React from 'react'
import styles from '../Post/post.module.css'


export default function PostList({posts}) {
  return (
    <div className={styles.card}>
    
    {posts.map((post) => {
     return( <>
        <h2 className={styles.title}>{post.title}</h2>
        <p> {post.body}</p>

        </>)
        console.log(post)
    })}
    <p className={styles.text}>Posts and stuff and fish lorem </p>
</div>
  )
}
