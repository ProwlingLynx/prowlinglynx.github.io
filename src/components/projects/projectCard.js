import styles from './projects.module.css';
import { useRef } from 'react';

export const Card = () => {
  const cardFrontside = useRef(null);
  const cardBackside = useRef(null);
  const handleFlipToFront = (e) => {
    e.preventDefault();
    cardBackside.current.style.display = 'none';
    cardFrontside.current.style.display = 'flex';
  };
  const handleFlipToBack = (e) => {
    e.preventDefault();
    cardBackside.current.style.display = 'flex';
    cardFrontside.current.style.display = 'none';
  };

  return (
    <article className={`${styles.singleCard} flex-column`}>
      <section
        className={`${styles.cardFront} flex-column`}
        ref={cardFrontside}
        onClick={handleFlipToBack}
      >
        <img src='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg' />
        <h3>My project</h3>
      </section>
      <section className={`${styles.cardBack} flex-column`} ref={cardBackside}>
        <p>
          Its better than it looks!Cillum deserunt adipisicing minim dolor.Proident consectetur
          exercitation nisi voluptate ullamco eu veniam est enim aliquip dolore eu incididunt eu.
          Sit enim eu ex quis. Cillum veniam occaecat sit occaecat culpa nulla consectetur enim
          fugiat est minim adipisicing. Ipsum est sint mollit deserunt nulla aliquip ad voluptate
          aute tempor proident nostrud dolore. Non quis consectetur eiusmod nulla. In deserunt magna
          elit consectetur sunt ullamco occaecat id id anim tempor. Id do nulla Lorem qui nostrud
          consequat ut id.
        </p>
        <nav className={`flex-row ${styles.cardNav}`}>
          <button>git</button>
          <button>livesite</button>
          <button onClick={handleFlipToFront}>flip me!</button>
        </nav>
      </section>
    </article>
  );
};
