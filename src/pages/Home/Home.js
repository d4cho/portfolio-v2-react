import React from 'react';
import { Link } from 'react-scroll';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container} id='home'>
      <div className={styles.content}>
        <div className={styles.greeting}>
          <span className={styles.greetingChild}>
            <span className='Text-animated'>H</span>
            <span className='Text-animated'>i</span>
            <span className='Text-animated'>,</span>
          </span>
          <span className={styles.greetingChild}>
            <span className='Text-animated'>I</span>
            <span className='Text-animated'>'</span>
            <span className='Text-animated'>m</span>
            <span className='Text-animated'>&nbsp;</span>
            <span className='Text-animated'>D</span>
            <span className='Text-animated'>a</span>
            <span className='Text-animated'>n</span>
            <span className='Text-animated'>i</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>l</span>
            <span className='Text-animated'>,</span>
          </span>
          <span className={styles.greetingChild}>
            <span className='Text-animated'>w</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>b</span>
            <span className='Text-animated'>&nbsp;</span>
            <span className='Text-animated'>d</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>v</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>l</span>
            <span className='Text-animated'>o</span>
            <span className='Text-animated'>p</span>
            <span className='Text-animated'>e</span>
            <span className='Text-animated'>r</span>
            <span className='Text-animated'>.</span>
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
