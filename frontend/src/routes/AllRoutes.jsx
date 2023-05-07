import { Routes, Route } from "react-router-dom";
import Login from "../User/pages/Login";
import Signup from "../User/pages/Signup";
import Cart from "../User/pages/Cart";
import Checkout from "../User/pages/Checkout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default AllRoutes;
