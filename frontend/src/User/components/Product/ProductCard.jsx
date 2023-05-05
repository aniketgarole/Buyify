import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "./ProductCard.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { FaInfoCircle } from "react-icons/fa"
function ProductCard({data}) {
  

  let ratingFillArray = [];
  for (let i = 1; i <= Math.ceil(data.ratings); i++) {
    ratingFillArray.push(i)
  }
  let ratingVacantArray = [];
  for (let i = 1; i <= (5 - Math.ceil(data.ratings)); i++) {
    ratingVacantArray.push(i)
  }

  return (
    <Box border="2px solid blue" width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }} className="product-card">
      {/* Image */}
      <Box>
        <Image width={"100%"} height={"100%"} src={data.images[0]} />
      </Box>

      <Box mt={4} align={"center"}>
        <Flex gap={1} justify={"center"}>
          <Text fontWeight={"semibold"} fontSize={"0.7rem"} _hover={{ color: "#d68009", cursor: "pointer" }}>Sponsored </Text>
          <Box mt={"5px"}>
            <FaInfoCircle fontSize={"0.6rem"} color="grey" />
          </Box>
        </Flex>
        {/* brand */}
        <Text
          fontWeight={"bold"}
          color="black"
        >
          {data.brand}
        </Text>
        {/* Title */}
        <Text
          _hover={{ color: "#d68009", cursor: "pointer" }}
          fontWeight="medium"
          color={"gray.700"}
        >
          {data.title}
        </Text>
        {/* rating  */}
        <Flex justify={"center"}>
          {ratingFillArray.map((el,i) => {
            return (
              <AiFillStar key={i} color="#fda11c" />
            )
          })}
          {ratingVacantArray.map((el,i) => {
            return (
              <AiOutlineStar key={i} color="#fda11c" />
            )
          })}


        </Flex>
         <Box _hover={{ cursor: "pointer" }} width="120px" bgColor={"#ffc266"} mt={1}>
            <Text fontSize={"0.8rem"} >Great Summer Sale</Text>
          </Box>
        



        <Box >
          <Flex justify={"center"}>
            <Text fontSize={"2rem"}>
             ₹{data.offerPrice}
            </Text>
            <Text mt={4} ml={"5px"} display={{ base: "none", sm: "block" }}>
              M.R.P:
            </Text>
            <Text mt={4} ml={"5px"} decoration={'line-through'} color={'grey'} display={{ base: "none", sm: "block" }} >
              ₹{data.originalPrice}
            </Text>
            <Text mt={4} ml={"5px"} fontWeight={"semibold"} display={{ base: "none", sm: "none", md: "none", lg: "block" }} >
              ({data.discount} off)
            </Text>
          </Flex>
          <Flex justify={"center"}>
            <Text mt={"-8px"} ml={"5px"} display={{ base: "block", lg: "none", md: "none", sm: "none" }}>
              M.R.P:
            </Text>
            <Text mt={"-8px"} ml={"5px"} decoration={'line-through'} color={'grey'} display={{ base: "block", lg: "none", md: "none", sm: "none" }} >
              ₹{data.originalPrice}
            </Text>
          </Flex>

          <Text mt={"-5px"} ml={"5px"} fontWeight={"semibold"} display={{ base: "block", lg: "none", md: "block", sm: "block" }} >
          ({data.discount} off)
          </Text>
        </Box>
        <Image width={{lg:"50px",md:"50px",sm:"50px",base:"45px"}} src="https://m.media-amazon.com/images/G/31/perc/prime-logo.svg" />
      </Box>

      <Button class="add-to-cart-btn"  >
        Add To Cart
      </Button>



    </Box>
  )
}

export default ProductCard