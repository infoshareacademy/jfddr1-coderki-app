import React from 'react';
import { AccountInfo } from '../components/AccountInfo';
import { TaskSettings } from '../components/AccountInfo';
import styles from './SettingsPage.module.css';

const SettingsPage = () => (
  <div className={styles.container}>
    <AccountInfo />

    <TaskSettings />
    <p>Main settings:</p>
    <p>About us:</p>
    <p>Privacy policy:</p>
  </div>
);

export default SettingsPage;
