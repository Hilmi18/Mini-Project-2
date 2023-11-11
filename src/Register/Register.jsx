import { useState } from "react";
import register from "../assets/img/register/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState(1);
  const [err, setErr] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: name,
      username: username,
      password: password,
      roleId: roleId,
    };
    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setErr(err.response.data.message);
      });
  };

  const handleClose = () => {
    setErr("");
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relatif w-1/2 h-full hidden md:block">
        <div className="absolute text-white top-[15%] left-[4%]">
          <h1 className="font-primary text-[23px] md1:text-[25px]  lg:text-[28px] lg1:text-[33px]">
            Experience the Ease of Food Delivery
          </h1>
          <p className="text-lg lg:text-xl">Join Us to Savor Delicious Meals</p>
        </div>
        <img src={register} className="h-full w-full object-cover" />
      </div>

      <div className="w-full md:w-1/2 h-full flex flex-col p-20  md:max-w-[550px]  mx-auto justify-between items-center">
        <h1 className="text-xl mr-auto text-black ">Dahar</h1>

        <div className="w-full flex flex-col mb-5">
          <div className="w-full flex flex-col mb-2">
            <h2 className="text-3xl mb-2 font-semibold">Register</h2>
            <p className="mb-2">
              Register now to start enjoying delicious food orders!
            </p>
          </div>

          {!!err.length && (
            <div className=" bg-red-300 p-2 rounded-md flex justify-between">
              <p>{err}</p>
              <button onClick={handleClose} className=" pr-1">
                X
              </button>
            </div>
          )}

          <div className="w-full flex flex-col">
            <input
              onChange={handleChangeName}
              type="text"
              placeholder="Name"
              autoComplete="off"
              className="w-full py-2 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              onChange={handleChangeUsername}
              type="text"
              placeholder="Username"
              autoComplete="off"
              className="w-full py-2 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              onChange={handleChangePass}
              type="password"
              placeholder="Password"
              className="w-full py-2 my-2 text-black bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full">
            <button
              onClick={handleSubmit}
              className="w-full bg-red-500 p-2 rounded-md text-white mt-10"
            >
              Register
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <p className=" text-sm">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className=" underline underline-offset-2 font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
