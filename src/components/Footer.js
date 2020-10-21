import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.paragraph}>
        Registration to our servise is equivalent with accepting our{' '}
        <a href="#" className={styles.link}>
          Terms of service
        </a>{' '}
        and{' '}
        <a href="#" className={styles.link}>
          Privacy policy
        </a>
        .
      </p>
      <p
        style={{
          padding: '0.5em',
          margin: 5,
          textAlign: 'center',
        }}
      >
        &copy; Coderki App 2020. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
