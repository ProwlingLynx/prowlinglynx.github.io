import styles from './NavBar.module.css';
import { useRef } from 'react';

export const NavBar = () => {
  const menuRef = useRef(null);
  const menuHandler = (e) => {
    e.preventDefault();
    const target = menuRef.current;
    if (target.style.display === 'flex') {
      target.style.display = 'none';
    } else {
      target.style.display = 'flex';
    }
  };
  const handlClose = (e) => {
    e.preventDefault();
    menuRef.current.style.display = 'none';
  };
  return (
    <header className={`${styles.topnav} flex-row`}>
      <a href='#home' className={`${styles.active}`}>
        JT's Lair
      </a>
      <button className={`${styles.icon}`} onClick={menuHandler}>
        =
      </button>
      <nav className={`${styles.myNavs} flex-column`} ref={menuRef}>
        <a className={`${styles.menuItems}`} href='#contact' onClick={handlClose}>
          Contact Me
        </a>
        <a className={`${styles.menuItems}`} href='#projects' onClick={handlClose}>
          Projects
        </a>
      </nav>
    </header>
  );
};
