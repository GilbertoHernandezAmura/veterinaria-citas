import PropTypes from 'prop-types';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl font-bold text-center mt-5 mb-10">
            Administra tus{' '}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          <div className="md:h-3/5 md:overflow-y-scroll mx-5">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Agrega Nuevos Pacientes
          </h2>
          <p className="text-xl font-bold text-center mt-5 mb-10">
            y apareceran <span className="text-indigo-600">en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

export default ListadoPacientes;
