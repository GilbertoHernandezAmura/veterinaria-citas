import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';

const Formulario = ({ setPacientes, paciente, setPaciente }) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [huboError, setHuboError] = useState(false);

  useEffect(() => {
    // Poniendo datos en el form cuando el estate de paciente se actualiza.
    if (paciente && Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota);
      setNombrePropietario(paciente.nombrePropietario);
      setEmail(paciente.email);
      setFechaIngreso(paciente.fechaIngreso);
      setObservaciones(paciente.observaciones);
    }
  }, [paciente]);

  const handleChangeNombreMascota = (evt) => {
    setNombreMascota(evt.target.value);
  };

  const handleChangeNombrePropietario = (evt) => {
    setNombrePropietario(evt.target.value);
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleChangeFechaIngreso = (evt) => {
    setFechaIngreso(evt.target.value);
  };

  const handleChangeObservaciones = (evt) => {
    setObservaciones(evt.target.value);
  };

  const generarId = () => {
    const randomNum = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return randomNum + fecha;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Form validations
    if (
      ![
        nombreMascota,
        nombrePropietario,
        email,
        fechaIngreso,
        observaciones,
      ].includes('')
    ) {
      // Todo OK
      huboError && setHuboError(false);

      const estadoPaciente = {
        nombreMascota,
        nombrePropietario,
        email,
        fechaIngreso,
        observaciones,
      };
      // Checar si estamos editando.
      if (paciente?.id) {
        estadoPaciente.id = paciente.id;
        setPacientes((prevState) => {
          const pacientesActualizados = prevState.map((p) =>
            p.id === estadoPaciente.id ? estadoPaciente : p
          );
          return pacientesActualizados;
        });
      } else {
        // Nuevo registro
        estadoPaciente.id = generarId();
        setPacientes((prevState) => [...prevState, estadoPaciente]);
      }

      // Reiniciar state form
      setNombreMascota('');
      setNombrePropietario('');
      setEmail('');
      setFechaIngreso('');
      setObservaciones('');
      // Reset state de paciente para proximos edits
      setPaciente({});
    } else {
      // Hubo algun fallo
      setHuboError(true);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="font-bold text-xl text-center mt-5 mb-10">
        Añade Pacientes y <span className="text-indigo-600">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5 md:mx-0"
      >
        {huboError && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre-mascota"
          >
            Nombre Mascota
          </label>
          <input
            className="block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="nombre-mascota"
            name="nombre-mascota"
            type="text"
            placeholder="Rocco"
            value={nombreMascota}
            onChange={handleChangeNombreMascota}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre-propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="nombre-propietario"
            name="nombre-propietario"
            type="text"
            placeholder="John Wick"
            value={nombrePropietario}
            onChange={handleChangeNombrePropietario}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            name="email"
            type="email"
            placeholder="johnwick@example.com"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha-ingreso"
          >
            Fecha Ingreso
          </label>
          <input
            className="block border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="fecha-ingreso"
            name="fecha-ingreso"
            type="date"
            value={fechaIngreso}
            onChange={handleChangeFechaIngreso}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha-ingreso"
          >
            Observaciones
          </label>
          <textarea
            className="w-full p-2 mt-2 border-2 rounded-md placeholder-gray-400"
            name="observaciones"
            id="observaciones"
            rows="5"
            placeholder="Le ocurre..."
            value={observaciones}
            onChange={handleChangeObservaciones}
          />
        </div>
        <input
          className="bg-indigo-600 text-white w-full block p-3 rounded-md 
          uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          type="submit"
          value={!paciente?.id ? 'Agregar Paciente' : 'Editar Paciente'}
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  setPacientes: PropTypes.func.isRequired,
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func,
};

export default Formulario;
