import React from "react";
import styles from './ThirdPage.module.css'

const ThirdPage: React.FC = () => {

  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ul className={styles.list}>
      <li className={styles.container} onClick={handleToggle}>
        <div className={styles.group}>
          <input type="checkbox" className={styles.input} id='additional-option' checked={isChecked}/>
          <div className={styles.checkbox}/>
        </div>
        <div className={styles.info}>
          <p className={styles.option}>Online service</p>
          <p className={styles.caption}>Access to multiple services</p>
        </div>
        <p className={styles.price}>+1$/mo</p>
      </li>
      <li className={styles.container}>
        <div className={styles.group}>
          <input type="checkbox" className={styles.input} id='additional-option' />
          <div className={styles.checkbox} />
        </div>
        <div className={styles.info}>
          <p className={styles.option}>Larger storage</p>
          <p className={styles.caption}>Extra 1TB of cloud service</p>
        </div>
        <p className={styles.price}>+2$/mo</p>
      </li>
      <li className={styles.container}>
        <div className={styles.group}>
          <input type="checkbox" className={styles.input} id='additional-option' />
          <div className={styles.checkbox} />
        </div>
        <div className={styles.info}>
          <p className={styles.option}>Customizable profile</p>
          <p className={styles.caption}>Custom theme on your profile</p>
        </div>
        <p className={styles.price}>+2$/mo</p>
      </li>
    </ul>
  )
}

export default ThirdPage;