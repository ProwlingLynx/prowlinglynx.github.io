import styles from './NavBar.module.css';
export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Contact Me</h2>
      <h2>Projects</h2>
    </nav>
  );
};