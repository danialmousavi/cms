import React, { useEffect, useState } from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@mui/icons-material';

export default function UserList() {
  const [userDatas, setUserDatas] = useState([]);

  // Fetch users from Firebase
  useEffect(() => {
    fetch('https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/userRows.json')
      .then(res => res.json())
      .then(data => {
        if (data) {
          // Store Firebase key as `firebaseId`
          const loadedUsers = Object.keys(data).map((key) => ({
            firebaseId: key,
            ...data[key],
          }));
          setUserDatas(loadedUsers);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle user deletion
  const handleDelete = (firebaseId) => {
    if (Array.isArray(userDatas)) {
      const newUsers = userDatas.filter(user => user.firebaseId !== firebaseId);

      fetch(`https://cmsdashboard-cfc42-default-rtdb.firebaseio.com/userRows/${firebaseId}.json`, {
        method: 'DELETE'
      })
        .then(res => {
          if (res.ok) {
            setUserDatas(newUsers);
          }
        })
        .catch(error => console.error('Error deleting user:', error));
    }
  };

  // Columns for DataGrid
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => (
        <Link className='link'>
          <div className='userListUser'>
            <img src={params.row.avatar} alt="" className='userListImg' />
            {params.row.username}
          </div>
        </Link>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'transAction',
      headerName: 'Transaction',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => (
        <div className='actionuser'>
          <Link to={`/users/${params.row.id}`}>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlined 
            onClick={() => handleDelete(params.row.firebaseId)} 
            className='userListDelete' 
          />
        </div>
      )
    },
  ];

  return (
    <div className='userList'>
      {userDatas.length > 0 ? (
        <DataGrid
          rows={userDatas}
          columns={columns}
          getRowId={(row) => row.firebaseId} // Ensure unique row key
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          disableSelectionOnClick
        />
      ) : (
        <div><h2>Loading...</h2></div>
      )}
    </div>
  );
}
