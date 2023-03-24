import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={`flex-row ${styles.footer}`}>
      <nav className={`flex-row ${styles.footerNav}`}>
        <button>Contact Me!</button>
        <button>Back to the top</button>
      </nav>
    </footer>
  );
};
