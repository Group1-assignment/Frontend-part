import styles from './footer.module.css';
function Footer(){

    return(
        <>
        <header className={styles.header} >
            <p >hej hej hej </p>

        </header>
        <footer className={styles.footer}>
            <ul>
                <li className={styles.li}>About</li>
                <li>Contact</li>
                <li>Stuff</li>
            </ul>
        </footer>
        </>
    );
}

export default Footer