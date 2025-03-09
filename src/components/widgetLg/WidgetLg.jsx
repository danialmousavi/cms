import React, { useEffect, useState } from 'react'
import'./WidgetLg.css'
// import { transActions } from '../../Datas'
export default function WidgetLg() {
    const Button=({type})=>{
        return <button className={'WidgetLgButton ' + type}>{type}</button>
    }
    const [transActions,setTransActions]=useState([])
     useEffect(()=>{
        fetch('https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/transActions.json')
        .then(res=>res.json())
        .then(data=>setTransActions(data))
    },[])
  return (
    <>
    <div className="WidgetLg">
        <h3 className='WidgetLgTitle'>Latest TransAction</h3>
        <table className="WidgetLgTable">
            <tr className="WidgetLgTr">
                <th className="WidgetLgTh">Customer</th>
                <th className="WidgetLgTh">Date</th>
                <th className="WidgetLgTh">Amount</th>
                <th className="WidgetLgTh">Status</th>
            </tr>
            {transActions.length>0?(transActions.map(tran=>(
            <tr className='WidgetLgTr' key={tran.id}>
            <td className='WidgetLgUser'>
                <img src={tran.img} className='WidgetLgImg' alt="" />
                <span className='WidgetLgName'>{tran.userName}</span>
            </td>
            <td className='WidgetLgData'>{tran.date}</td>
            <td className='WidgetLgAmout'>${tran.price}</td>
            <td className='WidgetLgStatus'>
                <Button type={tran.status}/>
            </td>
        </tr>
            ))):(<h2>Loading...</h2>)}


        </table>
    </div>
    </>
)
}
