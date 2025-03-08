import React from 'react'
import './Home.css'
import Features from '../../components/features/Features'
import Chart from '../../components/Chart/Chart'
import { xAxisData } from '../../Datas'
export default function Home() {
  return (
    <>
        <div className="home">
            <Features/>    
            <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
        </div>
    </>
    )
}
