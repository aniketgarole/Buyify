import { Box, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";
import Bodyeightcard from "./Bodyeightcard";

const Bodyeight = () => {
  return (
    <Box mx={"5"} my={"10"} textAlign={"left"} bg={"white"} padding={"4"}>
      <Flex
        alignItem="center"
        my={"2"}
        gap={3}
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
      >
        <Text fontWeight={700} fontSize="21px">
          Explore Trending Kids Fashion |
        </Text>
        <Link
          alignItem="center"
          fontSize="14px"
          fontWeight={500}
          mt={1.5}
          color="teal"
        >
          See all deals
        </Link>
      </Flex>
      <Bodyeightcard />
    </Box>
  );
};

export default Bodyeight;