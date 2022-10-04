import styles from "./Bio.module.css";

export const Bio = () => {
  return (
    <div className={styles.bio}>
      <h2>Bio</h2>
      <article>
        <p>I am an easy going fellow who enjoys gaming and having a fun time. At work I strive to make sure everyone comes out a winner. Even when the going gets tough.</p>
        <p>I enjoy a good fireside chat and meeting new people, so reach out and say hello. We might even become good friends.</p>
      </article>
    </div>
  );
};