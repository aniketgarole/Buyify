import { Box, Checkbox, Flex, Heading, Radio, RadioGroup, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useSearchParams } from 'react-router-dom'

function WomenSidebar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [category, setCategory] = useState(initialCategory || [])
  const initialBrand = searchParams.getAll("brand")
  const [brand, setBrand] = useState(initialBrand || [])
  const initialOrder = searchParams.get("order")
  const [order, setOrder] = useState(initialOrder || "")

  const handleChange = (e) => {
    // console.log(e.target.value)
    let newCategory = [...category]
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value)
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory)
    console.log("22", category)
  }

  const handleChangeBrand = (e) => {
    // console.log(e.target.value)
    let newBrand = [...brand]
    const value = e.target.value;
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value)
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand)
    console.log("22", category)
  }
 const handleSort = (e) => {
    setOrder(e.target.value)
  }

  useEffect(() => {
    let params = {
      category,
      brand,
      order,

      // category =[male,female,kids]
    }

    setSearchParams(params)

  }, [category, brand,order])

  //  console.log("34",searchParams.getAll())
  return (
    <>
      <Box>
        <Flex flexDir="column" ml="10px">


        <Box mt={3} mr="10px" mb="50px">
            <Select placeholder='Sort by: Featured' size='sm' borderRadius={20} bgColor='gray.200' _hover={{ bgColor: 'gray.300' }} borderColor='#e78420' onChange={handleSort}>
              <option value='1' name="order" >Price: Low to High</option>
              <option value='-1' name="order">Price: High to Low</option>
            </Select>
          </Box>
          <Text fontWeight={"bold"} fontSize={"1.2rem"} color={"#d68009"} _hover={{ color: "#463012", cursor: "pointer" }}>Filter your Products </Text>




          <Text fontWeight={"bold"} mt="20px">Category</Text>
          <Flex flexDir={"column"} fontWeight={"semibold"}>

            <Checkbox value={"Jeans"} onChange={handleChange} defaultChecked={category.includes("Jeans")} >Jeans</Checkbox>
            <Checkbox value={"SweatShirt"} onChange={handleChange} defaultChecked={category.includes("SweatShirt")} >SweatShirt</Checkbox>
            <Checkbox value={"Tshirt"} onChange={handleChange} defaultChecked={category.includes("Tshirt")} >Tshirt</Checkbox>
            <Checkbox value={"Jacket"} onChange={handleChange} defaultChecked={category.includes("Jacket")}>Jacket</Checkbox>
            <Checkbox value={"KurtaSet"} onChange={handleChange} defaultChecked={category.includes("KurtaSet")}>KurtaSet</Checkbox>
            <Checkbox value={"PlazzoSet"} onChange={handleChange} defaultChecked={category.includes("PlazzoSet")}>PlazzoSet</Checkbox>

            <Checkbox value={"Kurta"} onChange={handleChange} defaultChecked={category.includes("Kurta")} >Kurta</Checkbox>
            <Checkbox value={"WesternDress"} onChange={handleChange} defaultChecked={category.includes("WesternDress")}>WesternDress</Checkbox>

          </Flex>




          <Text fontWeight={"bold"} mt="20px">Brands</Text>
          <Flex flexDir={"column"} fontWeight={"semibold"}>
            <Checkbox value="Roadster" onChange={handleChangeBrand} defaultChecked={brand.includes("Roadster")}>Roadster</Checkbox>
            <Checkbox value="U.S. Polo Assn" onChange={handleChangeBrand} defaultChecked={brand.includes("U.S. Polo Assn")} >U.S. Polo Assn</Checkbox>
            <Checkbox value="HIGHLANDER" onChange={handleChangeBrand} defaultChecked={brand.includes("HIGHLANDER")} >HIGHLANDER</Checkbox>
            <Checkbox value="LOCOMOTIVE" onChange={handleChangeBrand} defaultChecked={brand.includes("LOCOMOTIVE")}>LOCOMOTIVE</Checkbox>
            <Checkbox value="Jack & Jones" onChange={handleChangeBrand} defaultChecked={brand.includes("Jack & Jones")}>Jack & Jones</Checkbox>
            <Checkbox value="DENNISON" onChange={handleChangeBrand} defaultChecked={brand.includes("ENNISON")}>DENNISON</Checkbox>
            <Checkbox value="Levis" onChange={handleChangeBrand} defaultChecked={brand.includes("evis")}>Levis</Checkbox>
            <Checkbox value="Urbano Fashion" onChange={handleChangeBrand} defaultChecked={brand.includes("Urbano Fashion")}>Urbano Fashion</Checkbox>

            <Checkbox value="HERE&NOW" onChange={handleChangeBrand} defaultChecked={brand.includes("HERE&NOW")}>HERE&NOW</Checkbox>
          </Flex>


        </Flex>
      </Box>
    </>
  )
}

export default WomenSidebar