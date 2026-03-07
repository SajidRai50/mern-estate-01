import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
const SignUp = () => {
const[formData ,setFormData]= useState({});
const handleChange =(e)=>{
 setFormData({
  ...formData,
  [e.target.value]:e.target.value,
 });
}

const handleSubmit =(e) =>{
  e.preventDefault();
}
console.log(formData)
 
  return (
    <div>
       <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit}
             className="flex flex-col gap-4">

              <input onChange={handleChange}
                type="text"
                placeholder="username"
                className="border p-3 rounded-lg"
                id="username"

              />
              <input onChange={handleChange}
                type="email"
                placeholder="email"
                className="border p-3 rounded-lg"
                id="email"

              />
              <input onChange={handleChange}
                type="password"
                placeholder="password"
                className="border p-3 rounded-lg"
                id="password"

              />

              <button

                className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-70"
              >
              sign up
              </button>

            </form>


            <div className="flex gap-2 mt-5">
              <p>Dont have an account?</p>
              <Link to={"/sign-up"}>
                <span className="text-blue-700">Sign up</span>
              </Link>
            </div>
             <p className="text-red-500 mt-5"></p>
          </div>
    </div>
  )
}

export default SignUp