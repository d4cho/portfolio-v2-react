import React from 'react';
import styles from './DescriptionCard.module.css';

const DescriptionCard = (props) => {
  return (
    <div className={styles.descriptionContainer}>
      <h1 style={{ color: '#08fdd8' }}>{props.title}</h1>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <p>{props.purpose}</p>
      <p>
        Check out{' '}
        <a href={props.link} target='_blank' style={{ color: '#08fdd8' }}>
          this project
        </a>
        .
      </p>
    </div>
  );
};

export default DescriptionCard;
