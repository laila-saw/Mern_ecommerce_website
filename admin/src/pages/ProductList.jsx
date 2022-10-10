import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../Data';

const ProductList = () => {
    const [data,setData]=useState(productRows)
    function handleDelete(id){
      setData(data.filter((item)=>item.id!==id))
    }
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'product', headerName: 'name', width: 200, renderCell: (params) => {
          return (
            <div className="userCell">
              <img src={params.row.img} alt="" />
              {params.row.name}
            </div>
          )
        }
      },
      { field: 'stock', headerName: 'stock', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
      },
      {
        field: 'price',
        headerName: 'price Volume',
        width: 160,
      }
      ,
      {
        field: 'action',
        headerName: 'action',
        width: 150,
        renderCell: (params) => {
          return (
            <div className="actionOptions">
              <Link to={"/product/" + params.row.id}>
                <button className="actionOption edit"><Edit title="Edit" /> </button>
              </Link>
              <button className="actionOption delete" onClick={() => handleDelete(params.row.id)}><DeleteOutline title="Delete" /></button>
            </div>
          )
        }
      }
    ];
    return (
      <div className="page productList" style={{ height: "calc(100% - 50px)" }}>
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

export default ProductList