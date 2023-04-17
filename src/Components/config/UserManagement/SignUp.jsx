import React from "react";

const SignUp = () => {
  return (
    <div className="flex  justify-center">
      <div className="border rounded-lg mt-16 p-8">
        <h1 className="text-3xl text-center mb-5">SignUp</h1>
        <form action="">
          <div className="mb-3">
            <label className="block mb-1" htmlFor="">
              Email
            </label>
            <input className="border  h-[40px] rounded-md md:w-[300px] lg:w-[400px]" type="text" name="email" id="" />
          </div>
          <div className="mb-3">
            <label className="block  rounded-md mb-1" htmlFor="">
              Password
            </label>
            <input className="border h-[40px] rounded-md md:w-[300px] lg:w-[400px]" type="text" name="password" id="" />
          </div>
          <div className="mb-6">
            <label className="block  mb-1" htmlFor="">
              Confirm Password
            </label>
            <input className="border  h-[40px] rounded-md md:w-[300px] lg:w-[400px]" type="text" name="con-password" id="" />
          </div>
          <button className="md:w-[300px] bg-orange-600 p-2 rounded-lg lg:w-[400px]" type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
