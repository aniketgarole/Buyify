import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";

import CartCard from "./CartCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { getCartProducts } from "../../redux/Cart/Action";

const CartComponent = () => {
  const [total, setTotal] = useState(0);

  const { cart, isLoading, isError } = useSelector((store) => {
    return {
      cart: store.CartReducer.cart,
      isLoading: store.CartReducer.isLoading,
      isError: store.CartReducer.isError,
    };
  }, shallowEqual);

  console.log("cart", cart);

  let totalprice = cart?.reduce((acc, el) => {
    return acc + +el.offerPrice;
  }, 0);

  const handleQtyChange = (price) => {
    setTotal((prev) => prev + price);
  };

  return (
    <>
      <Flex
        gap={"20px"}
        p={"25px 15px 10px 15px"}
        direction={{ base: "row", md: "row", sm: "column" }}
      >
        <Box
          boxShadow="base"
          width={{ lg: "78%", sm: "100%" }}
          backgroundColor={"white"}
          p={"20px"}
        >
          <Box>
            {" "}
            <Text fontSize="3xl">Shopping Cart</Text>
          </Box>
          <Flex justifyContent={"space-between"} mb={"12px"}>
            <Text
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "red",
              }}
              color={"green"}
            >
              Deselect all items
            </Text>
            <Text>Price</Text>
          </Flex>
          {/* Cart component */}
          <Box>
            {cart?.map((el) => (
              <CartCard {...el} key={el.id} handleQtyChange={handleQtyChange} />
            ))}
          </Box>

          <Divider />
          {/* cart total Price */}
          <Flex justifyContent={"end"}>
            <Text textAlign={"end"} fontSize="19.5px" fontWeight={"semibold"}>
              Subtotal ({cart.length} items):
            </Text>
            <Text fontSize="19.5px" fontWeight={"bold"}>
              {" "}
              ₹ {totalprice}
            </Text>
          </Flex>
        </Box>
        <Box boxShadow="base" p={"20px"} h={"120px"}>
          <Flex>
            <Text textAlign={"end"} fontSize="19.5px" fontWeight={"semibold"}>
              Subtotal ({cart.length} items):
            </Text>
            <Text fontSize="19.5px" fontWeight={"bold"}>
              ₹ {totalprice}
            </Text>
          </Flex>

          <Button
            colorScheme="yellow"
            width={"100%"}
            h={{ lg: "30px", sm: "40px" }}
            mt={"5px"}
          >
            <Link to="/checkout"> Proceed to Buy</Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default CartComponent;
