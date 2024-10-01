import React from "react";
import styles from "../styles/Button&Formulario.module.css";

function Formulario({ onNumeroChange }) {
  const handleChange = (event) => {
    onNumeroChange(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="number"
        onChange={handleChange}
        placeholder="Escribe un número"
      />
    </div>
  );
}

export default Formulario;
