import { Box, Checkbox, CheckboxGroup, Flex, Text } from '@chakra-ui/react'
import React from 'react'


  function Sidebar({
    subcategory,
    setsubCategory,
    brand,
    setBrand,
    setPage,
  }){


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
            <Text
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color={"#d68009"}
              _hover={{ color: "#463012", cursor: "pointer" }}
            >Filter your Products
            </Text>

            <Text fontWeight={"bold"} mt="20px">Category</Text>

            <Flex flexDir={"column"} fontWeight={"semibold"}>
              <CheckboxGroup
                value={subcategory}
                defaultValue={subcategory}
                onChange={handleCategory}>
                <Checkbox value="Joggers"   >Joggers</Checkbox>
                <Checkbox value="shirt"  >Shirts</Checkbox>
                <Checkbox value="Chino" >Chinos</Checkbox>
                <Checkbox value="Jeans"   >Jeans</Checkbox>
                <Checkbox value="Trousers"  >Trousers</Checkbox>
                <Checkbox value="SweatShirt" >SweatShirt</Checkbox>
                <Checkbox value="Tshirt"   >Tshirt</Checkbox>
                <Checkbox value="Jacket"  >Jacket</Checkbox>
                <Checkbox value="Pants"  >Pants</Checkbox>
                <Checkbox value="Shorts"  >Shorts</Checkbox>
              </CheckboxGroup>
            </Flex>


            <Text fontWeight={"bold"} mt="20px">Brands</Text>

            <Flex flexDir={"column"} fontWeight={"semibold"}>
              <CheckboxGroup
                defaultValue={brand}
                value={brand}
                onChange={handleChangeBrand}>
                <Checkbox value="Roadster" >Roadster</Checkbox>
                <Checkbox value="U.S. Polo Assn"  >U.S. Polo Assn</Checkbox>
                <Checkbox value="HIGHLANDER"  >HIGHLANDER</Checkbox>
                <Checkbox value="LOCOMOTIVE" >LOCOMOTIVE</Checkbox>
                <Checkbox value="Jack & Jones" >Jack & Jones</Checkbox>
                <Checkbox value="DENNISON"  >DENNISON</Checkbox>
                <Checkbox value="Levis" >Levis</Checkbox>
                <Checkbox value="Urbano Fashion">Urbano Fashion</Checkbox>
                <Checkbox value="HERE&NOW" >HERE&NOW</Checkbox>
              </CheckboxGroup>
            </Flex>

          </Flex>
        </Box>
      </>
    )
  }

export default Sidebar