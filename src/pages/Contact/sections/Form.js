import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import apiKeys from '../../../API_KEYS';
import BarLoader from 'react-spinners/BarLoader';

import styles from './Form.module.css';

const Form = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        event.currentTarget, // need to put event.currentTarget for emailjs to work!
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setIsLoading(false);
          props.refreshFunction('success');
        },
        (error) => {
          setIsLoading(false);
          props.refreshFunction('failed');
        }
      );
  };

  const handleChange = (event) => {
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === 'email') {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === 'subject') {
      setSubject(event.currentTarget.value);
    } else if (event.currentTarget.name === 'message') {
      setMessage(event.currentTarget.value);
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.nameEmailContainer}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            name='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          name='subject'
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.message}
          name='message'
          type='text'
          placeholder='Message'
          value={message}
          onChange={handleChange}
        />
      </div>

      {isLoading ? (
        <div className={styles.loading}>
          <BarLoader height={5} width={180} color={'#08fdd8'} />
        </div>
      ) : (
        <input className={styles.submitButton} type='submit' value='Send' />
      )}
    </form>
  );
};

export default Form;
