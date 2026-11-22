import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoPeak}></span>
            <span className={styles.logoText}>КОСМОС</span>
          </Link>
        </div>

        <div className={styles.links}>
          <Link to="/galaxies">Галактики</Link>
          <Link to="/planets">Планеты</Link>
          <Link to="/practice">Практика</Link>
          <Link to="/task1">Задание 1</Link>
          <Link to="/task2">Задание 2</Link>
        </div>

        <div className={styles.copy}>
          <p>© 2026 Космический гид.</p>
          <p>Учебный проект.</p>
        </div>

      </div>
    </footer>
  );
};