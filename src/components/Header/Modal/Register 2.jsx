import React, { useState } from 'react';
import styles from '../header.module.css';


export default function Register({ setModal }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async () => {
        const apiUrl = 'https://localhost:7168/User/add';
        const sendbody = {
            userName: username,
            email: email,
            password: password
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendbody) 
            });

            if (response.ok) {
                console.log('Successfully registered');
                setModal(false);
            } else {
                console.error('Failed to register:', response.status);
            }
        } catch (error) {
            console.error('Failed to connect:', error);
        }
    };

    return (
        <>
            <div className={styles.overlay} onClick={() => setModal("")}>
                <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
                    <h2>Register</h2>
                    <p>Username</p>
                    <input type="text" value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                    
                    <p>Email</p>
                    <input type="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                    
                    <p>Password</p>
                    <input type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                    
                    <button onClick={sendData}>Register</button>
                    <button onClick={() => setModal("")}>Close</button>
                </div>
            </div>
        </>
    );
}