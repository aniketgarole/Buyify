



import { Box, Button, Checkbox, Divider, Flex, Grid, Heading, Image, Spinner, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaInfoCircle, FaLock } from 'react-icons/fa'
import { MdLocalOffer } from "react-icons/md"
import { TbThumbUp } from "react-icons/tb"
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { GetSingleProduct } from '../../../redux/productReducer/action'
import { addCartData } from '../../../redux/Cart/Action'
import { UpperNavbar } from '../Homepage/UpperNavbar'
import Footer from '../Homepage/Footer'


function SingleProduct() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { singleProduct } = useSelector((store) => store.ProductReducer)
    // console.log("Page", singleProduct)
    // console.log(Object.keys(singleProduct).length)

    const toast = useToast()
    
    const handleAddToCart = () => {
        const payload = {
            title: singleProduct.title,
            brand: singleProduct.brand,
            offerPrice: singleProduct.offerPrice,
            quantity: 1,
            images: singleProduct.images[0],
        };

        localStorage.setItem("cartData", JSON.stringify(payload));
        dispatch(addCartData(payload));
        toast({
            title: `Successful.`,
            description: `Product added to the cart`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })
    };
    
    useEffect(() => {
        dispatch(GetSingleProduct(id))
    }, [])

    return (
        <>

<UpperNavbar />
            <Flex justifyContent={"space-between"} mb={2}>
                <Box ml="10px" mt={3}>
                    <Text fontSize={{ lg: "1rem", md: "1rem", sm: "1rem", base: "0.7rem" }} textAlign={"left"} fontWeight={"bold"}>Buyify Prime</Text>
                    <Flex gap={2}>
                        <Checkbox></Checkbox>
                        <Image width={{ lg: "50px", md: "50px", sm: "50px", base: "45px" }} src={"https://m.media-amazon.com/images/G/31/perc/prime-logo.svg"} />
                    </Flex>
                </Box>
            </Flex>


            {Object.keys(singleProduct).length == 0 ?
                (<Box align="center">
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Box>
                ) : (
                    <Box>

                        <Box>
                            <Text fontSize={"1.2rem"} fontWeight={"bold"}
                                color="blackAlpha.900">{singleProduct.title}</Text>
                        </Box>

                        <Flex flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }} align={"center"}>
                            <Box mb="20px" >
                                <Flex gap={10} ml={"20px"}>
                                    <Flex mt="15px" flexDir={"column"} gap={2}>
                                        {singleProduct.images?.map((item, i) => {
                                            return <Box
                                                className='SingleImage'
                                                key={i}
                                                border={"1px solid grey"}
                                                p={"5px"}
                                                borderRadius={10}>
                                                <Image
                                                    width={"30px"}
                                                    height={"100%"}
                                                    src={item} />
                                            </Box>
                                        })}
                                    </Flex>
                                    <Box p="35px" borderRadius={"20px"}>
                                        <Image
                                            className='SingleImage'
                                            width={"320px"}
                                            borderRadius={"20px"}
                                            height={"100%"}
                                            src={singleProduct.images[0]} />
                                    </Box>

                                </Flex>
                                <Box mt="30px" ml="10px">

                                    <Flex gap={3}>
                                        <Image width="100px" src="https://m.media-amazon.com/images/I/11sUgaVRsYL.png" />
                                        <Text fontSize={"1.2rem"} fontWeight={"bold"} >{singleProduct.brand}</Text>
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
                            <Box width={{ base: "90%", sm: "90%", md: "80%", lg: "60%" }} pr={"30px"} pl="30px"  >
                                <Divider />
                                <Text
                                    mb={"20px"}
                                    mt="5px"
                                    color={'teal.500'}
                                >Visit the {singleProduct.brand} Store</Text>
                                <Divider />
                                <Text
                                    mt={"5px"}
                                    fontWeight={"bold"}
                                    color={"red.500"}>Summer Sale Deal</Text>
                                <Flex gap={2}>
                                    <Text
                                        color={"red"}
                                        fontSize={"1.6rem"} >-{singleProduct.discount}</Text>
                                    <Text
                                        fontSize={"1.6rem"}
                                        fontWeight="semibold">{singleProduct.offerPrice}</Text>
                                </Flex>
                                <Flex color={"gray.600"} gap={1} >
                                    <Text fontSize={"0.8rem"} >
                                        M.R.P.:
                                    </Text>
                                    <Text fontSize={"0.8rem"} decoration={'line-through'} >
                                        {singleProduct.originalPrice}
                                    </Text>
                                </Flex>

                                <Text
                                    mt={"10px"}
                                    fontSize={"sm"}
                                    fontWeight={"medium"}>Inclusive of all taxes</Text>
                                <Text
                                    mb={"10px"}
                                    fontWeight={"medium"}><b>EMI</b> starts at ₹{Math.floor(singleProduct.offerPrice / 10)} per month.</Text>

                                <Divider />

                                <Flex mt={"10px"} gap={2} >
                                    <Box mt="6px">
                                        <MdLocalOffer fontSize={"1.2rem"} color="orange" />
                                    </Box>

                                    <Text fontSize={"1.2rem"} fontWeight={"semibold"}>Offers</Text>

                                </Flex>

                                <Grid
                                    width="90%"
                                    mt="10px"
                                    mb="30px"
                                    templateColumns={{ sm: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                                    gap={3}>
                                    <Box
                                        pl="10px"
                                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                        borderRadius={10}>
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
                                <Grid width={"75%"} templateColumns={{ sm: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }} justify="left" mt="10px" mb="10px">
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
                                            <TbThumbUp />
                                            <Text fontSize={"0.8rem"}>value for money</Text>
                                        </Flex>
                                        <Flex pr="5px" pl="5px"


                                            bgColor="blackAlpha.300" gap={1}>
                                            <TbThumbUp />
                                            <Text fontSize={"0.8rem"}>value for money</Text>
                                        </Flex>
                                    </Flex>

                                </Box>




                            </Box>

                            <Box mt={{ lg: "-100px", base: 0 }} width={{ base: "90%", sm: "90%", md: "90%", lg: "20%" }}
                                pr="10px" >
                                <Divider />

                                <Flex mt="10px" gap={1} mb="10px" justify={"right"} >
                                    <Text fontWeight={"semibold"} fontSize={"0.7rem"} _hover={{ color: "#d68009", cursor: "pointer" }}>Sponsored </Text>
                                    <Box mt={"5px"}>
                                        <FaInfoCircle fontSize={"0.6rem"} color="grey" />
                                    </Box>
                                </Flex>
                                <Box pl="20px" pr="20px" border="1px solid #dadede" borderRadius={"10px"} pb="20px">
                                    <Text fontWeight="semibold" fontSize={"1.6rem"} mb={"10px"} mt={"10px"}>₹{singleProduct.offerPrice}</Text>
                                    <Text>FREE Delivery  </Text>
                                    <Text fontWeight={"bold"} color={"#007185"}>within 5 days
                                    </Text>

                                    <Text fontSize={"1.2rem"} fontWeight={"semibold"} color="#007652">In stock</Text>
                                    <Text mt="10px" fontWeight={"semibold"} fontSize={"0.9rem"} >Sold by SELLER</Text>
                                    <Text fontSize={"0.9rem"} color={"#007185"} fontWeight={"semibold"}>Delivered by Amazon</Text>




                                    <Button mt="30px" mb="30px" width="95%" borderRadius={"20px"} align="center" bgColor="#ffd814" _hover={{
                                        bgColor: "#eca611"
                                    }} onClick={handleAddToCart} >Add to Cart</Button>

                                    <Flex gap={2}>
                                        <FaLock color="gray.400" />
                                        <Text fontWeight={"medium"} fontSize={"0.9rem"} color={"#007185"} mt="-2px">Secure transaction</Text>
                                    </Flex>
                                    <Flex gap={2} mt="10px">
                                        <Checkbox></Checkbox>
                                        <Text fontSize={"0.9rem"}>Add gift options</Text>
                                    </Flex>


                                </Box>

                                <Text
                                    mt="20px"
                                    mb="10px"
                                    align={"center"}
                                    fontSize={"0.9rem"}
                                    color="gray.400">Have one to sell?</Text>
                                <Box
                                    p="5px"
                                    borderRadius="10px"
                                    margin={"auto"}
                                    border="1px solid #bdc2c2"
                                    width="150px">
                                    <Text align={"center"} fontSize={"0.9rem"} >Sell on Amazon</Text>
                                </Box>

                            </Box >

                        </Flex>




                    </Box>)}








                    <Footer /> 

        </>
    )
}


export default SingleProduct