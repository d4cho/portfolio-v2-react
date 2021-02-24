import React, { useState } from 'react';

import styles from './Contact.module.css';
import Form from './sections/Form';
import Notification from './sections/Notification';

const Contact = () => {
  const [notificationStatus, setNotificationStatus] = useState('');
  const handleNotification = (status) => {
    setNotificationStatus(status);
  };

  return (
    <section className={styles.container} id='contact'>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className='Text-animated'>C</span>
          <span className='Text-animated'>o</span>
          <span className='Text-animated'>n</span>
          <span className='Text-animated'>t</span>
          <span className='Text-animated'>a</span>
          <span className='Text-animated'>c</span>
          <span className='Text-animated'>t</span>
          <span className='Text-animated'>&nbsp;</span>
          <span className='Text-animated'>m</span>
          <span className='Text-animated'>e</span>
        </div>
        <p className={styles.blurb}>
          Feel free to{' '}
          <a href='mailto:danielcho91@gmail.com' style={{ color: '#08fdd8' }}>
            email me
          </a>
          . If you have other requests or questions, don't hesitate to contact
          me using the form below.
        </p>
        <Form refreshFunction={handleNotification} />
      </div>
      <div className={styles.notificationContainer}>
        <Notification status={notificationStatus} />
      </div>
    </section>
  );
};

export default Contact;
