import { Box, Flex, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Bodyfourchildcard from "./Bodyfourchildcard";
import { Link } from "react-router-dom";

const Details = [
  {
    src: "https://img.freepik.com/premium-psd/men-fashion-sale-social-media-banner_118099-396.jpg?w=360",
    OFF: "20%",
    Product: "Men's Clothing",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://www.qbd.com.au/img/products/0/9781910496145.jpg",
    OFF: "35%",
    Product: "Women's Dress",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://cdn.create.vista.com/downloads/8d2e6471-24c5-4d0a-8aaa-a484bb70a61c_450.jpeg",
    OFF: "25%",
    Product: "Shoes & Bags",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://cdn.create.vista.com/downloads/8b52181e-33fb-4ce5-b11b-106cbe05a5a9_450.jpeg",
    OFF: "50%",
    Product: "Trending Fashion",
    Price: "",
    SPrice: "",
  },
];

const Bodyfourcard = () => {
  return (
    <> 
      <Flex bg={"white"} justifyContent={"space-around"}>
        <Box display={{ base: "none",lg:"block"}}>
          <Image
            height={"80%"}
            width="90%"
            src="https://img.freepik.com/premium-vector/summer-sale-promotion-banner-background-seascape-background_1198-677.jpg"
          />
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          // justifyContent={{ base: "center", sm: "center" }}
          align="center"
          gap={7}
        >
          {Details.map((el) => (
            <Bodyfourchildcard key={el.Product} {...el} />
          ))}
        </SimpleGrid>
      </Flex>
      
    </>
  );
};

export default Bodyfourcard;
