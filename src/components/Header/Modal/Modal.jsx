import React, { useState } from 'react';
import styles from '../header.module.css';

export default function Modal({ setModal }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginRequest = async () => {
        const apiUrl = 'https://localhost:7168/Login'
        const requestBody = {
            email: username,
            password: password
        }
        
     
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                console.log('Login successful', response.json)
                const data = await response.json()
                console.log(data)
                setModal('')
            } else {
               
                console.error('Login failed:', response.status);
                setError('Invalid username or password. Please try again.')
            }
        } catch (error) {
            console.error('Failed to connect', error);
            setError('Failed to connect to the server.')
        }
    };

    return (
        <>
            <div className={styles.overlay} onClick={() => setModal('')}>
                <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
                    <h2>Sign In</h2>
                    
                    <p>Email</p>
                    <input type="text" value={username}
                     onChange={(e) => setUsername(e.target.value)} />
                   
                    <p>Password</p>
                    <input type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} />

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    
                    <button onClick={() => setModal('')}>Close</button>
                    <button onClick={loginRequest}>Sign In</button>
                </div>
            </div>
        </>
    );
}

