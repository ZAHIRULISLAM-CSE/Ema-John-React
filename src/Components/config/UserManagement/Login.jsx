import React, { useContext } from "react";
import { AuthContext } from "../../ContextAuth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {login}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const state =location.state || "/";
    console.log(location)
    console.log(state);


    const handleLogin=(event)=>{
        event.preventDefault();
        // console.log(event.target.email.value);
        const email=event.target.email.value;
        const password=event.target.password.value;
        login(email,password)
        .then((result) => { 
            const user = result.user;
            console.log(user);
            navigate(state,{replace:true});
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });

    }





  return (
    <div className="flex  justify-center">
      <div className="border rounded-lg mt-16 p-8">
        <h1 className="text-3xl text-center mb-5">Login</h1>
        <form onSubmit={handleLogin} action="">
          <div className="mb-3">
            <label className="block mb-1" htmlFor="">
              Email
            </label>
            <input
              className="border  h-[40px] rounded-md md:w-[300px] lg:w-[400px]"
              type="text"
              name="email"
              id=""
            />
          </div>
          <div className="mb-3">
            <label className="block  rounded-md mb-1" htmlFor="">
              Password
            </label>
            <input
              className="border h-[40px] rounded-md md:w-[300px] lg:w-[400px]"
              type="text"
              name="password"
              id=""
            />
          </div>
          <button
            className="md:w-[300px] bg-orange-600 p-2 rounded-lg lg:w-[400px]"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
