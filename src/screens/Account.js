import { useState } from "react";
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
  Select,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function Account() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState(new Date);
  
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
              Account Details
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Please fill in your details below
            </Text>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>

              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
              </FormControl>

              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
              </FormControl>

              <FormControl id="dob" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <DatePicker selected={dob} onChange={(date) => setDOB(date)} />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Gender</FormLabel>
                <Select
                  placeholder='Select Gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='TMM'>Transgender Male</option>
                    <option value='TMF'>Transgender Female</option>
                    <option value='NC'>Gender Variant/Non-Conforming</option>
                    <option value='NL'>Other/Not Listed</option>
                    <option value='NA'>Prefer Not to Say</option>
                </Select>
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
                  onChange={() => console.log('submit')}
                >
                  Submit
                </Button>
              </Stack>
              
            </Stack>
          </Box>

        </Stack>
      </Flex>
    </div>
  );
}
