import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeCloseLine,
} from "react-icons/ri"; // para usar iconos

import { useState } from "react"; // para usar estados
import { toast } from "react-toastify"; // para notificaciones
import { Link } from "react-router-dom"; // para hacer cambios entre paginas sin usar <a href>

const Login = () => {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // Handlers
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // para que no me recargue la pagina
    console.log(e);

    if ([email, password].includes("")) { // si alguno de estos es vacio
      toast.error("Todos los campos son obligatorios. 😟", {
        theme: "dark",
      })
      return;
    }

    const MINIMO_LONGITUD = 6;
    if (password.length < MINIMO_LONGITUD) {
      toast.error(`El password debe contener al menos ${MINIMO_LONGITUD} caracteres. 😓`, {
        theme: "light",
        position: "top-center"
      });
      return ;
    }

    console.log("correcto");
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg m-full md:w-96">
        <div className="mb-10">
          <h1 className="text-3xl uppercase font-bold text-center">
            Iniciar Sesión
          </h1>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="relative">
            <RiMailLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Correo electronico"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              // required   //para decir que tengo que poner si o si
            />
          </div>

          <div className="relative">
            <RiLockLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Contrasena"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              // required    para decir que tengo que poner si o si
            />
            {!showPassword ? (
              <RiEyeCloseLine
                className="absolute right-2 text-gray-500 top-1/2 -translate-y-1/2 hover:cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <RiEyeLine
                className="absolute right-2 text-gray-500 top-1/2 -translate-y-1/2 hover:cursor-pointer"
                onClick={handleShowPassword}
              />
            )}
          </div>
          <div className="text-right">
            <Link to="olvide-password" className="text-gray-500 hover:text-sky-600 transition-colors hover:underline"> Olvidaste tu password?</Link>
          </div>
          <div>
            <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:bg-sky-800 transition-all">
              Ingresar
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          {/* <a href=""></a>  NO USAR POR QUE RECARGA LA PAGINA*/}
          Si no tienes una cuenta,
          <Link to="registro" className="text-sky-600 font-medium hover:underline transition-all">
            Registrate
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
