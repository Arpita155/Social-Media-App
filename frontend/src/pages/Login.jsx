import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function loggedIn() {
      try {
        if( email && password){
              const res  = await fetch("http://localhost:3000/auth/login", {
                method : 'POST',
                credentials : 'include',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify( {
                    email , password 
                })
              })
              const data = await res.json()
              
              alert(data.message)
              
      }
      else console.log("data incomplete");
          
      } catch (error) {
      console.log(error);
      }
    }
    console.log("")

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Log In
        </h2>
        <input
          className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="email"
          placeholder="Email"
          required
           value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="text"
          placeholder="Password"
          required
           value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />

        <button onClick={loggedIn} className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium cursor-pointer">
          Log In 
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-500  underline">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}