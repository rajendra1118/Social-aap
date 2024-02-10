import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Login() {

   const [loginDetails,setLoginDetails]= useState({ email:"",password:""})
   const navigate=useNavigate();
   const handleloginDetails= (e)=>{


    const {name,value}=e.target
       
    setLoginDetails({...loginDetails,[name]:value})


  }

  const handleLogin= async(paylod)=>{
    let bodyContant = JSON.stringify(loginDetails)
       try {
  
        let res = await fetch('http://localhost:8080/users/login', {
            method: 'POST',
            body: bodyContant,
            headers: {
                'Content-Type': "application/json"
            }
  
        })
        // await res.text();
        // alert("user created succesfully")

        const data= await res.json()
        localStorage.setItem("token",data.token)
        alert("user logged in succesfully")
        navigate("/")
        console.log(data)
  
  
    } catch (error) {
        alert("somthing went wrong")
    }
  
   }

  return (
    <div>
        <h2>Login</h2>
        <div>
          <br />
        
          <input    placeholder='Email' name="email" value={loginDetails.email} onChange={(e)=>handleloginDetails(e)}/>
          <br />
          <input    placeholder='password' name="password" value={loginDetails.password} onChange={(e)=>handleloginDetails(e)} />
            <div>
            <button  onClick={(loginDetails)=>handleLogin(loginDetails)} >Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Login