import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../ContextAuth/AuthProvider";

const Header = () => {
    const {user,logOut}=useContext(AuthContext);

  const handleSignOut=()=>{
    logOut()
  }



  return (
    <div>
      <div className="bg-black">
        <div className="flex p-4 w-[90%] mx-auto justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className="flex md:gap-1 lg:gap-4 text-white">
              <Link to="/" >Home</Link>
              <Link to="/order" >Order Review</Link>
              <Link to="/signup" >SignUp</Link>
              <Link to="/login" >Login</Link>
              {
                user?<span>{user.email} <span className="bg-red-300 p-2 rounded-lg  ml-2"><button onClick={handleSignOut} >SignOut</button></span>  </span> :""
              }
            </ul>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
