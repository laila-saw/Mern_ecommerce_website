import React from 'react'
import { Route,BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import NewProduct from './pages/NewProduct'
import LoginAdmin from './pages/LoginAdmin'
import { useState } from 'react'
import {useSelector} from 'react-redux'

const App = () => {
  const [sidebarOpened,setSidebarOpened]=useState(false)
  const userr=useSelector((state)=>state.user.currentUser)
  // console.log("userr",userr)
  const user = useSelector((state)=> state.user.currentUser)
  console.log("******",userr)
  // const user = false;
    return (
        <Router>
            {
              user && <Topbar />
            }
            <div className={sidebarOpened ? "cap container sticky" : "cap container"}>
              {
                user && <Sidebar 
                sidebarOpened={sidebarOpened} 
                setSidebarOpened={setSidebarOpened} />
              }
            <Routes>
          <Route exact path="" element={<Home />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
          {
            user
            ? <Route path='/login' element={<Navigate replace to="/" />} />
            : <Route path='/login' element={<LoginAdmin />} />
          }
        </Routes>
            </div>
            
        </Router>
    
      )
}

export default App