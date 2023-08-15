import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiUserLine,
  RiEyeCloseLine,
} from "react-icons/ri"; // para usar iconos

import { useState } from "react"; // para usar estados
import { toast } from "react-toastify"; // para notificaciones
import { Link } from "react-router-dom"; // para hacer cambios entre paginas sin usar <a href>

const Login = () => {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handlers
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
      e.preventDefault(); // para que no me recargue la pagina
      
    if ([name, lastname, email, password, confirmPassword].includes("")) {
      // si alguno de estos es vacio
      toast.error("Todos los campos son obligatorios. 😟", {
        theme: "dark",
      });
      return;
    }
    
    const MINIMO_LONGITUD = 6;
    if (password.length < MINIMO_LONGITUD) {
      toast.error(
        `El password debe contener al menos ${MINIMO_LONGITUD} caracteres. 😓`,
        {
          theme: "light",
          position: "top-center",
        }
      );
      return;
    }

    if (password != confirmPassword) {
      toast.error("🔒 Los passwords no coinciden", {
        theme: "dark",
      });
    }

    console.log("correcto");
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg w-full md:w-96">
        <div className="mb-10">
          <h1 className="text-3xl uppercase font-bold text-center">registro</h1>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="relative">
            <RiUserLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Nombre(s)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="relative">
            <RiUserLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Apellidos"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="relative">
            <RiMailLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <RiLockLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Contrasena"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="relative">
            <RiLockLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Confirmar Contrasena"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div>
            <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:bg-sky-800 transition-all">
              Crear cuenta
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between">
          {/* <a href=""></a>  NO USAR POR QUE RECARGA LA PAGINA*/}
          <div>
            Ya tienes cuenta?{" "}
            <Link
              to="/"
              className="text-sky-600 font-medium hover:underline transition-all"
            >
              Ingresa
            </Link>
          </div>
          <div className="text-right">
            <Link
              to="/olvide-password"
              className="text-gray-500 font-medium hover:underline transition-all"
            >
              Olvidaste tu password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
