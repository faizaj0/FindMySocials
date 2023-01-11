

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import InputMask from 'react-input-mask';
import ReactInputMask from "react-input-mask";


export default function SignUp() {

  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [dob, setDOB] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [postcode, setPostcode] = useState('');
  const [postcodeValid, setPostcodeValid] = useState(false);
  
  

  function handlePostcodeChange(e) {
    setPostcode(e.target.value.toUpperCase());
  }

  useEffect(() => {
    // Official UK postcode regex (with added word boundaries and string end)
    const postcodeRE = /\b([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})\b$/;

    if (postcode.match(postcodeRE)) {
      setPostcodeValid(true);
    } else {
      setPostcodeValid(false);
    }
  }, [postcode])

  return (
    <div className="page-sign-up">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bgGradient={"linear(orange.100, purple.300)"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Create your account
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Postcode</FormLabel>
                <Input type="text" placeholder="Postcode" value={postcode} onChange={handlePostcodeChange} />
                <Text size={'xs'} color={'red'} textAlign={'left'}>{postcode && !postcodeValid && 'Incorrect Postcode'}</Text>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
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
              <Stack spacing={10} pt={2}>
                <Button
                  className="btn-grad"
                  loadingText="Submitting"
                  size="lg"
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} fontSize={"md"} color={"gray.600"}>
                  Already a user?
                  <div onClick={() => navigate("/signin")}>
                    <p className="signUpLink">
                      {" "}
                      <b>Sign In</b>
                    </p>
                  </div>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
