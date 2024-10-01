import React from "react";
import styles from "../styles/Button&Formulario.module.css";

function ButtonClick() {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return (
    <div>
      <button className={styles.btn} onClick={handleClick}>
        Click aquí
      </button>
    </div>
  );
}

export default ButtonClick;
