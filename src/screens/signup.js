

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
import { paths } from "../constants/paths";
import PasswordInput from "../components/PasswordInput";

export default function SignUp() {

  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [postcode, setPostcode] = useState('');
  const [postcodeValid, setPostcodeValid] = useState(false);
  

  useEffect(() => {
    // Official UK postcode regex (with added word boundaries and string end)
    const postcodeRE = /\b([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})\b$/;

    if (postcode.match(postcodeRE)) {
      setPostcodeValid(true);
    } else {
      setPostcodeValid(false);
    }
  }, [postcode])

  useEffect(() => {
    if (email.includes('@')) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email])

  useEffect(() => {
    const uppercaseRE = /[A-Z]/;
    const lowercaseRE = /[a-z]/;
    const digitRE = /[0-9]/;

    if (password != passwordConfirm) {
      // Confirm pws match
      setPasswordValid(false);
      setPasswordError('Passwords do not match');
    } else if (password.length < 8) {
      // Confirm pw long enough
      setPasswordValid(false);
      setPasswordError('Password too short');
    } else if (!uppercaseRE.test(password) || !lowercaseRE.test(password) || !digitRE.test(password)) {
      // Confirm pw has uppercase, lowercase, digit
      setPasswordValid(false);
      setPasswordError('Password must contain a lowercase letter, an uppercase letter, and a digit');
    } else {
      setPasswordValid(true);
      setPasswordError('');
    }
  }, [password, passwordConfirm])

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
                <Input type="email" postcode={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Text size={'xs'} color={'red'} textAlign={'left'}>{email && !emailValid && 'Incorrect Email'}</Text>
              </FormControl>

              <FormControl id="postcode" isRequired>
                <FormLabel>Postcode</FormLabel>
                <Input type="text" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value.toUpperCase())} />
                <Text size={'xs'} color={'red'} textAlign={'left'}>{postcode && !postcodeValid && 'Incorrect Postcode'}</Text>
              </FormControl>

              <PasswordInput value={password} setValue={setPassword} label={'Password'} />
              <PasswordInput value={passwordConfirm} setValue={setPasswordConfirm} label={'Confirm Password'} />
              <Text size={'xs'} color={'red'} textAlign={'left'}>{password && passwordError}</Text>
              

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
                  <div onClick={() => navigate(paths.SIGN_IN)}>
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
