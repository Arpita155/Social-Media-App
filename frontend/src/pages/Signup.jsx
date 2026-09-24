import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";



export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function register() {
       try {
          if(name && email && password){
                const res  = await fetch("http://localhost:3000/auth/signup", {
                  method : 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body : JSON.stringify( {
                    name , email , password 
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
  console.log("Page loaded ");
  

  useEffect(()=>{

  },[])


  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <input
          className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
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

        <button onClick={register} className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium cursor-pointer">
          Create Account
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500  underline">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}