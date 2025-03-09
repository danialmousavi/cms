import React, { useState } from 'react'
import './Prouducts.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@mui/icons-material';
import { ProductsData } from '../../Datas';
export default function UserList() {
  const [productsDatas,setProductsDatas]=useState(ProductsData)
  //delete users
 const handleDelete=(prouductId)=>{
  setProductsDatas(productsDatas.filter(product=>product.id!=prouductId))
 }
 //colums for datagrid of MUI
  const Colums=[
    {
      field:'id',
      headerName:'ID',
      width:90
    },
    {
      field:'product',
      headerName:'Product',
      width:200,
      renderCell:(params)=>{
        return(
          <>
          <Link className='link'>
            <div className='userListUser'>
              <img src={params.row.img} alt="" className='userListImg'/>
              {params.row.title}
            </div>
          </Link>
          </>
        )
        
      }
    },    
    {
      field:'price',
      headerName:'Price',
      width:120
    },     
    {
      field:'action',
      headerName:'Action',
      width:160,
      renderCell:(params)=>{
        return(
         <>
          <div className='actionuser'>
          <Link  to={`/products/${params.row.id}`}>
          <button className='userListEdit'>Edit</button>
         </Link>
         <DeleteOutlined  onClick={()=>handleDelete(params.row.id)} className='userListDelete'/>
          </div>
         </> 
        )
      }
    },   
    
  ]
  return (
    <>
      <div className='userList' >
      <DataGrid
        rows={productsDatas}
        columns={Colums}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        disableSelectionOnClick
      />
      </div>
    </>
)
}
