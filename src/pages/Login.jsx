import { useEffect } from "react";
import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login",{
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details...");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
    }
  }, [navigate]);
  return (
    <>
      <div className="login text-center">
        <h1 className="text-4xl font-bold mt-20 mb-4 text-white">Login</h1>
        <form>
          <div className="bg-white  p-2 my-3 rounded-xl flex items-center ">
            <label htmlFor="email" className="text-black">
              {" "}
              <GrMail />
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <label htmlFor="password" className="text-black">
              {" "}
              <RiLockPasswordFill />
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={loginData}
            className="bg-blue-600 text-white px-4 py-2 my-4 rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
