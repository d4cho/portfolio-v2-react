import React from 'react';
import { Link } from 'react-scroll';

import styles from './Button.module.css';

const Button = (props) => {
  const { linkTo, text } = props;

  return (
    <Link className={styles.button} to={linkTo} smooth={true} duration={1000}>
      {text}
    </Link>
  );
};

export default Button;
