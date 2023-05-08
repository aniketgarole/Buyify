import { Box, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";
import Bodyfivecard from "./Bodyfivecard";

const Bodyfive = () => {
  return (
    <Box mx={"5"} my={"10"} textAlign={"left"} bg={"white"} padding={"4"}>
      <Flex
        alignItem="center"
        my={"2"}
        gap={3}
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
      >
        <Text fontWeight={700} fontSize="21px">
          Upto 75% off on Home Decor |
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
      <Bodyfivecard />
    </Box>
  );
};

export default Bodyfive;
