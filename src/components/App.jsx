import ListadoPacientes from './ListadoPacientes.jsx';
import Formulario from './Formulario.jsx';
import Header from './Header.jsx';

const App = () => {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default App;
