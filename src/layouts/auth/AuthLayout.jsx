import { Outlet } from "react-router-dom"; // me sirve para que login pueda mostrarse en el layout

const AuthLayout = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <Outlet /> 
            </div>
        </>
    );
}

export default AuthLayout;