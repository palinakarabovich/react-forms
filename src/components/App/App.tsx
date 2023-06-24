import React from 'react';
import styles from './App.module.css';
import Constructor from '../Constructor/Constructor';
import Sidebar from '../Sidebar/Sidebar';
import Checkout from '../Checkout/Checkout';

function App() {

  const [step, setStep] = React.useState<number>(1);

  return (
    <div className={styles.app}>
      <div className={styles.page}>
        <Sidebar step={step} />
        {step > 4 ?
          <Checkout />
          :
          <Constructor setStep={setStep} step={step} />
        }
      </div>
    </div>
  );
}

export default App;
