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
} from "@chakra-ui/react";
import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  //  handleChange function to update the form data in state based on the input name attribute
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //  onSubmit handler for the form to make the API call
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("https://api/create-account", formData);
      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        contact: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack spacing={5} mx={"auto"} maxW={"sm"} py={8} px={6}>
      <Box bg={useColorModeValue("white", "gray.700")} boxShadow="base" p={5}>
        <Text fontSize="3xl" fontWeight={"normal"} mt={"-25px"}>
          Create Account
        </Text>

        <Stack spacing={2} mt={"12px"}>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel> Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="contact" isRequired>
              <FormLabel> Contact Number</FormLabel>
              <Input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
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
                type="submit"
              >
                Continue
              </Button>
            </Stack>
            <Divider boxShadow="base" />
            <Stack pt={4}>
              <Text align={"center"} fontSize="sm" display={"flex"} justifyContent={"center"}>
                Already a user? <Link to={"/login"} > <Text color={"blue.400"}> {" "}Sign in</Text> </Link>
              </Text>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  );
}
