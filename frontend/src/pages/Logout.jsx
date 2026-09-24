import React from 'react'

export default function Logout() {

  async function logoutWork() {
     try {
        
      const res  = await fetch("http://localhost:3000/auth/logout", {
        method : 'POST',
        credentials: 'include', 
      })
      const data = await res.json()
      
      alert(data.message)

        
    } catch (error) {
    console.log(error);
    }
  }
  return (
    <div className=' flex justify-center items-center h-[90vh]'>
      <div className="w-[120px]">
         <button onClick={logoutWork} className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium cursor-pointer">
          Log Out
        </button>
      </div>
    </div>
  )
}