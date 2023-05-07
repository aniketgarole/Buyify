import { Box, Button, Checkbox, Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInfoCircle, FaLock } from 'react-icons/fa'
import { MdLocalOffer } from "react-icons/md"
import {TbThumbUp}from "react-icons/tb"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function SingleProduct() {
    const { id } = useParams();

    const { product, isLoading, isError } = useSelector((store) => store.ProductReducer)
    const [item] = product.filter((element)=>{
        return element.id==id
    })
    console.log(item)
    const {originalPrice,offerPrice,discount,title,brand,images} = item
    return (
        <>
            <Box  border="1px solid #dadede" padding={10} bgColor="teal.100">
                <Heading>Navbar</Heading>
            </Box>
            <Flex justifyContent={"space-between"} mb={2}>
                <Box ml="10px" mt={3}>
                    <Text fontSize={{ lg: "1rem", md: "1rem", sm: "1rem", base: "0.7rem" }} textAlign={"left"} fontWeight={"bold"}>Buyify Prime</Text>
                    <Flex gap={2}>
                        <Checkbox></Checkbox>
                        <Image width={{ lg: "50px", md: "50px", sm: "50px", base: "45px" }} src={"https://m.media-amazon.com/images/G/31/perc/prime-logo.svg"} />
                    </Flex>
                </Box>
            </Flex>


            <Box>
                <Text fontSize={"1.2rem"} fontWeight={"bold"}
                    color="blackAlpha.900">{title}</Text>
            </Box>
            <Flex flexDir={{base:"column",sm:"column",md:"row",lg:"row"}} align={"center"}>

                <Box   mb="20px" > 
                    <Flex gap={10} ml={"10px"}>
                        <Flex mt="15px" flexDir={"column"} gap={2}>
                            {images?.map((item, i) => {
                                return <Box key={i} border={"1px solid grey"} p={"5px"} borderRadius={10}>
                                    <Image width={"30px"} height={"100%"} src={item} />
                                </Box>
                            })}
                        </Flex>
                        <Box>
                            <Image width={"370px"} height={"100%"} src={images[0]} />
                        </Box>

                    </Flex>
                    <Box mt="30px" ml="10px">

                        <Flex gap={3}>
                            <Image width="100px" src="https://m.media-amazon.com/images/I/11sUgaVRsYL.png" />
                            <Text fontSize={"1.2rem"} fontWeight={"bold"} >{brand}</Text>
                        </Flex>
                        <Flex gap={3} mt="10px">
                            <Image width="20px" src="https://m.media-amazon.com/images/I/01S5bawZYgL.png" />
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>84% positive ratings from 10K+ customers</Text>
                        </Flex>
                        <Flex gap={3} mt="10px">
                            <Image width="20px" src="https://m.media-amazon.com/images/I/01S5bawZYgL.png" />
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>10K+ recent orders from this brand</Text>
                        </Flex>
                        <Flex gap={3} mt="10px">
                            <Image width="20px" src="https://m.media-amazon.com/images/I/01S5bawZYgL.png" />
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>8+ years on Amazon</Text>
                        </Flex>
                    </Box>
                </Box>
                <Box  width={{base:"90%",sm:"90%",md:"40%",lg:"60%"}} pr={"30px"} pl="30px" >
                    <Divider />
                    <Text mb={"20px"} mt="5px" color={'teal.500'} >Visit the {brand} Store</Text>
                    <Divider />
                    <Text mt={"5px"} fontWeight={"bold"} color={"red.500"}>Summer Sale Deal</Text>
                    <Flex gap={2}>
                        <Text color={"red"} fontSize={"1.6rem"} >-{discount}</Text>
                        <Text fontSize={"1.6rem"}  fontWeight="semibold">{offerPrice}</Text>
                    </Flex>
                    <Flex color={"gray.600"} gap={1} >
                        <Text fontSize={"0.8rem"} >
                            M.R.P.:
                        </Text>
                        <Text fontSize={"0.8rem"} decoration={'line-through'} >
                           {originalPrice}
                        </Text>
                    </Flex>

                    <Text mt={"10px"} fontSize={"sm"} fontWeight={"medium"}>Inclusive of all taxes</Text>
                    <Text mb={"10px"} fontWeight={"medium"}><b>EMI</b> starts at ₹{Math.floor(offerPrice/10)} per month.</Text>

                    <Divider />

                    <Flex mt={"10px"} gap={2} >
                        <Box mt="6px">
                            <MdLocalOffer fontSize={"1.2rem"} color="orange" />
                        </Box>

                        <Text fontSize={"1.2rem"} fontWeight={"semibold"}>Offers</Text>

                    </Flex>

                    <Grid width="90%" mt="10px" mb="30px" templateColumns={{sm:'repeat(2, 1fr)',base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'}}  gap={3}>
                        <Box pl="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={10}>
                            <Text fontSize={"1.1rem"} fontWeight={"semibold"}>Partner Offers</Text>
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>Buy 2 Get 5% Off,</Text>
                            <Text fontWeight={"medium"} fontSize={"0.9rem"} >Buy 3 Get 10% Off</Text>
                            <Text color={"#007185"}
                                fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }} >View products</Text>
                            <Text color={"#007185"} fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>2 offers ›</Text>
                        </Box>
                        <Box pl="10px" borderRadius={10} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
                            <Text fontSize={"1.1rem"} fontWeight={"semibold"}>Cashback</Text>
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>₹200 cashback & ,</Text>
                            <Text fontWeight={"medium"} fontSize={"0.9rem"} >₹1,800 rewards</Text>
                            <Text color={"#007185"}
                                fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>View products</Text>
                            <Text color={"#007185"} fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>2 offers ›</Text>
                        </Box>
                        <Box pl="10px" borderRadius={10} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
                            <Text fontSize={"1.1rem"} fontWeight={"semibold"}>Bank Offers</Text>
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>Upto ₹1,000 OFF</Text>
                            <Text fontWeight={"medium"} fontSize={"0.9rem"} >on Credit Cards...</Text>
                            <Text color={"#007185"}
                                fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>View products</Text>
                            <Text color={"#007185"} fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>12 offers ›</Text>
                        </Box>
                        <Box pl="10px" borderRadius={10} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                            <Text fontSize={"1.1rem"} fontWeight={"semibold"}>No Cost EMI</Text>
                            <Text fontSize={"0.9rem"} fontWeight={"medium"}>Avail No Cost EMI</Text>
                            <Text fontWeight={"medium"} fontSize={"0.9rem"} >Orders above ₹3000 </Text>
                            <Text color={"#007185"}
                                fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>View products</Text>
                            <Text color={"#007185"} fontWeight={"medium"}
                                fontSize={"0.9rem"} _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    color: "red",
                                }}>2 offers ›</Text>
                        </Box>


                    </Grid>
                    <Divider />
                    <Grid width={"75%"} templateColumns={{sm:'repeat(3, 1fr)',base:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(6, 1fr)'}} justify="left" mt="10px" mb="10px">
                        <Box align="center" >
                            <Image width="35px" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" />

                            <Text fontSize="12px"
                                color={"#007185"}
                                fontWeight={"medium"}> Free Delivery</Text>
                        </Box>
                        <Box align="center">
                            <Image width="40px" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" />

                            <Text fontSize="12px"
                                color={"#007185"}
                                fontWeight={"medium"}>Pay on Delivery</Text>
                        </Box>
                        <Box align="center">
                            <Image width="40px" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />

                            <Text fontSize="12px"
                                color={"#007185"}
                                fontWeight={"medium"}>10 days Return <br />& Exchange</Text>
                        </Box>
                        <Box align="center">

                            <Image width="40px" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" />



                            <Text fontSize="12px"
                                color={"#007185"}
                                fontWeight={"medium"}>Top Brand</Text>
                        </Box>
                        <Box align="center">
                            <Image width="40px" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" />

                            <Text fontSize="12px"
                                color={"#007185"}
                                fontWeight={"medium"}>Amazon<br />Delivered</Text>
                        </Box>
                        <Box align="center">
                            <Image width="40px" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png" />

                            <Text fontSize="12px"
                                color={"#007185"}
                                fontWeight={"medium"}>Secure<br />Transaction</Text>
                        </Box>

                    </Grid>

                    <Divider />

                    <Flex mt="10px" gap={1} mb="10px">
                        <Text fontWeight={"semibold"} fontSize={"0.7rem"} _hover={{ color: "#d68009", cursor: "pointer" }}>Sponsored </Text>
                        <Box mt={"5px"}>
                            <FaInfoCircle fontSize={"0.6rem"} color="grey" />
                        </Box>
                    </Flex>
                   
                    <Box mt="10px">
                        <Text fontWeight={"bold"}>
                        Highly rated by customers for
                        </Text>
                        <Flex gap={5} mt="10px">
                            <Flex pr="5px" pl="5px"

                            
                               bgColor="blackAlpha.300" gap={1}>
                               <TbThumbUp/>
                                <Text  fontSize={"0.8rem"}>value for money</Text>
                            </Flex>
                            <Flex pr="5px" pl="5px"

                            
                               bgColor="blackAlpha.300" gap={1}>
                                  <TbThumbUp/>
                                <Text  fontSize={"0.8rem"}>value for money</Text>
                            </Flex>
                        </Flex>

                    </Box>




                </Box>
                
                <Box  width={{base:"90%",sm:"90%",md:"20%",lg:"20%"}}  
                pr="10px" >
                    <Divider/>
                   
                    <Flex mt="10px" gap={1} mb="10px" justify={"right"} >
                        <Text fontWeight={"semibold"} fontSize={"0.7rem"} _hover={{ color: "#d68009", cursor: "pointer" }}>Sponsored </Text>
                        <Box mt={"5px"}>
                            <FaInfoCircle fontSize={"0.6rem"} color="grey" />
                        </Box>
                    </Flex>
                    <Box pl="20px" pr="20px"  border="1px solid #dadede" borderRadius={"10px"} pb="20px">
                    <Text fontWeight="semibold" fontSize={"1.6rem"} mb={"10px"} mt={"10px"}>₹{offerPrice}</Text>
                    <Text>FREE Delivery  </Text>
                    <Text fontWeight={"bold"}  color={"#007185"}>within 5 days
                    </Text>

                    <Text fontSize={"1.2rem"} fontWeight={"semibold"} color="#007652">In stock</Text>
                    <Text mt="10px"  fontWeight={"semibold"} fontSize={"0.9rem"} >Sold by SELLER</Text>
                    <Text fontSize={"0.9rem"} color={"#007185"} fontWeight={"semibold"}>Delivered by Amazon</Text>
                   
                    

                    
                    <Button mt="30px" mb="30px" width="95%" borderRadius={"20px"} align="center" bgColor="#ffd814"_hover={{
                        bgColor:"#eca611"
                    }} >Add to Cart</Button>
                    
                    <Flex gap={2}>
                       <FaLock  color="gray.400"/>
                        <Text fontWeight={"medium"} fontSize={"0.9rem"} color={"#007185"} mt="-2px">Secure transaction</Text>
                    </Flex>
                    <Flex gap={2} mt="10px">
                    <Checkbox></Checkbox>
                    <Text fontSize={"0.9rem"}>Add gift options</Text>
                    </Flex>
                   
                    
                    </Box>

                    <Text mt="20px" mb="10px"align={"center"} fontSize={"0.9rem"} color="gray.400">Have one to sell?</Text>
                    <Box  p="5px" borderRadius="10px"margin={"auto"} border="1px solid #bdc2c2" width="150px">
                        <Text align={"center"} fontSize={"0.9rem"} >Sell on Amazon</Text>
                    </Box>

                </Box >

            </Flex>


        </>
    )
}

export default SingleProduct