import React from 'react';
import styles from './App.module.css';
import Constructor from '../Constructor/Constructor';
import Sidebar from '../Sidebar/Sidebar';
import Checkout from '../Checkout/Checkout';
import { useAppSelector } from '../../hooks/useSelector';

function App() {

  const { step } = useAppSelector((store) => store.steps);

  return (
    <div className={styles.app}>
      <div className={styles.page}>
        <Sidebar />
        {step > 4 ?
          <Checkout />
          :
          <Constructor />
        }
      </div>
    </div>
  );
}

export default App;
