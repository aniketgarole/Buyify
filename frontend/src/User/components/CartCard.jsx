import { Box, Divider, Flex, Image, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartdata, getCartProducts } from "../../redux/Cart/Action";

const CartCard = ({ _id, title, offerPrice, images, rating, description,handleQtyChange }) => {
  const [qty, setQty] = useState(1)
  let dispatch = useDispatch();

  async function HandleCartDelete() {
    await dispatch(deleteCartdata(_id));
    dispatch(getCartProducts());
  }

  

  const handleQty = (e)=>{
  setQty(+e.target.value) ;
    
  }

  console.log(typeof(offerPrice));

  let cartQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fun =()=>{
    handleQtyChange(offerPrice*qty)
  }
  
  useEffect(()=>{
    fun()
  },[qty])

  return (
    <Flex
      borderTop={"1px solid gray"}
      mb={"15px"}
      pt={"15px"}
      wrap="wrap"
      direction={{ base: "column", md: "row" }}
      gap={"8px"}
      justifyContent={"space-around"}
    >
      <Box width={{ base: "100%", md: "18%" }}>
        {/* Product Image */}
        <Image width={"100%"} src={images} />
      </Box>
      <Box width={{ base: "100%", md: "70%" }}>
        {/* Product Name or title or description */}
        <Text fontSize="xl" fontWeight={"medium"} mb={"8px"}>
          {title}
        </Text>

        <Text fontSize="xs" color={"green"} mb={"5px"}>
          In Stock
        </Text>
        <Text fontSize={{ base: "sm", md: "xs" }} mb={"2px"}>
          Eligible for FREE Shipping
        </Text>
        <Image
          mb={"15px"}
          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
        />

        <Flex
          h={"25px"}
          w={"100%"}
          justify={{ base: "space-between", md: "flex-start" }}
          gap={{ base: "8px", md: "15px" }}
          mb={{ base: "8px", md: "0" }}
        >
          {/* Product Quantity */}
          <Box width={{ base: "100%", md: "auto" }}>
            <Select placeholder="Qty" boxShadow="xl" h={"100%"} onChange={handleQty}>
              {cartQuantity?.map((el) => {
                return <option value={el}>{el}</option>;
              })}
            </Select>
          </Box>
          <Divider orientation="vertical" colorScheme={"black"} />
          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "red",
              }}
              onClick={HandleCartDelete}
            >
              Delete
            </Text>
          </Box>
          <Divider orientation="vertical" />

          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Save for later
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              See more like this
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box width={{ base: "100%", md: "auto" }}>
            <Text
              fontSize="12px"
              color={"#007185"}
              fontWeight={"medium"}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "red",
              }}
            >
              Share
            </Text>
          </Box>
          <Divider orientation="vertical" colorScheme="grey" />
        </Flex>
      </Box>
      <Box>
        {/* Product Price */}
        <Text textAlign={"end"} fontSize="19.5px" fontWeight={"extrabold"}>
          ₹ {offerPrice  }
        </Text>
      </Box>
    </Flex>
  );
};

export default CartCard;
