import React, { useEffect, useState } from 'react'
import './Home.css'
import Features from '../../components/features/Features'
import Chart from '../../components/Chart/Chart'
import WidgetSm from '../../components/widgetsm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
export default function Home() {
    const [xAxisData,setxAxisData]=useState([])
    useEffect(()=>{
        fetch('https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/xAxisData.json')
        .then(res=>res.json())
        .then(data=>setxAxisData(data))
    },[])
    
  return (
    <>
        <div className="home">
            <Features/>    
            {xAxisData.length>0?(<Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />):(<h2>loading...</h2>)}
            <div className='homeWidget'>
                <WidgetSm/>
                <WidgetLg/>

            </div>
        </div>
    </>
    )
}
