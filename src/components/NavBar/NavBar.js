import styles from './NavBar.module.css';
import { useRef } from 'react';

export const NavBar = () => {
  const menuRef = useRef(null);
  const menuHandler = (e) => {
    e.preventDefault();
    const target = menuRef.current;
    if (target.style.display === 'block') {
      target.style.display = 'none';
    } else {
      target.style.display = 'block';
    }
  };
  return (
    <header className='topnav'>
      <a href='#home' className='active'>
        JT's Lair
      </a>
      <nav id='myNavs' ref={menuRef}>
        <a href='#contact'>Contact Me</a>
        <a href='#projects'>Projects</a>
      </nav>
      <a className={`icon`} onClick={menuHandler}>
        =
      </a>
    </header>
  );
};
