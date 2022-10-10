import React, { useState } from 'react'
import {DeleteOutline, Edit} from "@material-ui/icons"
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userRrows } from '../Data';
const UserList = () => {
    const [data, setData] = useState(userRrows);
    function handleDelete(id) {
      setData(data.filter((item) => item.id !== id))
    }
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
          return (
            <div className="userCell">
              <img src={params.row.img} alt="" />
              {params.row.username}
            </div>
          )
        }
      },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
      },
      {
        field: 'transaction',
        headerName: 'Transaction Volume',
        width: 160,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
          return (
            <div className="actionOptions">
              <Link to={"/user/" + params.row.id}>
                <button className="actionOption edit"><Edit title="Edit" /> </button>
              </Link>
              <button className="actionOption delete" onClick={() => handleDelete(params.row.id)}><DeleteOutline title="Delete" /></button>
            </div>
          )
        }
      }
    ];
    return (
      <div className="page" style={{ height: "calc(100% - 50px)" }}>
  
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
  
    )
}

export default UserList