import React, { useState } from 'react';

import styles from './Tabs.module.css';
import ProjectCard from './ProjectCard';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabClickedHandler = (event) => {
    setActiveTab(+event.currentTarget.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div
          onClick={tabClickedHandler}
          id={1}
          style={
            activeTab === 1
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          EXP|CON
        </div>
        <div
          onClick={tabClickedHandler}
          id={2}
          style={
            activeTab === 2
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          POCOLOCO POS
        </div>
        <div
          onClick={tabClickedHandler}
          id={3}
          style={
            activeTab === 3
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          Workout Social App
        </div>
        <div
          onClick={tabClickedHandler}
          id={4}
          style={
            activeTab === 4
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          2048 Game Clone
        </div>
        <div
          onClick={tabClickedHandler}
          id={5}
          style={
            activeTab === 5
              ? { color: 'black', backgroundColor: '#08fdd8' }
              : null
          }>
          Apex Stats Tracker
        </div>
      </div>
      <ProjectCard
        image={props.info[activeTab - 1].image}
        title={props.info[activeTab - 1].title}
        date={props.info[activeTab - 1].date}
        description={props.info[activeTab - 1].description}
        purpose={props.info[activeTab - 1].purpose}
        link={props.info[activeTab - 1].link}
      />
    </div>
  );
};

export default Tabs;
