import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='p-6 flex justify-between'>
        <div className='text-3xl'>Meetly </div>

        <div className="div">
            <ul className='flex cursor-pointer gap-4 h-8 '>
                <Link to={"/"} className='border bg-blue-300 rounded w-14 text-center'>Home</Link>
                <Link to={"/feed"} className='border  bg-blue-300 rounded w-14 text-center'>Feed</Link>
                <Link to={"/chats"} className='border  bg-blue-300 rounded w-14 text-center'>Chats</Link>
                <Link to={"/login"} className='border  bg-blue-300 rounded w-14 text-center'>Login</Link>
            </ul>
        </div>
    </div>
  )
}
