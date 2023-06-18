import PropTypes from 'prop-types';
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const {
    id,
    nombreMascota,
    nombrePropietario,
    email,
    fechaIngreso,
    observaciones,
  } = paciente;

  const editarPaciente = () => {
    setPaciente(paciente);
  };

  const handleEliminar = () => {
    const respuesta = confirm('Estas seguro de eliminar este paciente?');

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="bg-white mb-5 shadow-md px-5 py-10 rounded-lg mx-3">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombreMascota}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{' '}
        <span className="font-normal normal-case">{nombrePropietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Ingreso:{' '}
        <span className="font-normal normal-case">{fechaIngreso}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Observaciones:{' '}
        <span className="font-normal normal-case">{observaciones}</span>
      </p>

      <div className="flex justify-between mt-10">
        <a
          className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 inline-block text-white font-semibold cursor-pointer rounded-md"
          onClick={editarPaciente}
        >
          Editar
        </a>
        <a
          className="bg-red-600 hover:bg-red-700 py-2 px-10 inline-block text-white font-semibold cursor-pointer rounded-md"
          onClick={handleEliminar}
        >
          Eliminar
        </a>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

Paciente.defaultProps = {
  paciente: {
    nombreMascota: 'Rocco',
    nombrePropietario: 'John Wick',
    email: 'johnwick@example.com',
    fechaIngreso: '1998-03-21',
    observaciones: 'Lele pancha',
  },
};

export default Paciente;
