import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import Register from "./Modal/Register";
import { useLogin } from "../Contexts/LoginContext";

const active = ({ isActive }) => ({
    color: isActive ? "black" : "white",
    textDecoration: "none",
});

function Header() {
    const { isLoggedIn, logout } = useLogin(); 
    const [modal, setModal] = useState("");

    useEffect(() => {
    
        const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
        if (storedLoggedInStatus === "true") {
            isLoggedIn === true;
        }
    }, []);

    return (
        <header className={styles.Header}>
            <h1 className={styles.WebName}>My Website</h1>
            <nav>
                <ul className={styles.Navbar}>
                    <li>
                        <NavLink to="/" style={active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="second" style={active}>
                            Second
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="third" style={active}>
                            Third
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <a
                className={styles.loginbtn}
                onClick={() => {
                    if(isLoggedIn) {
                        logout();
                        console.log(isLoggedIn ? "true" : "false");
                    } else {
                        setModal("login");
                    }
                }}
            >
                <button className="openModal">{isLoggedIn ? "Logout" : "Sign in"}</button>
            </a>
            {modal == "login" && <Modal setModal={setModal} />}
            <a
                className={styles.loginbtn}
                onClick={() => {
                    setModal("register");
                }}
            >
                <button className="openModal">Register</button>
            </a>
            {modal == "register" && <Register setModal={setModal} />}
        </header>
    );
}

export default Header;
