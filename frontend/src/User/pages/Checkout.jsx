import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import useRazorpay from "react-razorpay";

let arr = [];
const Checkout = () => {
  const [value, setValue] = React.useState("");
  const [Pvalue, setPValue] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [address, setAddress] = useState("");
  const Razorpay = useRazorpay();

  const handleSaveAddress = () => {
    const formData = {
      country: document.getElementById("country").value,
      fullName: document.getElementById("fullName").value,
      mobileNumber: document.getElementById("mobileNumber").value,
      pincode: document.getElementById("pincode").value,
      flatHouseNo: document.getElementById("flatHouseNo").value,
      areaStreetVillage: document.getElementById("areaStreetVillage").value,
      landmark: document.getElementById("landmark").value,
      townCity: document.getElementById("townCity").value,
      state: document.getElementById("state").value,
    };

    setAddress(formData);
    arr.push(formData);

    localStorage.setItem("D_address", JSON.stringify(arr));

    toast({
      title: "Added New Delivery address.",
      description: "We've saved your new shipping address.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose();
  };
  let useradd = JSON.parse(localStorage.getItem("D_address"));

  const data = useSelector((store) => {
    return store.cartReducer.cart;
  });

  const totalCartPrice = data
    .reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0)
    .toFixed(2);

  const orderPrice = +totalCartPrice + 40;
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_8soKTDQ4yrJnr9",
      amount: +orderPrice * 100,
      currency: "INR",
      name: "Buyify.com",
      description: "Test Transaction",
      image: "./logo.jpg",

      handler: async (res) => {
        console.log(res);
        const addOrders = async (id, cartData, address) => {
          try {
            const sameId = Date.now() + id;
            await axios.post("/api/orders", {
              cart: cartData, // this should be array of objects cart
              userId: id, //"userId which you get from authreducer",
              address: address,
              timestamp: Date.now(), // this can be used for sorting
              orderId: sameId,
              status: "pending",
            });
          } catch (error) {
            console.log(error);
          }
        };
        await addOrders(data, address);
        if (res) {
          let mydata = [];
          // dispatch(addToCart(id, mydata))
        }
      },
      prefill: {
        name: "userName",
        // email: userData?.email,
        contact: "8496080933",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  console.log(useradd);
  return (
    <>
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

      <Flex
        // border={"1px solid red"}
        width={"75%"}
        margin={"auto"}
        h={"100vh"}
        gap={"3%"}
        p={"12px"}
      >
        <Box width={"70%"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize="xl" fontWeight={"bold"} color={"#c45500"}>
                      {" "}
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
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio value="1">
                      <span style={{ fontWeight: "bold" }}>Gyan Prakash</span>{" "}
                      Type 1 Spl Qtr No 56 ,CRPF Campus, Gandhi Nagar,
                      GANDHINAGAR, GUJARAT, 382042, India, Phone number:
                      7779898987{" "}
                      <span style={{ color: "#007185" }}>Edit address</span> |{" "}
                      <span style={{ color: "#007185" }}>
                        Add delivery instructions
                      </span>
                    </Radio>
                    {useradd?.map((el) => (
                      <Radio value="2">
                        <span style={{ fontWeight: "bold" }}>
                          {el.fullName}
                        </span>{" "}
                        House Number: {el.flatHouseNo} ,{el.areaStreetVillage},
                        {el.landmark},{el.townCity}, {el.state}, {el.pincode},{" "}
                        {el.country}, Phone Number:{el.mobileNumber}{" "}
                        <span style={{ color: "#007185" }}>Edit address</span> |{" "}
                        <span style={{ color: "#007185" }}>
                          Add delivery instructions
                        </span>
                      </Radio>
                    ))}
                    {/* <Radio value="1">
                      <span style={{ fontWeight: "bold" }}>Gyan Prakash</span>{" "}
                      Type 1 Spl Qtr No 56 ,CRPF Campus, Gandhi Nagar,
                      GANDHINAGAR, GUJARAT, 382042, India, Phone number:
                      7779898987{" "}
                      <span style={{ color: "#007185" }}>Edit address</span> |{" "}
                      <span style={{ color: "#007185" }}>
                        Add delivery instructions
                      </span>
                    </Radio> */}
                  </Stack>
                </RadioGroup>
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
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Enter a new delivery address</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Stack spacing={"4"}>
                        <form>
                          <FormControl id="country">
                            <FormLabel>Country/Region</FormLabel>
                            <Select>
                              <option value="India">India</option>
                              <option value="USA">USA</option>
                              <option value="Canada">Canada</option>
                            </Select>
                          </FormControl>

                          <FormControl id="fullName">
                            <FormLabel>Full Name</FormLabel>
                            <Input type="text" />
                          </FormControl>

                          <FormControl id="mobileNumber">
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type="tel" />
                          </FormControl>

                          <FormControl id="pincode">
                            <FormLabel>Pincode</FormLabel>
                            <Input type="text" />
                          </FormControl>

                          <FormControl id="flatHouseNo">
                            <FormLabel>Flat, House No.</FormLabel>
                            <Input type="text" />
                          </FormControl>

                          <FormControl id="areaStreetVillage">
                            <FormLabel>Area/Street/Sector/Village</FormLabel>
                            <Input type="text" />
                          </FormControl>

                          <FormControl id="landmark">
                            <FormLabel>Landmark</FormLabel>
                            <Input type="text" />
                          </FormControl>

                          <FormControl id="townCity">
                            <FormLabel>Town/City</FormLabel>
                            <Input type="text" />
                          </FormControl>

                          <FormControl id="state">
                            <FormLabel>State</FormLabel>
                            <Select placeholder="Select state">
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Bihar">Bihar</option>
                              <option value="Delhi">Delhi</option>
                            </Select>
                          </FormControl>

                          <Button
                            onClick={handleSaveAddress}
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
                  <Box as="span" flex="1" textAlign="left">
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
                      <Text fontWeight={"medium"}>
                        Pay with Debit/Credit/ATM Cards
                      </Text>
                    </Radio>
                    <Stack>
                      <Radio value="netbanking">
                        <Text fontWeight={"medium"}>Net Banking</Text>{" "}
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
                      <Text fontWeight={"medium"}>Other UPI Apps</Text>
                    </Radio>

                    <Radio value="emi">
                      {" "}
                      <Text fontWeight={"medium"}>EMI</Text>
                    </Radio>

                    <Radio value="cod">
                      <Text fontWeight={"medium"}>
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
          width={"27%"}
          borderRadius={"10px"}
          p={15}
          h={"350px"}
        >
          <Box>
            {/* <Box isDisabled={!Pvalue}>{<PayPal />}</Box> */}
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
              <Text fontSize="sm">₹ {"40.00"}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize="sm">Total:</Text>
              <Text fontSize="sm">₹ {(+totalCartPrice + 40).toFixed(2)}</Text>
            </Flex>
          </Box>

          <Divider mt={"8px"} />
          <Flex justifyContent={"space-between"} mt={"8px"}>
            <Text fontSize="xl" fontWeight={"bold"} color={"#b12704"}>
              Order Total:
            </Text>
            <Text fontSize="xl" fontWeight={"bold"} color={"#b12704"}>
              ₹ {(+totalCartPrice + 40).toFixed(2)}
            </Text>
          </Flex>
          <Divider mt={"8px"} />
        </Box>
      </Flex>
    </>
  );
};

export default Checkout;
