import { Box, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";
import Bodyfourcard from "./Bodyfourcard";

const Bodyfour = () => {
  return (
    <Box
      mx={"5"}
      my={"6"}
      textAlign={{ base: "center", sm: "center", md: "left" }}
      bg={"white"}
      padding={"4"}
    >
      <Flex
        alignItem="center"
        my={"2"}
        gap={3}
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "13px", sm: "15px", md: "21px" }}
        >
          Great Summer Sale |
        </Text>
        <Link
          alignItem="center"
          fontSize={{ base: "10px", sm: "12px", md: "14px" }}
          fontWeight={500}
          mt={1.5}
          color="teal"
        >
          See all deals
        </Link>
      </Flex>
      <Bodyfourcard />
    </Box>
  );
};

export default Bodyfour;
