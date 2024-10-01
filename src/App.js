import React, { useState } from "react";
import ButtonClick from "./components/ButtonClick";
import FormularioUsuario from "./components/FormularioUsuario";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import styles from "./styles/App.module.css";

function App() {
  const [numero, setNumero] = useState("");

  return (
    <div className={styles.appContainer}>
      <h1>Taller N°4 React</h1>

      {/* Sección de manejo de eventos */}
      <div className={styles.section}>
        <h2>Manejo de eventos</h2>
        <ButtonClick />
      </div>

      <div className={styles.section}>
        <h2>Formulario Usuario</h2>
        <FormularioUsuario />
      </div>

      <div className={styles.section}>
        <h2>Lifting State Up</h2>
        <Formulario onNumeroChange={setNumero} />
        <Resultado numero={numero} />
      </div>
    </div>
  );
}

export default App;
