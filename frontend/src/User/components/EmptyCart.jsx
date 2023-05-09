import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    
      <Flex
        // border={"1px solid black"}
        width={["100%","100%", "80%"]}
        m={["10px", "20px"]}
        flexDirection={["column", "row"]}
        boxShadow='base'
        gap={"10px"}
       
      >
        <Box>
          <Image src="/emptycart.png" h={["200px", "300px"]} />
        </Box>
        <Box   flex={1} mt={"40px"} >
          <Heading as="h3" size="lg">
            Your Amazon Cart is empty
          </Heading>
          <Text fontSize={["sm", "md"]} color={"#007185"} mt={["10px", "15px"]}>
          <Link to="/men">Shop today’s deals</Link>  
          </Text>
          <Flex
            justifyContent={["space-between", "space-between"]}
            mt="20px"
            width={["100%", "100%","100%"]}
            flexDirection={["column", "column","row"]}
            gap={"10px"}
          mb={"50px"}
          >
            <Button colorScheme="yellow"> <Link to="/men">Browse Products</Link></Button>

            
          </Flex>
        </Box>
      </Flex>
   
  );
};

export default EmptyCart;
