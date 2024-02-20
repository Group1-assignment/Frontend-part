import React, { useState } from 'react';
import axios from 'axios';
import styles from './post.module.css';
import { useLogin } from '../Contexts/LoginContext';

export default function NewPost() {
  const { isLoggedIn } = useLogin();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:7168/api/Post/add',
        {
          title,
          content,
          author,
          datetime: new Date().toISOString(),
        }
      );
      

      console.log('Post added successfully:', response.data);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className={styles.card}>
      {isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button type="submit">Add Post</button>
        </form>
      )}
    </div>
  );
}
