import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Select,
  Text,
  Grid,
  Stack,
  Skeleton,
  ButtonGroup,
} from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
// import MenProducts from './MenProducts'
import Sidebar from "./Sidebar";
import FiltersDrawer from "./FiltersDrawer";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../../../redux/productReducer/action";
import ProductCard from "../../../components/Product/ProductCard";
import Nodata from "../../../Assets/Nodata.jpg";

import Footer from "../../Homepage/Footer";
import { UpperNavbar } from "../../Homepage/UpperNavbar";


function Men() {
  const dispatch = useDispatch();
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState(searchParams.get("order") || "");
  const [subcategory, setsubCategory] = useState( searchParams.getAll("subcategory") || []);
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  const [category, setCategory] = useState(searchParams.getAll("category") || []);

  const { product, isLoading, isError } = useSelector( (store) => store.ProductReducer);

  let limit = 20;

  let obj = {
    params: {
      subCategory: subcategory,
      sort: searchParams.get("order") && "offerPrice",
      order: order,
      brand: brand,
      limit: limit,
      page: page,
      category: category,
    },
  };
  
  let params = {};
  params.category = "Mens";
  order && (params.order = order);
  subcategory && (params.subcategory = subcategory);
  brand && (params.brand = brand);
  page && (params.page = page);
  params.limit = limit;
 

  const handlePage = (val) => {
    setPage(page + val);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    setCategory("Mens");
    setSearchParams(params);
    dispatch(GetProduct(obj));
  }, [order, subcategory, brand, page, category,location.search]);

  return (
    <>

      <UpperNavbar />
      <Box>
        <Flex justifyContent={"space-between"}>
          <Box ml="10px" mt={3}>
            <Text
              fontSize={{ lg: "1rem", md: "1rem", sm: "1rem", base: "0.7rem" }}
              textAlign={"left"}
              fontWeight={"bold"}
            >
              Buyify Prime
            </Text>
            <Flex gap={2}>
              <Checkbox></Checkbox>
              <Image
                width={{ lg: "50px", md: "50px", sm: "50px", base: "45px" }}
                src="https://m.media-amazon.com/images/G/31/perc/prime-logo.svg"
              />
            </Flex>
          </Box>
          <Box mt={3} mr="10px" mb="50px">
            <Select
              placeholder="Sort by: Featured"
              size="sm"
              borderRadius={20}
              bgColor="gray.200"
              _hover={{ bgColor: "gray.300" }}
              borderColor="#e78420"
              onChange={handleSort}
            >
              <option value="1" name="order">
                Price: Low to High
              </option>
              <option value="-1" name="order">
                Price: High to Low
              </option>
            </Select>
          </Box>
        </Flex>

        <Flex
          mt={"-10px"}
          // border="1px solid #dadede"
          justifyContent={"center"}
        >
          <Box
            display={{ base: "none", lg: "block" }}
            width="300px"
            //  border="1px solid #dadede"
          >
            <Sidebar
              brand={brand}
              setBrand={setBrand}
              subcategory={subcategory}
              setsubCategory={setsubCategory}
              setPage={setPage}
            />
          </Box>

          <Box
            width="100%"
            mb="100px"
            // border="1px solid red"
            height="100vh"
            overflowY={"scroll"}
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
            }}
          >
            {product.length === 0 && isLoading == false ? (
              <Box width="100%">
                {/* <Heading>No Product</Heading> */}
                <Image
                  margin={"auto"}
                  width="80%"
                  height={"80%"}
                  src={Nodata}
                />
              </Box>
            ) : (
              <Grid
                pr="5px"
                pl="5px"
                templateColumns={{
                  sm: "repeat(2, 1fr)",
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={{ base: 1, sm: 5, md: 8, lg: 8 }}
              >
                {isLoading
                  ? [...Array(20).keys()].map((item) => {
                      return (
                        <Stack key={item}>
                          <Skeleton
                            height={{ base: "210px", md: "280px" }}
                            width={{
                              base: "150px",
                              sm: "280px",
                              md: "150px",
                              lg: "280px",
                            }}
                            borderRadius={"sm"}
                          />
                          <Skeleton
                            width={{
                              base: "150px",
                              sm: "280px",
                              md: "150px",
                              lg: "280px",
                            }}
                            height="16px"
                            borderRadius={"sm"}
                          />
                          <Skeleton
                            width={{
                              base: "150px",
                              sm: "280px",
                              md: "150px",
                              lg: "280px",
                            }}
                            height="16px"
                            borderRadius={"sm"}
                          />
                          <Skeleton
                            width={{
                              base: "150px",
                              sm: "280px",
                              md: "150px",
                              lg: "280px",
                            }}
                            height="16px"
                            borderRadius={"sm"}
                          />
                        </Stack>
                      );
                    })
                  : product?.map((item, i) => {
                      return <ProductCard key={item.id} data={item} />;
                    })}
              </Grid>
            )}
            <Box align="center" mt="30px" mb="30px">
              <ButtonGroup gap={5}>
                <Button
                  isDisabled={page == 1}
                  _hover={{ bgColor: "#232f3e", color: "white" }}
                  bgColor={"#ffc266"}
                  onClick={() => handlePage(-1)}
                >
                  ≪Prev
                </Button>
                <Button
                  _hover={{ bgColor: "#232f3e", color: "white" }}
                  bgColor={"#ffc266"}
                >
                  {page}
                </Button>
                <Button
                  _hover={{ bgColor: "#232f3e", color: "white" }}
                  bgColor={"#ffc266"}
                  onClick={() => handlePage(1)}
                >
                  Next≫
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Flex>

        <Flex
          pos={"fixed"}
          bottom="0"
          width="100%"
          display={{ base: "block", lg: "none" }}
        >
        <FiltersDrawer
          brand={brand}
          setBrand={setBrand}
          subcategory={subcategory}
          setsubCategory={setsubCategory}
          setPage={setPage}
        />
      </Flex>
    </Box>
    <Footer /> 
          </>

  );
}

export default Men;
