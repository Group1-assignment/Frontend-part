import React, { useState } from 'react';
import styles from './post.module.css';
import { useLogin } from '../Contexts/LoginContext';

export default function NewPost() {
    const { isLoggedIn } = useLogin();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async () => {
        const apiUrl = 'https://localhost:7168/Post/add'
        const sendbody = {
            title: title,
            content: content,
            author: author,
            datetime: new Date().toString()
        }
        try {
            const response = await fetch(apiUrl, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendbody)
            });

            console.log('Post added successfully:', response.status);
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className={styles.card}>
            {isLoggedIn && (
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter Title'type="text" value={title} onChange={(e) => 
                    setTitle(e.target.value)} />

                <textarea placeholder ='Type in your content'value={content} onChange={(e) =>
                     setContent(e.target.value)} />

                <input placeholder='author name soon to be connected to login' type="text" value={author} 
                onChange={(e) => setAuthor(e.target.value)} />
                
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}


