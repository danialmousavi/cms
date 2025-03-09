import React, { useState } from 'react'
import './NewUser.css'
import { data } from 'react-router-dom';
export default function NewUser() {
  const [username,setUserName]=useState([]);
  const [email,setEmail]=useState([]);
  const [transAction,setTransAction]=useState([]);
 const handleSubmit=(e)=>{
  e.preventDefault();
  const newUser={
    id:Math.floor(Math.random()*100),
    username,
    email,
    transAction,
    img:'/images/1.jpeg'
  }
  fetch('https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/userRows.json',{
    method:"POST",
    body:JSON.stringify(newUser)
  })
  .then(res=>res.json())
  .then(data=>console.log(data)
  )
 }
  return (
    <>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
         Name<input type="text" onChange={(e)=>setUserName(e.target.value)} />
         Email <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
         transAction <input type="number" onChange={(e)=>setTransAction(e.target.value)}/>
         <button type='submit'>submit user</button>
      </form>
    </>
)
}
