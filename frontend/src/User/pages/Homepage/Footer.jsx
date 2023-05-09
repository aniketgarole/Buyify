import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  HStack,
  Image,
  VStack,
  Button,
  Center,
  Flex,
  Input,
} from "@chakra-ui/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
        bg="rgb(19,25,33)"
        paddingBottom={5}
      >
        <Center py={4}>
          <Link
            textDecoration="none!important"
            color={"rgb(255,153,0)"}
            fontSize={17}
            fontWeight={600}
          >
            Why buy from Buyify ?
          </Link>
        </Center>

        <Flex border={"3px solid rgb(254,189,105)"} borderRadius={5} mx={"30%"}>
          <Input
            focusBorderColor="rgb(255,153,0)"
            border={"none"}
            borderRadius={"2px 0 0 2px"}
            bg={"white"}
            placeholder="Enter email to get 50% off coupons"
            fontSize={{ base: "13px", sm: "14px", md: "16px" }}
          />
          <Button
            // color={"white"}
            border={"none"}
            borderRadius={"0px 2px 2px 0px"}
            bg={"rgb(254,189,105)"}
            // border={"1px solid black"}
            // borderColor={"rgb(254,189,105)"}
            color={"black"}
            _hover={{ bg: "rgb(51,51,51)", color: "rgb(254,189,105)" }}
            fontSize={{ base: "13px", sm: "14px", md: "16px" }}
          >
            Subscribe
          </Button>
        </Flex>
      </Box>

      <Box bg={"rgb(19,25,33)"} color={"rgb(215,218,221)"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Press Releases</Link>
              <Link href={"#"}>Buyify Science</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Safety Center</Link>
              <Link href={"#"}>Community Guidelines</Link>
              <Link href={"#"}>COVID-19 and Buyify</Link>
              <Link href={"#"}>Advertise Your Products</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Make Money with Us</ListHeader>
              <Link href={"#"}>Sell on Buyify</Link>
              <Link href={"#"}>Sell under Accelerator</Link>
              <Link href={"#"}>Buyify Global Selling</Link>
              <Link href={"#"}>Become an Affiliate</Link>
              <Link href={"#"}>Fulfilment by Buyify</Link>
              <Link href={"#"}>Buyify Pay on Merchants</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Protect & Build</Link>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Download the App</ListHeader>
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
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.400", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Flex gap={1.5}>
              <Image
                w="40px"
                src="favicon.ico"
                // ml={4}
                alt="Buyify Logo"
              />
              <Text fontWeight={600} fontSize={"24px"} letterSpacing={".5px"}>
                Buyify
              </Text>
            </Flex>
            {/* <Image src="favicon.ico" w="10" alt="SmartBuyers Logo" /> */}
            <Text>
              © Buyify: Every product delivered to you. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <TwitterIcon />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <YouTubeIcon />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
