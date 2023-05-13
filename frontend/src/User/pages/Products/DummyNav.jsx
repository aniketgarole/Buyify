import {
    Text,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    VStack,
    Image,
    Grid,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";

function DummyNav() {
  return (
    <Flex justifyContent={"space-between"}
     paddingY={"5px"}
    bgColor={"rgb(35,47,62)"}
    color={"rgb(255,255,255)"}>
        <Link to="/">
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              
            >
              <span style={{color: "white"}}>Home</span>
              
            </MenuButton>
          </Menu>
        </Link>
        <Box display={{base:"none",sm:"block",md:"block",lg:"block"}}>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
            >
              <span style={{color: "white"}}>miniTV</span>
              
            </MenuButton>
          </Menu>
        </Box>
        <Box display={{base:"block",lg:"none"}}>
            <Link to="/men">
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
            >
              <span style={{color: "white"}}>Men</span>
              
            </MenuButton>
          </Menu>
          </Link>
        </Box>
        <Box display={{base:"block",lg:"none"}}>
        <Link to="/women">
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
            >
              <span style={{color: "white"}}>Women</span>
              
            </MenuButton>
          </Menu>
          </Link>
        </Box>
        <Box display={{base:"none",lg:"block"}}>
       
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              <span style={{color: "white"}}>Sell</span>
              
            </MenuButton>
            <MenuList zIndex={3} color="black" >
              <HStack>
                <Grid>
                  <MenuItem>How to create a listing</MenuItem>
                  <MenuItem>Join our growth program</MenuItem>
                  <MenuItem>Seller center</MenuItem>
                  <MenuItem>Seller updates</MenuItem>
                  <MenuItem>Seller customer service</MenuItem>
                  <MenuItem>Buyify managed payments</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>Learn to sell</MenuItem>
                  <MenuItem>Buyify stores</MenuItem>
                  <MenuItem>Buyify fees</MenuItem>
                  <MenuItem>Selling limits</MenuItem>
                </Grid>
                <VStack>
                  <Image height={"200px"} width="80%" src="https://ir.ebaystatic.com/cr/v/c1/ROW-19400_Fallback_Sell_770x270_ROW.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
       
        </Box>

        <Box display={{base:"none",lg:"block"}}>
        <Menu w="10px">
          <MenuButton
            fontSize={"15px"}
            fontWeight={"500"}
            px={"3"}
            as={Text}
            py="1"
            borderRadius={5}
          >
            <span style={{color: "white"}}>Fashion</span>
            
          </MenuButton>
          <MenuList zIndex={3} color="black">
            <HStack>
              <Grid>
                <MenuItem>
                  <b>Most popular categories</b>
                </MenuItem>

                <Link>
                  <MenuItem>Footwear</MenuItem>
                </Link>
                <Link to="/women">
                  <MenuItem>Women's clothing</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Footwear for women</MenuItem>
                </Link>
                <Link to={"/men"}>
                  <MenuItem>Men's clothing</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Men's footwear</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Watches</MenuItem>
                </Link>
              </Grid>
              <Grid>
                <MenuItem>
                  <b>More categories</b>
                </MenuItem>
                <MenuItem>Accessories for men</MenuItem>
                <MenuItem>Accessories for women</MenuItem>
                <MenuItem>Bags and wallets for women</MenuItem>
                <MenuItem>Mens sunglasses</MenuItem>
                <MenuItem>Womens sunglasess</MenuItem>
                <MenuItem>Sneakers</MenuItem>
              </Grid>
              <VStack>
                <Image height={"200px"} width="80%" src="https://ir.ebaystatic.com/cr/v/c01/ROW-19393_Fallback_Moda_770x270.png"></Image>
              </VStack>
            </HStack>
          </MenuList>
        </Menu>
        </Box>
        <Box display={{base:"none",lg:"block"}}>
        
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              <span style={{color: "white"}}>Sports</span>
              
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Cycling</MenuItem>
                  <MenuItem>Fitness, running and yoga</MenuItem>
                  <MenuItem>Fitness Tech</MenuItem>
                  <MenuItem>Fishing</MenuItem>
                  <MenuItem>Camping</MenuItem>
                  <MenuItem>Scooters</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Watersports</MenuItem>
                  <MenuItem>Winter sports</MenuItem>
                  <MenuItem>Box and MMA</MenuItem>
                  <MenuItem>Swimming</MenuItem>
                  <MenuItem>GPS & Running Watches</MenuItem>
                  <MenuItem>Garmin</MenuItem>
                </Grid>
                <VStack>
                  <Image  height={"200px"} width="80%"  src="https://ir.ebaystatic.com/cr/v/c01/ROW-19396_Fallback_Sports_and_Leisure_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
       
        </Box>

        <Box display={{base:"none",lg:"block"}}>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              <span style={{color: "white"}}>Health & Beauty</span>
              
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Beauty</MenuItem>
                  <MenuItem>Makeup</MenuItem>
                  <MenuItem>Health</MenuItem>
                  <MenuItem>K-Beauty</MenuItem>
                  <MenuItem>Manicure and pedicure</MenuItem>
                  <MenuItem>Hair products</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Vitamins and food supplements</MenuItem>
                  <MenuItem>Shaving and waxing</MenuItem>
                  <MenuItem>Bath and personal hygiene</MenuItem>
                  <MenuItem>Oral hygiene</MenuItem>
                  <MenuItem>Massagers</MenuItem>
                  <MenuItem>Deals</MenuItem>
                </Grid>
                <VStack>
                  <Image  height={"200px"} width="80%" src="https://ir.ebaystatic.com/cr/v/c01/ROW-19394_Fallback_Health_Beauty_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
      
        </Box>
        <Box display={{base:"none",lg:"block"}}>
       
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              <span style={{color: "white"}}>Customer Service</span>
             
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Dental healthcare</MenuItem>
                  <MenuItem>Electronic equipment and supplies</MenuItem>
                  <MenuItem>Metallurgy and manufacturing</MenuItem>
                  <MenuItem>Motors and industrial automation</MenuItem>
                  <MenuItem>Heavy equipment parts</MenuItem>
                  <MenuItem>Light industrial tools</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Packing and shipping</MenuItem>
                  <MenuItem>Office supplies and equipment</MenuItem>
                  <MenuItem>Printing and graphic arts</MenuItem>
                  <MenuItem>Restaurants and food service</MenuItem>
                  <MenuItem>Maintenance and safety</MenuItem>
                  <MenuItem>Retail and services</MenuItem>
                </Grid>
                <VStack>
                  <Image  height={"200px"} width="80%" src="https://ir.ebaystatic.com/cr/v/c01/ROW-19398_Fallback_IndustrialEquipment_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
     
        </Box>
        <Box display={{base:"none",lg:"block"}}>
        
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
            >
              <span style={{color: "white"}}>Electronics</span>
              
            </MenuButton>

            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Smartphones and accessories</MenuItem>
                  <MenuItem>Video games and consoles</MenuItem>
                  <MenuItem>Computers and tablets</MenuItem>
                  <MenuItem>Cameras and photos</MenuItem>
                  <MenuItem>Camera drones</MenuItem>
                  <MenuItem>Refurbished</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Apple</MenuItem>
                  <MenuItem>Samsung</MenuItem>
                  <MenuItem>Portable audio and headphones</MenuItem>
                  <MenuItem>Emerging brands</MenuItem>
                  <MenuItem>Smart watches</MenuItem>
                  <MenuItem>Sell on Buyify</MenuItem>
                </Grid>
                <VStack>
                  <Image  height={"200px"} width="80%" src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
       
        </Box>
        <Box display={{base:"none",lg:"block"}}>

          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              <span style={{color: "white"}}>Home Decor</span>
              
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Workshop Tools and Equipment</MenuItem>
                  <MenuItem>Patio, garden and outdoors</MenuItem>
                  <MenuItem>Home improvement</MenuItem>
                  <MenuItem>Kitchen, dining and bar</MenuItem>
                  <MenuItem>Lamps, lights and fans</MenuItem>
                  <MenuItem>Interior decoration</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Toys</MenuItem>
                  <MenuItem>Pets</MenuItem>
                  <MenuItem>Crafts</MenuItem>
                  <MenuItem>Art supplies</MenuItem>
                  <MenuItem>Musical instruments</MenuItem>
                  <MenuItem>Jewelry and beads</MenuItem>
                </Grid>
                <VStack>
                  <Image  height={"200px"} width="80%" src="https://ir.ebaystatic.com/cr/v/c01/ROW-19395_Fallback_Home_Garden_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        
        </Box>
        <Box display={{base:"none",lg:"block"}}>
          <Menu w="10px" > 
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              <span style={{color: "white"}}>Today's Deals</span>
              
            </MenuButton>
          </Menu>
        </Box>

    </Flex>
  )
}

export default DummyNav