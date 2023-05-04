import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
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
import React, { useState } from "react";

let arr = [];
const Checkout = () => {
  const [value, setValue] = React.useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [address, setAddress] = useState("");

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
        border={"1px solid red"}
        width={"75%"}
        margin={"auto"}
        h={"100vh"}
        gap={"3%"}
        p={"12px"}
      >
        <Box border={"1px solid green"} width={"70%"}>
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
                    {useradd.map((el) => (
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
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          border={"1px solid green"}
          width={"27%"}
          borderRadius={"10px"}
        ></Box>
      </Flex>
    </>
  );
};

export default Checkout;
