import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className='Text-animated'>A</span>
          <span className='Text-animated'>b</span>
          <span className='Text-animated'>o</span>
          <span className='Text-animated'>u</span>
          <span className='Text-animated'>t</span>
          <span className='Text-animated'>&nbsp;</span>
          <span className='Text-animated'>m</span>
          <span className='Text-animated'>e</span>
        </div>

        <div className={styles.textContainer}>
          <p>
            Professionally experienced in diverse industries and driven to
            succeed in web development and information technology.
          </p>
          <p>
            Quick self-learner, well-organized person, problem solver with high
            attention to detail. Fan of lifting weights, video games, and
            recently, outdoor camping.
          </p>
          <p>
            Interested in the entire spectrum from frontend to backend and
            working on ambitious projects with positive people.
          </p>

          <div className={styles.githubContainer}>
            <a href='https://github.com/d4cho'>
              <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/danielwc/'>
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
