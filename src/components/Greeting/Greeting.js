import styles from './Greeting.module.css';

export const Greeting = () => {
  return (
    <article className={`${styles.greeting}`}>
      <span className={`flex-row ${styles.imageContainer}`}>
        <h1 className={`${styles.greetHeader}`}>Hi and Welcome!</h1>
        <img
          className={`${styles.greetPicture}`}
          src={'https://avatars.githubusercontent.com/u/91586098?v=4'}
          alt='Javier Tamez'
        />
      </span>
      <p>My name is Javier Tamez.</p>
      <p className={`indent-p`}>
        I am a full stack web developer that specializes in creating Typescript and Javascript based
        solutions. My skill set is always expanding so feel free to reach out even if your needs
        extend beyond the Javascript ecosystem.
      </p>
      <button className={`${styles.greetingButton}`}>Get in touch</button>
    </article>
  );
};
