import React, { useState } from "react";
import styles from "../styles/Button&Formulario.module.css";

function FormularioUsuario() {
  const [nombre, setNombre] = useState("");
  const [nombreMostrado, setNombreMostrado] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombreMostrado(nombre);
    setNombre("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={nombre}
          onChange={handleChange}
          placeholder="Escribe tu nombre"
        />
        <button className={styles.btn} type="submit">
          Enviar
        </button>
      </form>
      {nombreMostrado && <p>Nombre ingresado: {nombreMostrado}</p>}
    </div>
  );
}

export default FormularioUsuario;
