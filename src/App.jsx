import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import UpdateProducts from "./pages/UpdateProducts";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile" ;
import SignUp from "./pages/SignUp";
import PrivateComponents from "./components/PrivateComponents";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App p-4 flex flex-col justify-between items-center text-white bg-blue-900 ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/" element={<Products />} />
            <Route path="/AddProducts" element={<AddProducts />} />
            <Route path="/UpdateProducts/:id" element={<UpdateProducts />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
