import React from 'react';
import styles from './App.module.css';
import FirstPage from '../FirstPage/FirstPage';
import Constructor from '../Constructor/Constructor';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.page}>
        <Sidebar />
        <Constructor />
      </div>
    </div>
  );
}

export default App;
