const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="font-bold text-lg text-center mt-5 mb-10">
        Añade Pacientes y <span className="text-indigo-600">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
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
            rows="7"
            placeholder="Le ocurre..."
          />
        </div>
        <input
          className="bg-indigo-600 text-white w-full block p-3 rounded-md 
          uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          type="submit"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
