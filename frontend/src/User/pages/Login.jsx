import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UpperNavbar } from "./Homepage/UpperNavbar";
import Footer from "./Homepage/Footer";

// import { AuthContext } from "../../routes/AuthContextProvider";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSignIn = async () => {
    let payload = { email, password };

    if (!email || !password) {
      toast({
        title: "Enter both email and password to login",
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
      let res = await fetch("https://tame-tan-bee-fez.cyclic.app/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();

      setIsLoading(false);

      console.log(payload, res);

      if (res.status === 200) {
        toast({
          title: "Login successful",
          description: "Have a great day",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("buyfiuser", data.name);
        navigate("/");

        console.log(data);
      } else {
        toast({
          title: "Login failed",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const isEmailError = email === "";
  const isPasswordError = password === "";

  return (
    <>
      <UpperNavbar />
      <Stack spacing={5} mx={"auto"} maxW={"sm"} py={8} px={6}>
        <Box bg={useColorModeValue("white", "gray.700")} boxShadow="base" p={8}>
          <Text fontSize="3xl" fontWeight={"medium"} mt={"-25px"}>
            Sign in
          </Text>
          <Stack spacing={2}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#ffd814"}
                color={"black"}
                _hover={{
                  bg: "#ecce37",
                }}
                h={"30px"}
                rounded={"none"}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Text textAlign={"center"}>New to Amazon?</Text>
        <Box pl={"10"}>
          <Link to={"/signup"}>
            {" "}
            <Button
              bg={"#dcdcdc"}
              color={"black"}
              _hover={{
                bg: "#c2c0b7",
              }}
              w={"90%"}
              h={"30px"}
              rounded={"none"}
            >
              Create Your Amazon Account
            </Button>
          </Link>
        </Box>
      </Stack>
      <Divider mb={"12px"} boxShadow="base" />
      <Flex
        m={"18px"}
        margin={"auto"}
        justify={"space-evenly"}
        width={"20%"}
        textAlign={"center"}
      >
        <Text fontSize="xs" color={"#0066c0"}>
          {" "}
          Conditions of Use{" "}
        </Text>
        <Text fontSize="xs" color={"#0066c0"}>
          {" "}
          Privacy Notice{" "}
        </Text>
        <Text fontSize="xs" color={"#0066c0"}>
          Help{" "}
        </Text>
      </Flex>
      <Text
        mt={"10px"}
        mb={"50px"}
        textAlign={"center"}
        fontSize="xs"
        color={"grey"}
      >
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </Text>
      <Footer />
    </>
  );
}
