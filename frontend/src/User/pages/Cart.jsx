import React, { useEffect } from "react";
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { getCart } from "../../redux/Cart/cart.actions";

const Cart = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.cartReducer.cart;
  });

  const totalCartPrice = data
    .reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0)
    .toFixed(2);

  useEffect(() => {
    dispatch(getCart());
  }, []);

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
            {data.map((el) => (
              <CartCard {...el} key={el.id} />
            ))}
          </Box>

          <Divider />
          {/* cart total Price */}
          <Flex justifyContent={"end"}>
            <Text textAlign={"end"} fontSize="19.5px" fontWeight={"semibold"}>
              Subtotal ({data.length} items):
            </Text>
            <Text fontSize="19.5px" fontWeight={"bold"}>
              {" "}
              ₹ {totalCartPrice}
            </Text>
          </Flex>
        </Box>
        <Box boxShadow="base" p={"20px"} h={"120px"}>
          <Flex>
            <Text textAlign={"end"} fontSize="19.5px" fontWeight={"semibold"}>
              Subtotal ({data.length} items):
            </Text>
            <Text fontSize="19.5px" fontWeight={"bold"}>
              ₹ {totalCartPrice}
            </Text>
          </Flex>

          <Button
            colorScheme="yellow"
            width={"100%"}
            h={{ lg: "30px", sm: "40px" }}
            mt={"5px"}
          >
            Proceed to Buy
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;
