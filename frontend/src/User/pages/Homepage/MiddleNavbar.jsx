import React from "react";
import {
  Box,
  Flex,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  HStack,
  MenuItem,
  Image,
  Grid,
  VStack,
  Divider,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Link as MyLink } from "react-router-dom";
import Logo_smart_cart from "./favicon.ico";

const MiddleNavbar = () => {
  const navigate = useNavigate();

  return (
    <Box my="-2.5" paddingTop={"3"}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="90px"
        bgColor={"rgb(19,25,33)"}
        color={"rgb(255,255,255)"}
      >
        <Flex>
          <Box>
            <Flex alignItems="center" justifyContent="center" gap={1}>
              <Link textDecorationLine={"none!important"} onClick={() => navigate("/")}>
                <Flex gap={1.5}>
                  <Image
                    w="40px"
                    src={Logo_smart_cart}
                    // ml={4}
                    alt="Buyify Logo"
                  />
                  <Text
                    fontWeight={600}
                    fontSize={"24px"}
                    letterSpacing={".5px"}
                  >
                    Buyify
                  </Text>
                </Flex>
              </Link>

              <Menu w="10px">
                <MenuButton
                  fontSize={"16px"}
                  fontWeight={"500"}
                  // lineHeight={"15px"}
                  px={"4"}
                  as={Text}
                  // mt={"-15px"}
                >
                  
                  <span style={{color: 'white'}}>All</span>
                  
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList color="black">
                  <HStack>
                    <Grid>
                      <MenuItem>
                        <b>Musical instruments</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Guitar</MenuItem>
                      <MenuItem>Pro audio equipment</MenuItem>
                      <MenuItem>String</MenuItem>
                      <MenuItem>Stage lighting & effects</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Home & garden</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Yard & garden</MenuItem>
                      <MenuItem>Crafts</MenuItem>
                      <MenuItem>Home improvement</MenuItem>
                      <MenuItem>Pet supplies</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Sporting goods</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Outdoor sports</MenuItem>
                      <MenuItem>Team sports</MenuItem>
                      <MenuItem>Exercise & fitness</MenuItem>
                      <MenuItem>Golf</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Electronics</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Computers & tablets</MenuItem>
                      <MenuItem>Cameras & photo</MenuItem>
                      <MenuItem>TV, audio & surveillance</MenuItem>
                      <MenuItem>cell phones & accessories</MenuItem>
                    </Grid>
                  </HStack>
                  <br />

                  <HStack>
                    <Grid>
                      <MenuItem>
                        <b>Auto Parts</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>GPS & Security Devices</MenuItem>
                      <MenuItem>Radar & Laser Detectors</MenuItem>
                      <MenuItem>Care & Detailing</MenuItem>
                      <MenuItem>Scooter Parts</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Toys & hobbies</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Radio control</MenuItem>
                      <MenuItem>Kids toys</MenuItem>
                      <MenuItem>Action figures</MenuItem>
                      <MenuItem>Dolls & bears</MenuItem>
                    </Grid>

                    <Grid>
                      <MenuItem>
                        <b>Collectibles & art</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Collectibles</MenuItem>
                      <MenuItem>Antiques</MenuItem>
                      <MenuItem>Sports memorabilia</MenuItem>
                      <MenuItem>Art</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Fashion</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Women & Accessories</MenuItem>
                      <MenuItem>Men & Accessories</MenuItem>
                      <MenuItem>Jewelry & watches</MenuItem>
                      <MenuItem>Shoes & Sleepers</MenuItem>
                    </Grid>
                  </HStack>
                </MenuList>
              </Menu>
            </Flex>
          </Box>

          <Box>
            <InputGroup>
              <Input
                focusBorderColor="rgb(255,153,0)"
                w={630}
                colorScheme="green"
                bg="white"
                variant="outline"
                placeholder="Search Buyify"
                fontSize={"16px"}
                fontWeight={"400"}
                // lineHeight={"18px"}
                color="black"
              />
              <InputRightElement>
                <Tooltip
                  padding={2}
                  borderRadius={"5px"}
                  hasArrow
                  label="Search Products"
                  bg={"rgb(254,189,105)"}
                  color={"black"}
                >
                  <SearchIcon
                    color={"black"}
                    bg={"rgb(254,189,105)"}
                    fontSize={"40px"}
                    padding={2.5}
                    borderRadius={"0px 5px 5px 0px"}
                  />
                </Tooltip>
              </InputRightElement>
            </InputGroup>
          </Box>
          {/* <Button
            paddingX={"30px"}
            bg={"rgb(254,189,105)"}
            border={"1px solid black"}
            borderColor={"rgb(254,189,105)"}
            color={"rgb(51,51,51)"}
            _hover={{ bg: "rgb(51,51,51)", color: "rgb(254,189,105)" }}
            fontSize={"17px"}
            fontWeight={"500"}
          >
            Search
          </Button> */}

          <Menu w="10px">
            <MenuButton
              fontSize={"16px"}
              fontWeight={"500"}
              px={"4"}
              as={Text}
              py="2"
            >
              <span style={{color: 'white'}}>Language</span>
               <ChevronDownIcon />
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <Grid>
                <MenuItem>हिंदी - Hindi</MenuItem>
                <MenuItem>मराठी - Marathi</MenuItem>
                <MenuItem>தமிழ் - Tamil</MenuItem>
                <MenuItem>తెలుగు - Telugu</MenuItem>
                <MenuItem>ಕನ್ನಡ - Kannada</MenuItem>
                <MenuItem>മലയാളം - Malayam</MenuItem>
                <MenuItem>বাংলা - Bangla</MenuItem>
                <MenuItem>ଓଡିଆ - Odia</MenuItem>
                <MenuItem>অসমীয়া - Assamese</MenuItem>
                <MenuItem>سنڌي - Sindhi</MenuItem>
              </Grid>
            </MenuList>
          </Menu>

          <Flex
            fontSize={"16px"}
            fontWeight={"500"}
            // px={"4"}
            // py="2"
            alignItems={"center"}
            gap={"7"}
          >
            <Menu m="10px">
              <MenuButton as={Text} color="white">
              <span style={{color: 'white'}}>Download App</span>
                
              </MenuButton>
              <MenuList color="black">
                <MenuItem>
                  <Link>Download app to get up to 50% off</Link>
                </MenuItem>
                <MenuItem>
                  <HStack>
                    <Box>
                      <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" />
                    </Box>
                    <VStack>
                      <Image
                        borderRadius="5"
                        src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                      />
                      <Image
                        borderRadius="5"
                        src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                      />
                      <Image
                        borderRadius="5"
                        src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
                      />
                    </VStack>
                  </HStack>
                </MenuItem>
                <Divider />
                <MenuItem mt={3}>
                  <Link>Go to Mobile Site</Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Box marginBottom={"10px"}>
              <Text
                fontSize={"11px"}
                fontWeight={"400"}
                justifyContent={"flex-start"}
                marginBottom={"-7px"}
                // marginLeft={"-90px"}
              >
                Hello,
              </Text>
              <MyLink to="/login">LogIn</MyLink> or{" "}
              <MyLink to="/signup">SignUp</MyLink>
            </Box>
            <MyLink to="/cart">
              <ShoppingCartIcon />
            </MyLink>
            <MyLink to="/admin">Admin</MyLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MiddleNavbar;
