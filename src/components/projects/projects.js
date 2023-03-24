import styles from './projects.module.css';
import { Card } from './projectCard.js';

export const Projects = () => {
  return (
    <section className={`${styles.projectsBody} flex-column`}>
      <h2>My Projects</h2>
      <div className={`${styles.cardContainer} flex-row`}>
        <span className={`${styles.navigateCard}`}>{'<'}</span>
        <Card />
        <span className={`${styles.navigateCard}`}>{'>'}</span>
      </div>
    </section>
  );
};
