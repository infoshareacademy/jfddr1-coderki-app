import React from 'react';
import { AccountInfo } from '../../components/AccountInfo';
import { TaskSettings } from '../../components/AccountInfo';
import { MainSettings } from '../../components/AccountInfo';
import styles from './SettingsPage.module.css';

const SettingsPage = () => (
  <div className={styles.container}>
    <AccountInfo />
    <TaskSettings />
    <MainSettings />
  </div>
);

export default SettingsPage;
