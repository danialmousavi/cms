import React, { useEffect, useState } from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { newUsers } from '../../Datas';
export default function WidgetSm() {
    const [newUsers,setNewUsers]=useState([]);
        useEffect(()=>{
            fetch('https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/newUsers.json')
            .then(res=>res.json())
            .then(data=>setNewUsers(data))
        },[])
  return (
    <>
    <div className="widgetSm">
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className="widgetSmList">

            {newUsers.length>0&&newUsers.map(user=>(
            <li key={user.id} className="widgetSmItem">
            <img src={user.img} className='widgetSmImg' alt="" />
            <div className='widgetSmUser'>
                <span className='widgetSmUserName'>{user.title}</span>
                <span className='widgetSmUserTitle'>{user.desc}</span>
            </div>
            <button className='widgetSmButton'>
                <VisibilityIcon className='widgetSmIcon'/>
            </button>
        </li>
            ))}
        </ul>
    </div>
    </>
)
}
