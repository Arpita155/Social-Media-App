import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

  const [user,setUser] = useState({})

  useEffect(()=>{
    fetch("http://localhost:3000/user/profile", {credentials : 'include'})
    .then((res)=> res.json())
    .then((res)=> {
      if(res.success == false){
        alert(res.message)
      }
      else setUser(res.user)
    })
  },[])
  console.log(user)

  return (
    <div>
      <center className='text-3xl'>User Card</center>
      <div className="div">
        <div className="div">
          Name : {user.name} <br/>
          email : {user.email} <br/>
          User Image :  <img src={user.image} alt="" className='h-12' />
        </div>
      </div>


    </div>
  )
}
