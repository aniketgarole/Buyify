import { Box, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";
import Bodysixcard from "./Bodysixcard";

const Bodysix = () => {
  return (
    <Box
      mx={"5"}
      my={"10"}
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
          Starting ₹499 Buyify Brands & More |
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
      <Bodysixcard />
    </Box>
  );
};

export default Bodysix;
