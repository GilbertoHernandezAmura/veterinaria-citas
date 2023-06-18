import PropTypes from 'prop-types';

const Error = ({ mensaje }) => {
  return (
    <div className="font-bold bg-red-700 py-3 text-center text-white rounded-lg mb-5">
      {mensaje}
    </div>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
