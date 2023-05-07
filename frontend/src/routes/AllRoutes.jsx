import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../User/pages/Products/Men/Men'
import SingleProduct from '../User/pages/Products/SingleProduct'
import Women from '../User/pages/Products/Women/Women'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/men" element ={<Men/>}/>
        <Route path="/women" element ={<Women/>}/>
        <Route path="/men/:id" element={<SingleProduct />} />
        <Route path="*" element = {<h1>404 Page Not Found</h1>}/>
    </Routes>
  )
}

export default AllRoutes