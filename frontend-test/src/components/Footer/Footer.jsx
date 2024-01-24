import styles from './footer.module.css';
function Footer(){

    return(
        <footer className={styles.footer}>
            <ul>
                <li className={styles.li}>About</li>
                <li>Contact</li>
                <li>Stuff</li>
            </ul>
        </footer>
    );
}

export default Footer