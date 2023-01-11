import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { handleReq, setUserToken } from '../constants/utils';
import { apiURL } from '../constants/config';
import { apiPaths, paths } from '../constants/paths';

export default function SignInForm() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [postcode, setPostcode] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
      if (email.includes("@")) {
          setEmailValid(true);
      } else {
          setEmailValid(false);
      }
  }, [email])

  async function handleSubmit() {
    const url = apiURL + apiPaths.TOKEN_AUTH;
    const body = {
      username: email,
      password: password,
    };
    const method = 'POST';
    const withAuth = false;

    const data = await handleReq(
      url,
      method,
      body,
      navigate,
      withAuth,
    )
    console.log('Response Data:', data);
    setUserToken(data.token, rememberMe);
    navigate(paths.HOME);
  }

  return (
    <div className="signinform">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bgGradient={'linear(orange.100, purple.300)'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>
              Find My Socials
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Sign into your account
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>
                  Email address
                </FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>
                  Password
                </FormLabel>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>
                    Remember me
                  </Checkbox>
                  <Link color={'blue.400'}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button className="btn-grad" onClick={handleSubmit}>
                  Sign In
                </Button>
              </Stack>
              <Text fontSize={'md'} color={'gray.600'}>
                Don't have an account?
                <div onClick={() => navigate(paths.SIGN_UP)}>
                  <p className="signUpLink"> <b>Sign Up</b></p>
                </div>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
