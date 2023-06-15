import PropTypes from 'prop-types';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl font-bold text-center mt-5 mb-10">
        Administra tus{' '}
        <span className="text-indigo-600">Pacientes y Citas</span>
      </p>

      <div className="md:h-3/5 md:overflow-y-scroll mx-5">
        {pacientes.map((paciente) => (
          <Paciente key={Date.now() + Math.random()} paciente={paciente} />
        ))}
      </div>
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
};

export default ListadoPacientes;
