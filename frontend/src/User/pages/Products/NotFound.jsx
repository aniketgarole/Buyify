import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import notFound from "../../Assets/NotFound.jpg"
function NotFound() {
  return (
    <>
    
    <Box backgroundColor={"teal.200"} height="100vh">
    <Image width={{lg:"40%",md:"50%",sm:"80%",base:"100%"}} borderRadius={"50%"}  src={notFound} m={"auto"}/>
    </Box>
    
    </>
  )
}

export default NotFound