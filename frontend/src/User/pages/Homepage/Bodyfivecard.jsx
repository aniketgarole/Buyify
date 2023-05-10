import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Bodyfourchildcard from "./Bodyfourchildcard";

const Details = [
  {
    src: "https://ksioks.com/wp-content/uploads/2020/05/Furniture-sale-flyer-template.jpg",
    OFF: "50%",
    Product: "Complete Home Decor",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6S3arMoymAN9Z6gmhgAj4SdmR3zU9b9ftg&usqp=CAU",
    OFF: "20%",
    Product: "Lamps & Plants",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO5hMy1KsVWWJxF5F_eOHmxNQ_Mlchr-lwg&usqp=CAU",
    OFF: "30%",
    Product: "Paintings",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-furniture-sale-flyer-design-template-2cd1b1fcf424883cb6f236d398471c4f_screen.jpg?ts=1637023855",
    OFF: "40%",
    Product: "Update Furniture",
    Price: "",
    SPrice: "",
  },
];

const Bodyfivecard = () => {
  return (
    <Flex bg={"white"} justifyContent={"space-around"}>
      <Box display={{ base: "none", lg: "block" }}>
        <Image
          height={"80%"}
          width="90%"
          src="https://images.all-free-download.com/images/graphiclarge/house_decor_sale_poster_template_elegant_colored_classic_6848875.jpg"
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

export default Bodyfivecard;
