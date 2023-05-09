import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Exploremore = () => {
  return (
    <Flex
      display={{ base: "none", sm: "none", md: "flex" }}
      justifyContent={"space-between"}
      marginY={"50px"}
      marginX={"20px"}
      height={130}
      bg={"RGB(47 241 234)"}
      paddingX={"60px"}
    >
      <HStack>
        <Box color={"rgb(36,61,83)"} textAlign={"left"}>
          <Text fontSize={"25px"} fontWeight={"700"} lineHeight={"34px"}>
            Explore more to get all latest updates about Buyify ?
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"16px"}
            mt={"5px"}
          >
            for any kind of query or ask questions
          </Text>
        </Box>
      </HStack>
      <HStack>
        <Button
          paddingX={"10px"}
          paddingY={"20px"}
          bg={"rgb(36,61,83)"}
          border={"1px solid RGB(94 21 21)"}
          borderColor={"rgb(13,81,45)"}
          color={"rgb(47,241,234)"}
          _hover={{
            bg: "rgb(47,241,234)",
            color: "rgb(36,61,83)",
            border: "1.5px solid rgb(36,61,83)",
          }}
          gap={1}
        >
          Explore Now! <ArrowForwardIcon />
        </Button>
      </HStack>
    </Flex>
  );
};
