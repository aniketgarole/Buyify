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
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styles from "./adminlogin.module.css"

export default function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const toast = useToast()

  let adminName = ""
  for(let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      break
    } else {
      adminName = adminName + email[i]
    }
  }
  
  // console.log(email,password)
  const handleLogIn = async () => {
    const payload = {email, password}
    try {
      const response = await axios.post("https://tame-tan-bee-fez.cyclic.app/admin/login", payload);
      // const response = await fetch(`https://tame-tan-bee-fez.cyclic.app/admin/login`,{
      //   method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({email, password}),

      // })

      // console.log(response)
      // console.log(response.data);
      // alert(response.data.msg)
      let message = response.data.msg
      toast({
        position: 'top',
          title: message,
          // description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      localStorage.setItem("adminToken", JSON.stringify(response.data.token))
      localStorage.setItem("adminName", JSON.stringify(adminName))
      setEmail("");
      setPassword("");
      // <Navigate to="/admin/products"  />
      navigate("/admin/products")
    } catch (error) {
      // console.error(error,"in frontend");
    }
  };
  return (
    <>
    <div className={styles.loginmain}>

      <Stack spacing={5} mx={"auto"} maxW={"sm"} py={8} px={6}>
        <Box bg={useColorModeValue("white", "gray.700")} boxShadow="base" p={8}>
          <Text fontSize="3xl" fontWeight={"medium"} mt={"-25px"}>
            Sign in as admin
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
                onClick={handleLogIn}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        {/* <Text textAlign={"center"}>New to Amazon?</Text> */}
        <Box  pl={"10"}>
        {/* <Link to={"/signup"} >
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
        </Link> */}
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
        </div>
    </>
  );
}
