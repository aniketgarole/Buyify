
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../User/pages/Products/Men/Men'
import SingleProduct from '../User/pages/Products/SingleProduct'
import Women from '../User/pages/Products/Women/Women'
import Login from "../User/pages/Login";
import Signup from "../User/pages/Signup";
import Cart from "../User/pages/Cart";
import Checkout from "../User/pages/Checkout";

function AllRoutes() {
  return (
    <Routes>
        <Route path="/men" element ={<Men/>}/>
        <Route path="/women" element ={<Women/>}/>
        <Route path="/men/:id" element={<SingleProduct />} />
        <Route path="*" element = {<h1>404 Page Not Found</h1>}/>
       <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  )
}

export default AllRoutes


