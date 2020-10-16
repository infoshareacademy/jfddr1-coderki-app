import React, { useState } from 'react';
import {
  AccountInfo,
  MainSettings,
  TaskSettings,
} from '../../components/AccountInfo';
import styles from './SettingsPage.module.css';

const initialState = {
  userName: '',
  familyRole: '',
  taskCategory: '',
  // etc.
};

const SettingsPage = () => {
  /**
   * One way to handle this page is to pull the entire state to parent, and
   * only after the user made all necessary settings/changes in children,
   * submit the data from here to firebase. The other approach is to submit the
   * data to firebase immediately after the user changes some setting (or
   * looses focus on input) in children (which should then have their own
   * local state and effect hooks).
   *
   * The solution presented here reflects the first approach. It has, however,
   * one small drawback - a change in any child re-renders the entire parent
   * with all the children included; on the other hand, it is not something
   * we should worry about.
   *
   * So we set global settings state for all the children.
   * */
  const [settings, setSettings] = useState(initialState);

  /**
   * Handler for complex state change. 'Field' will create a dynamic
   * property (computed property syntax feature), while value is just a
   * changed value.
   * */
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
        name={settings.userName}
        setSettings={handleSetSettings}
      />
      {/* etc. */}
      <TaskSettings />
      <MainSettings />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default SettingsPage;
