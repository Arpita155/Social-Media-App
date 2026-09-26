import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {

   const [curr , setCurr] = useState(0)

    const navItems  = [
        { id : 0 , name : "Home" , link : "/"},
        { id : 1 , name : "Home" , link : "/"},
        { id : 2 , name : "Chats" , link : "/"},
        { id : 3 , name : "Login" , link : "/"},
    ]
    
  return (
    <div className='p-6 flex justify-between'>
        <div className='text-3xl'>Meetly </div>

        <div className="div">
            <ul className='flex cursor-pointer gap-4 h-8 '>
                <Link to={"/"} className='border border-none bg-gray-200 rounded-xl  w-14 text-center hover:bg-blue-400 ${ curr == 0 ? "bg-blue-500" : ""}'>Home</Link>
                <Link to={"/feed"} className='border border-none bg-gray-200 rounded-xl  w-14 text-center hover:bg-blue-400 ${ curr == 1 ? "bg-blue-500" : ""}'>Feed</Link>
                <Link to={"/chats"} className='border border-none bg-gray-200 rounded-xl  w-14 text-center hover:bg-blue-400 ${ curr == 2 ? "bg-blue-500" : ""}'>Chats</Link>
                <Link to={"/login"} className='border border-none bg-gray-200 rounded-xl  w-14 text-center hover:bg-blue-400 ${ curr == 3 ? "bg-blue-500" : ""}'>Login</Link>
            </ul>
        </div>
    </div>
  )
}
