import React, { useState } from 'react';
import { AccountInfo } from './components/AccountInfo';
import { MainSettings } from './components/MainSettings';
import { TaskSettings } from './components/TaskSettings';
import styles from './SettingsPage.module.css';

const initialState = {
  userName: '',
  familyRole: '',
  selectedFile: '',
  taskCategory: '',
  taskCategoryColour: '',
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

  const handleSubmit = () => {
    // make request to firebase
    console.log('settings:', settings);
  };

  return (
    <div className={styles.container}>
      <AccountInfo
        userName={settings.userName}
        setSettings={handleSetSettings}
        familyRole={settings.familyRole}
        selectedFile={settings.selectedFile}
      />
      <TaskSettings
        taskCategory={settings.taskCategory}
        setSettings={handleSetSettings}
        taskCategoryColour={settings.taskCategoryColour}
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
