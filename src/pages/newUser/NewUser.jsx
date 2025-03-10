import React, { useState } from 'react'
import './NewUser.css'
import { data } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function NewUser() {
  const [username,setUserName]=useState([]);
  const [email,setEmail]=useState([]);
  const [transAction,setTransAction]=useState([]);
  const [imageUrl,setImageUrl]=useState([]);
 const handleSubmit=(e)=>{
  e.preventDefault();
  const newUser={
    id:Math.floor(Math.random()*100),
    username,
    email,
    transAction,
    avatar:imageUrl
  }
  if(username.length>0&&email.length>0&&transAction.length>0&&imageUrl.length>0){
    fetch('https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/userRows.json',{
      method:"POST",
      body:JSON.stringify(newUser)
    })
    .then(res=>{
      if(res.ok){
        res.json();
        Swal.fire({
          title: "user",
          text: "user created successfully",
          icon: "success"
        });
  
      }
    })
    setUserName('');
    setEmail('');
    setImageUrl('');
    setTransAction('');
  }

 }
  return (
    <>
      <form className='userForm' action="" onSubmit={(e)=>handleSubmit(e)}>
        <div className='inputContainer'>
        <label htmlFor="">Name</label>
         <input className='userInput' type="text" onChange={(e)=>setUserName(e.target.value)} />
            <label htmlFor="">Email</label>
          <input className='userInput' type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="">transAction</label>
          <input className='userInput' type="number" onChange={(e)=>setTransAction(e.target.value)}/>
          <label htmlFor="">Iamge Address</label>
          <input className='userInput' type="text" onChange={(e)=>setImageUrl(e.target.value)}/>
         <button className='userSubmitBtn' type='submit'>submit user</button>
        </div>
      </form>
    </>
)
}
