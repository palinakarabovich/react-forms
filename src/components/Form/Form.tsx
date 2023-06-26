import React from "react";
import styles from './Form.module.css'
import { INITIAL_FORM_STATE } from "../../utils/constants";
import { useAppDispatch } from "../../hooks/useDispatch";
import { saveForm } from "../../redux/slices/formSlice";
import { stepForward } from "../../redux/slices/stepsSlice";
import { formValues } from "../../types/types";

const Form: React.FC = () => {

  const [form, setForm] = React.useState<formValues>(INITIAL_FORM_STATE);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleNextClick = () => {
    dispatch(saveForm(form));
    dispatch(stepForward());
  }

  return (
    <section className={styles.wrapper}>
      <form className={styles.form}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          name="name"
          onChange={handleInputChange}
          value={form.name}
        />
        <label className={styles.label}>Email Address</label>
        <input
          className={styles.input}
          name="email"
          onChange={handleInputChange}
          value={form.email}
        />
        <label className={styles.label}>Phone Number</label>
        <input className={styles.input}
          name="phone"
          onChange={handleInputChange}
          value={form.phone}
        />
      </form>
      <button
        className={styles.button__next}
        onClick={handleNextClick}
      >
        Next step
      </button>
    </section>
  )
}

export default Form;