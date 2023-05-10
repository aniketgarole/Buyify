import { Box, Flex, Image, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Bodyfourchildcard from "./Bodyfourchildcard";

const Details = [
  {
    src: "https://img1.wsimg.com/isteam/ip/833c99b4-a304-435f-8109-c8cedf8c48cf/ols/bbb-face92e.jpg/:/rs=w:1200,h:1200",
    OFF: "",
    Product: "JBL Earbuds",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://i.ebayimg.com/images/g/PpYAAOSw-Xxi8V3s/s-l500.jpg",
    OFF: "",
    Product: "Boat Earbuds",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://m.media-amazon.com/images/I/71QW3jOe-kL._AC_UF894,1000_QL80_.jpg",
    OFF: "",
    Product: "Skullcandy Earbuds",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://image.kilimall.com/kenya/shop/store/goods/5933/2023/04/168156335643766646877837440c9bdaa52a76124dc12_1280.jpeg.webp",
    OFF: "",
    Product: "Sony Earbuds",
    Price: "",
    SPrice: "",
  },
];

const Bodysevencard = () => {
  return (
    <Flex bg={"white"} justifyContent={"space-around"}>
      <Box display={{ base: "none", lg: "block" }}>
        <Image
          height={"80%"}
          width="90%"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/95cc75bb-2f95-4e09-b927-351c2c5407ee.__CR0,0,970,600_PT0_SX970_V1___.jpg"
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
  );
};

export default Bodysevencard;
