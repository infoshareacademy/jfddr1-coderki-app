import React, { useState, useContext, useEffect } from 'react';
import { AccountInfo } from './components/AccountInfo';
import { MainSettings } from './components/MainSettings';
import { TaskSettings } from './components/TaskSettings';
import styles from './SettingsPage.module.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { TasksContext } from '../../TasksContext';

const initialState = {
  userName: '',
  familyRole: '',
  // selectedFile: '',
  taskCategory: '',
  taskCategoryColor: '',
  privateOrPublic: '',
  emailNotifications: '',
  // localtimezone??
  // MondaySunday??
  // ChangePassword??
  // Logout??
};

const SettingsPage = () => {
  const { userUid, settingsData } = useContext(TasksContext);
  const [settings, setSettings] = useState(initialState);
  // console.log('settingsForm', settings);

  useEffect(() => {
    if (!settingsData) {
      return;
    }
    setSettings(settingsData);
  }, [settingsData]);

  const handleSetSettings = (field, value) => {
    // Merge old settings with new value, and set updated state.
    setSettings({
      ...settings,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    // make request to firebase
    firebase.firestore().collection('users').doc(userUid).set(settings);
  };

  return (
    <div className={styles.container}>
      <AccountInfo
        userName={settings.userName}
        setSettings={handleSetSettings}
        familyRole={settings.familyRole}
        // selectedFile={settings.selectedFile}
      />
      <TaskSettings
        taskCategory={settings.taskCategory}
        setSettings={handleSetSettings}
        taskCategoryColor={settings.taskCategoryColor}
      />
      <MainSettings
        privateOrPublic={settings.privateOrPublic}
        setSettings={handleSetSettings}
        emailNotifications={settings.emailNotifications}
      />
      <button className={styles.saveBtn} onClick={handleSubmit}>
        Save settings
      </button>
    </div>
  );
};

export default SettingsPage;
