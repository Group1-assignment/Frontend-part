import React from 'react'
import styles from '../Post/post.module.css'


export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div className={styles.card} key={index}>
          <h2 className={styles.title}>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}