import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
  useToast,
  Icon,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import useRazorpay from "react-razorpay";
import { getCartProducts } from "../../redux/Cart/Action";

import { Link, useNavigate } from "react-router-dom";


import { UpperNavbar } from "./Homepage/UpperNavbar";
import Footer from "./Homepage/Footer";


const addressInitislState = {
  country: "",
  fullName: "",
  mobileNumber: "",
  pincode: "",
  houseNo: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
};

const Checkout = () => {
  const [value, setValue] = useState("1");
  const [Pvalue, setPValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [addressForm, setAddressForm] = useState(addressInitislState);

  function HandleChange(e) {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  }

  const {
    country,
    fullName,
    mobileNumber,
    pincode,
    houseNo,
    area,
    landmark,
    city,
    state,
  } = addressForm;

  function HandleSubmit(e) {
    e.preventDefault();

    if (
      country === "" ||
      fullName === "" ||
      mobileNumber === "" ||
      pincode === "" ||
      houseNo === "" ||
      area === "" ||
      landmark === "" ||
      city === "" ||
      state === ""
    ) {
      toast({
        title: "All Feilds Required",
        position: "top",
        isClosable: true,
      });
    } else {
      localStorage.setItem("address", JSON.stringify(addressForm));
      toast({
        title: "Added New Delivery address.",
        description: "We've saved your new shipping address.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose();
    }
  }

  const { cart, isLoading, isError } = useSelector((store) => {
    return {
      cart: store.CartReducer.cart,
      isLoading: store.CartReducer.isLoading,
      isError: store.CartReducer.isError,
    };
  }, shallowEqual);

  console.log("chekcoutcart", cart);

  let dispatch = useDispatch();
  const Razorpay = useRazorpay();
  const navigate = useNavigate();

  let totalCartPrice = cart
    .reduce((acc, el) => {
      return acc + Number(el.offerPrice);
    }, 0)
    .toFixed(2);

  const address = JSON.parse(localStorage.getItem("address"));

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  console.log("address", address);

  const handlePayment = useCallback(
    async (cart) => {
      const options = {
        key: "rzp_test_Q6qLBPFz8pzc23",
        amount: +(totalCartPrice * 100),
        currency: "INR",
        name: "Buyify.com",
        description: "Test Transaction",
        image: "/buyify.jpg",
        handler: async (response) => {
          let postOrder = async () => {
            try {
              console.log("inside post", cart);
              let res = await fetch(
                "https://tame-tan-bee-fez.cyclic.app/order/addOrder",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                   
                    time: new Date(),
                    totalPrice: totalCartPrice,
                  }),
                }
              );
              console.log(res.status);
            } catch (error) {
              console.log("error", error);
            }
          };

          const deleteAllCart = async () => {
            try {
              await axios.delete(
                `https://tame-tan-bee-fez.cyclic.app/cart/delete`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                  },
                }
              );
            } catch (err) {
              console.log(err);
            }
          };

          postOrder();
          deleteAllCart();
          navigate("/");
        },
        prefill: {
          name: address?.fullName,
          email: address?.email,
          contact: address?.mobileNumber,
        },
        notes: {
          address: "Buyify.com",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );

  return (
    <>
    <UpperNavbar />
      <Box
        h={"80px"}
        width={"98%"}
        margin={"auto"}
        boxShadow="base"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={4}
        bgGradient="linear(to-t, blackAlpha.100, white)"
      >
        <Text textAlign="center" fontSize="3xl">
          Checkout
        </Text>
      </Box>
      <Link to={"/cart"}>
        {" "}
        <Button colorScheme="teal" variant="link" m={"10px 0px 15px 20px"}>
          {"<"} Go Back
        </Button>
      </Link>

      <Flex
        // border={"1px solid red"}
        width={"75%"}
        margin={"auto"}
        h={"100vh"}
        gap={"3%"}
        p={"12px"}
        direction={{ base: "row", md: "row", sm: "column" }}
      >
        <Box width={"70%"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="xl" fontWeight={"bold"} color={"#c45500"}>
                      1.{"  "} Select a delivery address
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                border={"1px solid grey"}
                m={"20px"}
                borderRadius={"10px"}
              >
                {address ? (
                  <ul style={{ marginLeft: "10px" }}>
                    <li style={{ fontWeight: "bold" }}>
                      {" "}
                      {address.fullName}, {address.mobileNumber} ,{"House No:"}
                      {address.houseNo},{address.area},{address.landmark},
                      {address.city},{address.state},{address.pincode},
                      {address.country}
                      {<AiFillDelete color="red" size={"25px"} />}
                    </li>
                  </ul>
                ) : (
                  <Text
                    onClick={onOpen}
                    style={{
                      color: "#007185",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                  >
                    + Add a new address
                  </Text>
                )}
                {/* <Text
                  onClick={onOpen}
                  style={{
                    color: "#007185",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  + Add a new address
                </Text> */}
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Enter a new delivery address</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Stack spacing={"4"}>
                        <form onSubmit={HandleSubmit}>
                          <FormControl id="country">
                            <FormLabel>Country/Region</FormLabel>
                            <Select
                              name="country"
                              value={country}
                              onChange={HandleChange}
                            >
                              <option value="India">Select a Country</option>
                              <option value="India">India</option>
                              <option value="USA">USA</option>
                              <option value="Canada">Canada</option>
                            </Select>
                          </FormControl>

                          <FormControl id="fullName">
                            <FormLabel>Full Name</FormLabel>
                            <Input
                              type="text"
                              name="fullName"
                              value={fullName}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="mobileNumber">
                            <FormLabel>Mobile Number</FormLabel>
                            <Input
                              type="tel"
                              name="mobileNumber"
                              value={mobileNumber}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="pincode">
                            <FormLabel>Pincode</FormLabel>
                            <Input
                              type="text"
                              name="pincode"
                              value={pincode}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="flatHouseNo">
                            <FormLabel>Flat, House No.</FormLabel>
                            <Input
                              type="text"
                              name="houseNo"
                              value={houseNo}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="areaStreetVillage">
                            <FormLabel>Area/Street/Sector/Village</FormLabel>
                            <Input
                              type="text"
                              name="area"
                              value={area}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="landmark">
                            <FormLabel>Landmark</FormLabel>
                            <Input
                              type="text"
                              name="landmark"
                              value={landmark}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="towncity">
                            <FormLabel>Town/city</FormLabel>
                            <Input
                              type="text"
                              name="city"
                              value={city}
                              onChange={HandleChange}
                            />
                          </FormControl>

                          <FormControl id="state">
                            <FormLabel>State</FormLabel>
                            <Select
                              name="state"
                              placeholder="Select state"
                              value={state}
                              onChange={HandleChange}
                            >
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Bihar">Bihar</option>
                              <option value="Delhi">Delhi</option>
                            </Select>
                          </FormControl>

                          <Button
                            type="submit"
                            mt={"20px"}
                            colorScheme="yellow"
                          >
                            Use this address
                          </Button>
                        </form>
                      </Stack>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>

                <Button
                  colorScheme="yellow"
                  size="sm"
                  mt={"20px"}
                  onClick={() =>
                    toast({
                      title: "Delivery address.",
                      description: "We've saved your shipping address.",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    })
                  }
                >
                  Use this address
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="xl" fontWeight={"bold"} color={"#c45500"}>
                      2. Payment method
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                p={8}
                border={"1px solid grey"}
                m={"20px"}
                borderRadius={"10px"}
              >
                <RadioGroup onChange={setPValue} value={Pvalue}>
                  <Stack direction="column" gap={"40px"}>
                    <Radio value="card">
                      {" "}
                      <Text fontWeight={"medium"} color="black">
                        Pay with Debit/Credit/ATM Cards
                      </Text>
                    </Radio>
                    <Stack>
                      <Radio value="netbanking">
                        <Text fontWeight={"medium"} color="black">
                          Net Banking
                        </Text>{" "}
                      </Radio>
                      <Select placeholder="Select option" width={"22%"}>
                        <option value="option1">SBI</option>
                        <option value="option2">Bank of America</option>
                        <option value="option3">icici</option>
                        <option value="option3">HDFC</option>
                      </Select>{" "}
                    </Stack>

                    <Radio value="upi" fontWeight={"medium"}>
                      {" "}
                      <Text fontWeight={"medium"} color="black">
                        Other UPI Apps
                      </Text>
                    </Radio>

                    <Radio value="emi">
                      {" "}
                      <Text fontWeight={"medium"} color="black">
                        EMI
                      </Text>
                    </Radio>

                    <Radio value="cod">
                      <Text fontWeight={"medium"} color="black">
                        Cash on Delivery/ Pay on Delivery
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Button
                  colorScheme="yellow"
                  size="sm"
                  mt={"40px"}
                  isDisabled={!Pvalue}
                >
                  Use this payment method
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          border={"1px solid grey"}
          width={{ base: "27%", md: "27%", sm: "100%" }}
          borderRadius={"10px"}
          p={15}
          // h={"350px"}
          h={{ base: "350px", md: "350px", sm: "auto" }}
        >
          <Box>
            <Button
              colorScheme="yellow"
              size="sm"
              w={"100%"}
              isDisabled={!Pvalue}
              onClick={handlePayment}
            >
              Pay Now
            </Button>
            <Text textAlign={"center"} fontSize="xs" mt={"12px"}>
              Choose a payment method to continue checking out. You will still
              have a chance to review and edit your order before it is final
            </Text>
          </Box>
          <Divider mt={"15"} />
          <Text mt={"10px"} fontSize="xl" fontWeight={"bold"} mb={"15px"}>
            Order Summary
          </Text>
          <Box lineHeight={"25px"}>
            <Flex justifyContent={"space-between"}>
              <Text fontSize="sm">item:</Text>
              <Text fontSize="sm">₹ {totalCartPrice}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              {" "}
              <Text fontSize="sm">Delivery:</Text>
              <Text fontSize="sm"> {"Free"}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize="sm">Total:</Text>
              <Text fontSize="sm">₹ {totalCartPrice}</Text>
            </Flex>
          </Box>

          <Divider mt={"8px"} />
          <Flex justifyContent={"space-between"} mt={"8px"}>
            <Text fontSize="xl" fontWeight={"bold"} color={"#b12704"}>
              Order Total:
            </Text>
            <Text fontSize="xl" fontWeight={"bold"} color={"#b12704"}>
              ₹ {totalCartPrice}
            </Text>
          </Flex>
          <Divider mt={"8px"} />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Checkout;
