import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartComponent from "../components/CartComponent";
import EmptyCart from "../components/EmptyCart";
import { getCartProducts } from "../../redux/Cart/Action";

import { Box } from "@chakra-ui/react";

import { UpperNavbar } from "./Homepage/UpperNavbar";
import Footer from "./Homepage/Footer";


const Cart = () => {
  const { cart, isLoading, isError } = useSelector((store) => {
    return {
      cart: store.CartReducer.cart,
      isLoading: store.CartReducer.isLoading,
      isError: store.CartReducer.isError,
    };
  }, shallowEqual);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [cart.length]);

  return (
    <>
 <UpperNavbar />
    <Box mb={"80px"}>
      


     

      {isLoading ? (
        <p style={{ color: 'white' }}>Loading</p>
      ) : cart?.length == 0 ? (
        <EmptyCart />
      ) : (
        <CartComponent />
      )}

    </Box>

      <Footer />
    </>

  );
};

export default Cart;
