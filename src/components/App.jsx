import { useState } from 'react';
import ListadoPacientes from './ListadoPacientes.jsx';
import Formulario from './Formulario.jsx';
import Header from './Header.jsx';

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex gap-5">
        <Formulario setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
  );
};

export default App;
