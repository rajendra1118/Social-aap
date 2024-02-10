import React, { useState } from 'react'

function Signup() {
    const [userDetails,setUserDetails]= useState({name:"",email:"",gender:"",password:""})

    
    const handleDetails= (e)=>{


        const {name,value}=e.target
           
        setUserDetails({...userDetails,[name]:value})
    
    
      }

      const handleRegisterUser=async()=>{
        let bodyContant = JSON.stringify(userDetails)
     try {

      let res = await fetch('http://localhost:8080/users/register', {
          method: 'POST',
          body: bodyContant,
          headers: {
              'Content-Type': "application/json"
          }

      })
      await res.text();
      alert("user register succesfully")


  } catch (error) {
      alert("somthing went wrong")
  }

      }
  return (
    <div>
         <h2> Sign up </h2>
        <div>
          <br />
          <input    placeholder='Enter your name' name="name" value={userDetails.username} onChange={(e)=> handleDetails(e)} />
          <br />
          <input    placeholder='Email' name="email" value={userDetails.email} onChange={(e)=> handleDetails(e)}/>
          <br />
          <input    placeholder='gender' name="gender" value={userDetails.gender} onChange={(e)=> handleDetails(e)} />
          <br />
          <input    placeholder='password' name="password" value={userDetails.password} onChange={(e)=> handleDetails(e)} />
            <div>
            <button  onClick={(userDetails)=>handleRegisterUser(userDetails)} >Submit</button>
            </div>
        </div>

    </div>
  )
}

export default Signup