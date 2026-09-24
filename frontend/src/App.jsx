import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signup from './pages/Signup'
import Header from './components/Header'


export default function App() {
  return (
    <div>
      <Header />
      
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/logout' element={<Logout/>}/>
           <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}