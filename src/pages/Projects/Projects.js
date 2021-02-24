import React from 'react';
import workoutPic from '../../assets/images/workout.png';
import twentyFortyEightPic from '../../assets/images/2048.png';
import apex from '../../assets/images/apex.png';
import pocolocopos from '../../assets/images/pocolocopos.png';
import expcon from '../../assets/images/expcon.png';

import styles from './Projects.module.css';
import Tabs from './sections/Tabs';

const IMAGES_AND_INFO = [
  {
    image: expcon,
    title: 'Experience Live Concerts',
    date: 'February 2021',
    description:
      'Front-end project to showcase an app for live concert experiences.',
    purpose: '',
    link: 'https://exp-con-speer.herokuapp.com/'
  },
  {
    image: pocolocopos,
    title: 'POS app (work in progress)',
    date: 'January 2021',
    description:
      'A POS system designed to handle transactions and check inventory for businesses.',
    purpose: '',
    link: 'https://pocoloco-pos.herokuapp.com/'
  },
  {
    image: workoutPic,
    title: 'Workout Social Site',
    date: 'September 2020',
    description:
      'Social media website to share anything workout related; an application to track and analyze workouts.',
    purpose:
      'This is a full-stack application using React, Node, Express, and MongoDB.',
    link: 'https://pure-lowlands-51212.herokuapp.com/'
  },

  {
    image: twentyFortyEightPic,
    title: '2048 Game Clone',
    date: 'May 2020',
    description:
      'Clone of a game called 2048. The goal is to merge like-number tiles together to reach 2048.',
    purpose: 'First use of animations and other npm packages.',
    link: 'https://limitless-earth-37528.herokuapp.com/'
  },
  {
    image: apex,
    title: 'Apex Stats Tracker',
    date: 'January 2021',
    description: 'Vue application using public API to track Apex player stats.',
    purpose:
      'Search Platform: Playstation, Gamertag: ShamR0cks978 to see stats.',
    link: 'https://apex-legend-stats-tracker-vue.herokuapp.com/'
  }
];

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <div className={styles.content}>
        <span className={styles.title}>
          <span className='Text-animated'>M</span>
          <span className='Text-animated'>y</span>
          <span className='Text-animated'>&nbsp;</span>
          <span className='Text-animated'>p</span>
          <span className='Text-animated'>r</span>
          <span className='Text-animated'>o</span>
          <span className='Text-animated'>j</span>
          <span className='Text-animated'>e</span>
          <span className='Text-animated'>c</span>
          <span className='Text-animated'>t</span>
          <span className='Text-animated'>s</span>
        </span>
        <Tabs info={IMAGES_AND_INFO} />
      </div>
    </section>
  );
};

export default Projects;
