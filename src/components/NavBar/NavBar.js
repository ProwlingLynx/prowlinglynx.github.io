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
  return (
    <header className={`${styles.topnav} flex-row`}>
      <a href='#home' className={`${styles.active}`}>
        JT's Lair
      </a>
      <a className={`${styles.icon}`} onClick={menuHandler}>
        =
      </a>
      <nav className={`${styles.myNavs} flex-column`} ref={menuRef}>
        <a className={`${styles.menuItems}`} href='#contact'>
          Contact Me
        </a>
        <a className={`${styles.menuItems}`} href='#projects'>
          Projects
        </a>
      </nav>
    </header>
  );
};
