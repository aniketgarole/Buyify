import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { UpperNavbar } from "./Homepage/UpperNavbar";
import Footer from "./Homepage/Footer";

const initialData = {
  name: "",
  email: "",
  contact: "",
  password: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState(initialData);

  const { name, email, contact, password } = formData;
  const navigate = useNavigate();
  const toast = useToast();
  //  handleChange function to update the form data in state based on the input name attribute
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //  onSubmit handler for the form to make the API call
  const handleSubmit = async () => {
    let payload = { name, email, contact, password };

    if (!name || !email || !contact || !password) {
      toast({
        title: "Please fill all credentials",
        description: "All fields are required",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      let res = await fetch(
        "https://tame-tan-bee-fez.cyclic.app/user/addUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      let data = await res.json();
      console.log(payload, res);
      setIsLoading(false);
      if (res.status === 200) {
        toast({
          title: "Registered successfully",
          description: "Have a great day",
          status: "success",
          duration: 8000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
        console.log(data);
      } else {
        toast({
          title: "Registration failed",
          status: "error",
          duration: 8000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (

    <>
    <UpperNavbar />
    <Stack spacing={5} mx={"auto"} maxW={"sm"} py={8} px={6}>

      <Box bg={useColorModeValue("white", "gray.700")} boxShadow="base" p={5}>
        <Text fontSize="3xl" fontWeight={"normal"} mt={"-25px"}>
          Create Account
        </Text>

        <Stack spacing={2} mt={"12px"}>
          <FormControl id="name" isRequired>
            <FormLabel> Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="contact" isRequired>
            <FormLabel> Contact Number</FormLabel>
            <Input
              type="text"
              name="contact"
              value={contact}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={5} pt={2}>
            <Text fontSize="xs">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </Text>
            <Button
              loadingText="Submitting"
              bg={"#ffd814"}
              color={"black"}
              _hover={{
                bg: "#ecce37",
              }}
              h={"35px"}
              rounded={"none"}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Stack>
          <Divider boxShadow="base" />
          <Stack pt={4}>
            <Text
              align={"center"}
              fontSize="sm"
              display={"flex"}
              justifyContent={"center"}
            >
              Already a user?{" "}
              <Link to={"/login"}>
                {" "}
                <Text color={"blue.400"}> Sign in</Text>{" "}
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
    <Footer /> 
    </>
  );
}
