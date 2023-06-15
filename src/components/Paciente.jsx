import PropTypes from 'prop-types';
const Paciente = ({ paciente }) => {
  const {
    nombreMascota,
    nombrePropietario,
    email,
    fechaIngreso,
    observaciones,
  } = paciente;
  return (
    <div className="bg-white mb-5 shadow-md px-5 py-10 rounded-lg">
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
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object,
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
