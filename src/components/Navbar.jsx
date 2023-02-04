import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();  
    navigate("/SignUp");
  };
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="flex m-3 px-5 py-3 rounded-3xl bg-blue-700 text-white">
            {
              auth ? <>
              <li className="mx-2">
              <Link to="/">Products</Link>
            </li>
            <li className="mx-2">
              <Link to="/AddProducts">Add Products</Link>
            </li>
            <li className="mx-2">
              <Link to="/UpdateProducts">Update Products</Link>
            </li>
            <li className="mx-2"></li>
            <li className="mx-2">
              <Link to="/Profile">Profile</Link>
            </li>
            </>
            :null
            }

            <li className="mx-2">
              {auth ? (
                <Link to="/Logout" onClick={logout}>
                  Logout ({  JSON.parse(auth).name})
                </Link> 
              )
               : (
               <>
                <Link to="/SignUp" >SignUp</Link>
                <Link to="/Login" className="mx-2">Login</Link>
               </>
              )}
            </li>
          
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
