import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import NewProduct from './pages/NewProduct'
import Login from './pages/Login'
import { useState } from 'react'

const App = () => {
  const [sidebarOpened,setSidebarOpened]=useState(false)
    return (
        <Router>
            <Topbar />
            <div className={sidebarOpened ? "cap container sticky" : "cap container"}>
              <Sidebar 
            sidebarOpened={sidebarOpened} 
            setSidebarOpened={setSidebarOpened} />
            <Routes>
          <Route exact path="" element={<Home />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/login' element={<Login />} />
        </Routes>
            </div>
            
        </Router>
    
      )
}

export default App