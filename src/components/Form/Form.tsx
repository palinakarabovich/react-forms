import React from "react";
import styles from './Form.module.css'

const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>Name</label>
      <input className={styles.input}></input>
      <label className={styles.label}>Email Address</label>
      <input className={styles.input}></input>
      <label className={styles.label}>Phone Number</label>
      <input className={styles.input}></input>
    </form>
  )
}

export default Form;