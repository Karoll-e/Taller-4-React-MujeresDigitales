import React from "react";
import styles from "../styles/Button&Formulario.module.css";

function Resultado({ numero }) {
  return (
    <div>
      <p className={styles.resultado}>Número ingresado: {numero}</p>
    </div>
  );
}

export default Resultado;
