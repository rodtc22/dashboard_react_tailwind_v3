import { BrowserRouter, Routes, Route } from "react-router-dom";
//layouts
import AuthLayout from "./layouts/auth/AuthLayout";

//pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Error404 from "./pages/PageNotFound404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
          <Route
            path="reestablecer-password/:token"
            element={<ChangePassword />}
          />
        </Route>
        <Route path="x" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
