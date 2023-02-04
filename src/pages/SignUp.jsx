import { useEffect } from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  }; 
useEffect(()=>{
  const auth = localStorage.getItem("user");
  if(auth){
    navigate("/")
  }
},[])
  return (
    <>
      <div className="SignUp text-center">
        <form>
          <h1 className="text-4xl font-bold mt-20 mb-4 text-white">Register</h1>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <label htmlFor="name " className="text-black">
              <FaUser />
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              type="text"
              className="px-4 outline-none border-none text-black"
              id="name"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <label htmlFor="email" className="text-black">
              <GrMail />
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              type="text"
              id="email"
              className="px-4 outline-none border-none text-black"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <label htmlFor="password" className="text-black">
              <RiLockPasswordFill />
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="text"
              className="px-4 outline-none border-none text-black"
              id="password"
            />
          </div>
          <button
            onClick={collectData}
            type="button"
            className="bg-blue-600 text-white px-4 py-2 my-4 rounded-xl "
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
