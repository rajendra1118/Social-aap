import React from 'react'
import {Route, Routes} from "react-router-dom"
import Signup from '../pages/signuppage/Signup'
import Home from '../pages/Homepage/Home'
import Login from '../pages/loginpage/Login'
function Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
             <Route path='/register' element={<Signup/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export {Routers}