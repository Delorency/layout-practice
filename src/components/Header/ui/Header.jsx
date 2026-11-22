import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoPeak}></span>
        <span className={styles.logoText}>КОСМОС</span>
      </Link>
      
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Главная</NavLink>
        <NavLink to="/galaxies" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Галактики</NavLink>
        <NavLink to="/planets" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Планеты</NavLink>
        <NavLink to="/practice" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Практика</NavLink>
        <div className={styles.divider}></div>
        <NavLink to="/task1" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Задание 1</NavLink>
        <NavLink to="/task2" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Задание 2</NavLink>
      </nav>
    </header>
  );
};