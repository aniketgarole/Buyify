import { Box, Image, Link, Tag, Text } from "@chakra-ui/react";
import React from "react";

const Bodyfourchildcard = ({ src, OFF, Product, Price, SPrice }) => {
  return (
    <>
      <Link
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
        textDecoration={"none!important"}
      >
        <Box mb={2}>
          <Image src={src} w={"auto"} h={"250"} />
        </Box>
        <Box>
          <Box lineHeight="1.2">
            {OFF ? (
              <Tag
                variant="solid"
                px={5}
                bg="rgb(254,189,105)"
                color={"black"}
                borderRadius="5"
              >
                {OFF} OFF
              </Tag>
            ) : (
              ""
            )}
            <Text fontSize="13px" fontWeight={600}>
              {Product}
            </Text>
            {SPrice ? (
              <Text as="s" fontSize="14px" color={"gray"}>
                {SPrice}
              </Text>
            ) : (
              ""
            )}
            <Text fontWeight={700} fontSize="15px">
              {Price}
            </Text>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default Bodyfourchildcard;
