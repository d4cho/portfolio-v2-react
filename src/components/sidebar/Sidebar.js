import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineMail
} from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';

import styles from './Sidebar.module.css';
import logo from '../../assets/images/logo.png';

const Sidebar = () => {
  const [isHomeHover, setIsHomeHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isProjectsHover, setIsProjectsHover] = useState(false);
  const [isContactHover, setIsContactHover] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

  const handleMouseOver = (e) => {
    switch (e.target.id) {
      case 'homeIcon':
        setIsHomeHover(true);
        break;
      case 'aboutIcon':
        setIsAboutHover(true);
        break;
      case 'projectsIcon':
        setIsProjectsHover(true);
        break;
      case 'contactIcon':
        setIsContactHover(true);
        break;
      default:
        return;
    }
  };

  const handleMouseOut = (e) => {
    switch (e.target.id) {
      case 'homeIcon':
        setIsHomeHover(false);
        break;
      case 'aboutIcon':
        setIsAboutHover(false);
        break;
      case 'projectsIcon':
        setIsProjectsHover(false);
        break;
      case 'contactIcon':
        setIsContactHover(false);
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='logo' />
      <div className={styles.iconsContainer}>
        <Link
          className={styles.iconContainer}
          to='home'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={styles.active}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id='homeIcon'>
          {isHomeHover && !isMobile ? (
            'HOME'
          ) : (
            <AiOutlineHome className={styles.icon} />
          )}
        </Link>
        <Link
          className={styles.iconContainer}
          to='about'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={styles.active}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id='aboutIcon'>
          {isAboutHover && !isMobile ? (
            'ABOUT'
          ) : (
            <AiOutlineUser className={styles.icon} />
          )}
        </Link>
        <Link
          className={styles.iconContainer}
          to='projects'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={styles.active}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id='projectsIcon'>
          {isProjectsHover && !isMobile ? (
            'PROJECTS'
          ) : (
            <AiOutlineAppstore className={styles.icon} />
          )}
        </Link>
        <Link
          className={styles.iconContainer}
          to='contact'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={styles.active}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id='contactIcon'>
          {isContactHover && !isMobile ? (
            'CONTACT'
          ) : (
            <AiOutlineMail className={styles.icon} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
