import { Box, Checkbox, CheckboxGroup, Flex, Heading, Radio, RadioGroup, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useSearchParams } from 'react-router-dom'

function WomenSidebar({
  subcategory,
  setsubCategory,
  brand,
  setBrand,
  setPage,
}) {
  const handleCategory = (e) => {
    setsubCategory(e)
    setPage(1)
  }
  const handleChangeBrand = (e) => {
    setBrand(e)
    setPage(1)
  }

  return (
    <>
      <Box>
        <Flex flexDir="column" ml="10px">
          <Text fontWeight={"bold"} fontSize={"1.2rem"} color={"#d68009"} _hover={{ color: "#463012", cursor: "pointer" }}>Filter your Products </Text>




          <Text fontWeight={"bold"} mt="20px">Category</Text>
          <Flex flexDir={"column"} fontWeight={"semibold"}>
            <CheckboxGroup
              value={subcategory}
              defaultValue={subcategory}
              onChange={handleCategory}
            >
              <Checkbox value={"Jeans"} >Jeans</Checkbox>
              <Checkbox value={"SweatShirt"}  >SweatShirt</Checkbox>
              <Checkbox value={"Tshirt"} >Tshirt</Checkbox>
              <Checkbox value={"Jacket"}>Jacket</Checkbox>
              <Checkbox value={"KurtaSet"}>KurtaSet</Checkbox>
              <Checkbox value={"PlazzoSet"} >PlazzoSet</Checkbox>
              <Checkbox value={"Kurta"}>Kurta</Checkbox>
              <Checkbox value={"WesternDress"}>WesternDress</Checkbox>
            </CheckboxGroup>

          </Flex>




          <Text fontWeight={"bold"} mt="20px">Brands</Text>
          <Flex flexDir={"column"} fontWeight={"semibold"}>
            <CheckboxGroup
              defaultValue={brand}
              value={brand}
              onChange={handleChangeBrand}
            >
              <Checkbox value="Roadster">Roadster</Checkbox>
              <Checkbox value="U.S. Polo Assn" >U.S. Polo Assn</Checkbox>
              <Checkbox value="HIGHLANDER" >HIGHLANDER</Checkbox>
              <Checkbox value="Jack & Jones" >Jack & Jones</Checkbox>
              <Checkbox value="HERE&NOW">HERE&NOW</Checkbox>
            </CheckboxGroup>
          </Flex>


        </Flex>
      </Box>
    </>
  )
}

export default WomenSidebar