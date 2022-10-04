import HeadPic from "./HeadPic.jpg";
import styles from "./Bio.module.css";

export const Bio = () => {
  return (
    <div className={styles.bio}>
      <article>
        <h1>Hi! Welcome to my portfolio.</h1>
        <p>My name is Javier Tamez.</p>
        <p>I am a full stack web developer that specializes in creating Typescript and Javascript based solutions. My skill set is always expanding so feel free to reach out even if your needs extend beyond the Javascript ecosystem.</p>
        <button>Get in touch</button>
      </article>
      <img src={HeadPic} alt="Javier Tamez" />
    </div>
  );
};