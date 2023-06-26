import React from "react";
import styles from './AddOns.module.css'
import { dataAddons } from "../../assets/data";

const AddOns: React.FC = () => {

  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ul className={styles.list}>
      {
        dataAddons.map((d) => (
          <li className={styles.container} onClick={handleToggle}>
          <div className={styles.group}>
            <input type="checkbox" className={styles.input} id='additional-option' checked={isChecked}/>
            <div className={styles.checkbox}/>
          </div>
          <div className={styles.info}>
            <p className={styles.option}>{d.name}</p>
            <p className={styles.caption}>{d.caption}</p>
          </div>
          <p className={styles.price}>{d.price}</p>
        </li>
        ))
      }
    </ul>
  )
}

export default AddOns;