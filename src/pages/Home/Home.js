import React from 'react';
import { Link } from 'react-scroll';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container} id='home'>
      <div className={styles.content}>
        <div className={styles.greeting}>
          <span className={styles.greetingChild}>
            <span>H</span>
            <span className={styles.textAnimated}>i</span>
            <span className={styles.textAnimated}>,</span>
          </span>
          <span className={styles.greetingChild}>
            <span className={styles.textAnimated}>I</span>
            <span className={styles.textAnimated}>'</span>
            <span className={styles.textAnimated}>m</span>
            <span className={styles.textAnimated}>&nbsp;</span>
            <span className={styles.textAnimated}>D</span>
            <span className={styles.textAnimated}>a</span>
            <span className={styles.textAnimated}>n</span>
            <span className={styles.textAnimated}>i</span>
            <span className={styles.textAnimated}>e</span>
            <span className={styles.textAnimated}>l</span>
            <span className={styles.textAnimated}>,</span>
          </span>
          <span className={styles.greetingChild}>
            <span className={styles.textAnimated}>w</span>
            <span className={styles.textAnimated}>e</span>
            <span className={styles.textAnimated}>b</span>
            <span className={styles.textAnimated}>&nbsp;</span>
            <span className={styles.textAnimated}>d</span>
            <span className={styles.textAnimated}>e</span>
            <span className={styles.textAnimated}>v</span>
            <span className={styles.textAnimated}>e</span>
            <span className={styles.textAnimated}>l</span>
            <span className={styles.textAnimated}>o</span>
            <span className={styles.textAnimated}>p</span>
            <span className={styles.textAnimated}>e</span>
            <span className={styles.textAnimated}>r</span>
            <span className={styles.textAnimated}>.</span>
          </span>
        </div>
        <br />
        <div className='Title'>React Developer / Full Stack</div>
        <br />
        <br />
        <Link
          style={{ textDecoration: 'none' }}
          to='contact'
          smooth={true}
          duration={1000}>
          <div className='Contact'>Contact me!</div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
