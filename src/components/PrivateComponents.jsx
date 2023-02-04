import { Navigate ,Outlet } from "react-router-dom";
function PrivateComponents() {
    const auth = localStorage.getItem("user");
    return auth ? <Outlet />  : <Navigate to="/SignUp" />
}

export default PrivateComponents;