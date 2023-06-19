import { useState, useEffect } from 'react';
import ListadoPacientes from './ListadoPacientes.jsx';
import Formulario from './Formulario.jsx';
import Header from './Header.jsx';

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // With [] (empty dependencies) the code inside will execute only once (initial render)
  // Recuperando pacientes de LS
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      if (Array.isArray(pacientesLS) && pacientesLS.length) {
        setPacientes(pacientesLS);
      }
    };

    obtenerLS();
  }, []);

  // Enviando pacientes al LS
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((p) => p.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex gap-5">
        <Formulario
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
};

export default App;
