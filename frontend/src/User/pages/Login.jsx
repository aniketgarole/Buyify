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
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      console.log(response.data);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
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
        <Box  pl={"10"}>
        <Link to={"/signup"} >
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
      <Text mt={"10px"} textAlign={"center"} fontSize="xs" color={"grey"}>
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </Text>
    </>
  );
}
