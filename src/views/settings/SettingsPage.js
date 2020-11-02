import React, { useState, useEffect } from 'react';
import { AccountInfo } from './components/AccountInfo';
import { MainSettings } from './components/MainSettings';
import { TaskSettings } from './components/TaskSettings';
import styles from './SettingsPage.module.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

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
  const [settings, setSettings] = useState(initialState);

  const handleSetSettings = (field, value) => {
    // Merge old settings with new value, and set updated state.
    setSettings({
      ...settings,
      [field]: value,
    });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection('settings')
      .onSnapshot((snapshot) => {
        const settings = [];
        snapshot.forEach((doc) => {
          settings.push({
            userName: doc.get('userName') || '',
            familyRole: doc.get('familyRole') || '',
            taskCategory: doc.get('taskCategory') || '',
            taskCategoryColor: doc.get('taskCategoryColor') || '',
            privateOrPublic: doc.get('privateOrPublic') || '',
            emailNotifications: doc.get('emailNotifications') || '',
          });
        });
        setSettings(settings);
      });
  }, []);

  const handleSubmit = () => {
    // make request to firebase
    firebase.firestore().collection('settings').add(setSettings);
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
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default SettingsPage;
