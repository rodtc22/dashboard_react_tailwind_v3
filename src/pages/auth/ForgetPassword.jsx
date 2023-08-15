import { RiMailLine } from "react-icons/ri"; // para usar iconos

import { useState } from "react"; // para usar estados
import { toast } from "react-toastify"; // para notificaciones
import { Link } from "react-router-dom"; // para hacer cambios entre paginas sin usar <a href>

const ForgetPassword = () => {
  // States
  const [email, setEmail] = useState("");

  // Handlers

  const handleSubmit = (e) => {
    e.preventDefault(); // para que no me recargue la pagina

    if ([email].includes("")) {
      // si alguno de estos es vacio
      toast.error("El correo es obligatorio. 😟", {
        theme: "dark",
      });
      return;
    }

    //VERIFICAR QUE EL EMAIL EXISTA
    //ENVIAR EMIAL DE RECUPERACIONDE CONTRASENIA

    console.log("Toda la funcionalidad de recuperar el password");
    toast.success("Se han enviado las instrucciones a tu correo", {
      theme: "dark",
    });
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg m-full md:w-96">
        <div className="mb-10">
          <h1 className="text-3xl uppercase font-bold text-center">
            Recuperar contrasena
          </h1>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="relative">
            <RiMailLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required   para decir que tengo que poner si o si
            />
          </div>

          <div>
            <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:bg-sky-800 transition-all">
              Enviar Instrucciones
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          {/* <a href=""></a>  NO USAR POR QUE RECARGA LA PAGINA*/}
          <div>
            {"Ya tienes cuenta? "}
            <Link
              to="/"
              className="text-sky-600 font-medium hover:underline transition-all"
            >
              Ingresa
            </Link>
          </div>
          <div className="text-right">
            {"Ya tienes cuenta? "}
            <Link
              to="/registro"
              className="text-sky-600 font-medium hover:underline transition-all"
            >
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
