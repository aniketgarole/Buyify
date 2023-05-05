import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Admin/pages/Home/Home'
import AllProducts from '../Admin/pages/AllProducts/AllProducts'
import Users from '../Admin/pages/Users/Users'
import Editproduct from '../Admin/pages/Editproduct/Editproduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<Home/>}></Route>
        <Route path="/admin/products" element={<AllProducts/>}></Route>
        <Route path="/admin/users" element={<Users/>}></Route>
        <Route path="/admin/products/:id" element={<Editproduct/>}></Route>
       
    </Routes>
  )
}

export default AllRoutes