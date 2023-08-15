import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeCloseLine,
} from "react-icons/ri"; // para usar iconos

import { useState } from "react"; // para usar estados
import { toast } from "react-toastify"; // para notificaciones
import { Link } from "react-router-dom"; // para hacer cambios entre paginas sin usar <a href>
import { useParams } from "react-router-dom"; // para recuperar el token que viene por url
import { useNavigate } from "react-router-dom"; // para redirigir si el token no cumple

const ChangePassword = () => {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate();

  const {token} = useParams();

// Funcionalidad para validar el token, antes de hacer los cambio a la contrasena
  if (token != "1234") {
    navigate("/");
  }

  // Handlers
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // para que no me recargue la pagina
    console.log(e);

    if ([password, confirmPassword].includes("")) {
      // si alguno de estos es vacio
      toast.error("Todos los campos son obligatorios. 😟", {
        theme: "dark",
      });
      return;
    }

    const MINIMO_LONGITUD = 6;
    if (password.length < MINIMO_LONGITUD || confirmPassword < MINIMO_LONGITUD) {
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
      toast.error("Los password son diferentes", {
        theme: "light"
      });
      return;
    }

    toast.success("Tu passwords se cambiaron correctamente.");
    
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg m-full md:w-96">
        <div className="mb-10">
          <h1 className="text-3xl uppercase font-bold text-center">
            Actualizar contrasena
          </h1>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          
          <div className="relative">
            <RiLockLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Contrasena"
              value={password}
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

          <div className="relative">
              <RiLockLine className="absolute left-2 text-gray-500 top-1/2 -translate-y-1/2" />
              <input type={showPassword? "text" : "password"} 
              className = "w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder = "Confirma la contrasena"
              value = {confirmPassword}
              onChange = { (e) => setConfirmPassword(e.target.value) }
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
              Reestablecer contrasena
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
