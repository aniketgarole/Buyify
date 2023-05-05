import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, Flex, Heading, Image, Select, Text } from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
import MenProducts from './MenProducts'
import Sidebar from './Sidebar'
import FiltersDrawer from './FiltersDrawer'


function Men() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialOrder = searchParams.get("order")
  const [ order, setOrder]= useState( initialOrder||"")
  
  const handleSort=(e)=>{
      setOrder(e.target.value)
    }
    useEffect(() => {
      let params = {
      }
      order && (params.order=order)
      setSearchParams(params)
    }, [order])
  return (

    <Box>
      {/* dummynavbar */}

      <Box border="1px solid black" padding={10} bgColor="teal.100">
        <Heading>Navbar</Heading>
      </Box>
      <Flex justifyContent={"space-between"}>
        <Box ml="10px" mt={3}>
          <Text fontSize={{ lg: "1rem", md: "1rem", sm: "1rem", base: "0.7rem" }} textAlign={"left"} fontWeight={"bold"}>Buyify Prime</Text>
          <Flex gap={2}>
            <Checkbox></Checkbox>
            <Image width={{ lg: "50px", md: "50px", sm: "50px", base: "45px" }} src="https://m.media-amazon.com/images/G/31/perc/prime-logo.svg" />
          </Flex>
        </Box>

        <Box mt={3} mr="10px">
          <Select placeholder='Sort by: Featured' size='sm' borderRadius={20} bgColor='gray.200' _hover={{ bgColor: 'gray.300' }} borderColor='#e78420' onChange={handleSort}>
            <option value='asc' >Price: Low to High</option>
            <option value='desc'>Price: High to Low</option>

          </Select>
        </Box>


      </Flex>


      <Flex mt={3} border="1px solid gray" justifyContent={"center"}>
        <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }} width="300px" border="1px solid grey">
          <Sidebar />
        </Box>
        <MenProducts />
      </Flex>

      <Flex pos={"fixed"} bottom="0" width="100%" display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
        <FiltersDrawer />
      </Flex>

    </Box>

  )
}

export default Men