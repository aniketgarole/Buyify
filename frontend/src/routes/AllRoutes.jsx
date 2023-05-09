import React from "react";
import { Route, Routes } from "react-router-dom";
import Men from "../User/pages/Products/Men/Men";
import SingleProduct from "../User/pages/Products/SingleProduct";
import Women from "../User/pages/Products/Women/Women";
import Login from "../User/pages/Login";
import Signup from "../User/pages/Signup";
import Cart from "../User/pages/Cart";
import Checkout from "../User/pages/Checkout";
import AllProducts from "../Admin/pages/AllProducts/AllProducts";
import Users from "../Admin/pages/Users/Users";
import Editproduct from "../Admin/pages/Editproduct/Editproduct";
import Addproduct from "../Admin/pages/Addproduct/Addproduct";
import Orders from "../Admin/pages/Orders/Orders";
import Order from "../Admin/pages/Order/Order";
import Home from "../Admin/pages/Home/Home";
import NotFound from "../User/pages/Products/NotFound";
import { HomePage } from "../User/pages/Homepage/HomePage";
import AdminPrivateroutes from "../Admin/components/AdminPrivateroutes";
import PrivateRoute from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/cart" element={ <PrivateRoute><Cart /></PrivateRoute>}> </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin" element={<Home />}></Route>
      <Route path="/admin/products" element={<AdminPrivateroutes><AllProducts /></AdminPrivateroutes>}></Route>
      <Route path="/admin/users" element={<AdminPrivateroutes><Users /></AdminPrivateroutes>}></Route>
      <Route path="/admin/products/:id" element={<AdminPrivateroutes><Editproduct /></AdminPrivateroutes>}></Route>
      <Route path="/admin/addProduct" element={<AdminPrivateroutes><Addproduct /></AdminPrivateroutes>}></Route>
      <Route path="/admin/orders/:id" element={<AdminPrivateroutes><Orders /></AdminPrivateroutes>}></Route>
      <Route path="/admin/singleorder/:id" element={<AdminPrivateroutes><Order /></AdminPrivateroutes>}></Route>
    </Routes>
  );
}

export default AllRoutes;
