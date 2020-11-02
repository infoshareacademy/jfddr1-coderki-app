import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TasksProvider } from './TasksContext';
import './Firebase/firebase';
import Root from './views/Root/Root';

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <Root />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
