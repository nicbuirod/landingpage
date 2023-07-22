import React from "react";
import styles from "./form.module.scss";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className="container mt-4">
        <form className={styles.form}>
          <div className={styles.form_group}>
            <input
              type="text"
              className={styles.form_control_underline}
              id="name"
              placeholder="Nombre y apellidos"
            />
            <input
              type="text"
              className={styles.form_control_underline}
              id="email"
              placeholder="Email"
            />
            <input
              type="text"
              className={styles.form_control_underline}
              id="company"
              placeholder="Empresa/Organismo"
            />
            <input
              type="text"
              className={styles.form_control_underline}
              id="country"
              placeholder="País"
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="text"
              className={styles.form_control_underline}
              id="phone"
              placeholder="Teléfono"
            />
            <div className={styles.message_container}>
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                className={styles.text_area}
                id="mensaje"
                rows="4"
              ></textarea>
            </div>
            <div className={styles.container_button}>
              <button type="submit" className={styles.submit}>
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
