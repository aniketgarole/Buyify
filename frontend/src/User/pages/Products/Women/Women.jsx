import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, Flex, Heading, Image, Select, Text, Grid, Stack, Skeleton } from "@chakra-ui/react"
import { useLocation, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../../../../redux/productReducer/action'
import ProductCard from "../../../components/Product/ProductCard"
import WomenSidebar from "./WomenSidebar"
import WomenDrawer from './WomenDrawer'


function Women() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { product, isLoading, isError } = useSelector((store) => store.ProductReducer)
  const [searchParams, setSearchParams] = useSearchParams()
  const initialOrder = searchParams.get("order")
  const [order, setOrder] = useState(initialOrder || "")
  const initialCategory = searchParams.getAll("category")
  const [category] = useState(initialCategory || [])
  
  const initialBrand = searchParams.getAll("brand")
  const [brand] = useState(initialBrand || [])
 

  const data = product.filter((item) => {
    if (item.category == "Womens") {
      return item;
    }
  })

  console.log(data)
 
  let obj = {
    params: {
      subCategory: searchParams.getAll("category"),
      sort: searchParams.get("order") && "offerPrice",
      order: searchParams.get("order"),
      brand: searchParams.getAll("brand"),
      // rating: searchParams.get("rating"),
    }

  }

  useEffect(() => {
    dispatch(GetProduct(obj))
  }, [location.search])

  useEffect(() => {
    let params = {
    }
    if (order && category && brand) {
      params.order = order
      params.sort= "offerPrice"
      params.category = category
      params.brand = brand
    }
    order && (params.order = order)
    category && (params.category = category)
    brand && (params.brand = brand)
    // rating && (params.rating = Math.floor(rating))

    setSearchParams(params)
  }, [order, category, brand])
  return (

    <Box>
      {/* dummynavbar */}

      <Box border="1px solid #dadede" padding={10} bgColor="teal.100">
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

        {/* <Box mt={3} mr="10px">
          <Select placeholder='Sort by: Featured' size='sm' borderRadius={20} bgColor='gray.200' _hover={{ bgColor: 'gray.300' }} borderColor='#e78420' onChange={handleSort}>
            <option value='1' name="order" >Price: Low to High</option>
            <option value='-1' name="order">Price: High to Low</option>

          </Select>
        </Box> */}


      </Flex>


      <Flex mt={3}
        // border="1px solid #dadede"
        justifyContent={"center"}>
        <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }} width="300px"
        //  border="1px solid #dadede"
        >
          <WomenSidebar/>
        </Box>
        <Box width="100%"
        // border="1px solid red" 
        >
          <Grid pr="5px" pl="5px" templateColumns={{ sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={{ base: 1, sm: 5, md: 8, lg: 8 }}>
            {isLoading ? [...Array(15).keys()].map((item) => {
              return (
                <Stack key={item}>
                  <Skeleton
                    height={{ base: "210px", md: "280px" }}
                    width={{ base: "150px", sm: "280px", md: "150px", lg: "280px" }}
                    borderRadius={"sm"}
                  />
                  <Skeleton width={{ base: "150px", sm: "280px", md: "150px", lg: "280px" }} height="16px" borderRadius={"sm"} />
                  <Skeleton width={{ base: "150px", sm: "280px", md: "150px", lg: "280px" }} height="16px" borderRadius={"sm"} />
                  <Skeleton width={{ base: "150px", sm: "280px", md: "150px", lg: "280px" }} height="16px" borderRadius={"sm"} />
                </Stack>
              );
            }) :
              data.map((item, i) => {
                return (
                  <ProductCard key={item.id} data={item} />
                )
              })}
          </Grid>
        </Box>
      </Flex>
      <Heading>Pagination</Heading>


      <Flex pos={"fixed"} bottom="0" width="100%" display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
        <WomenDrawer/>
      </Flex>

    </Box>

  )
}

export default Women