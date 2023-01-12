import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";

import SelectInput from "./SelectInput";
import { genderOptions } from "../constants/config";
import DatepickerInput from "./DatepickerInput";

export default function AccountFormGeneral() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState(new Date());

  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      height={"100%"}
    >
      <Stack spacing={4}>
        <FormControl id="firstName" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id="lastName" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </FormControl>

        <DatepickerInput date={dob} setDate={setDOB} label={'Date of Birth'} />

        <SelectInput
          value={gender}
          setValue={setGender}
          placeholder={'Select Gender'}
          label={'Gender'}
          options={genderOptions}
        />

        <Stack spacing={10} pt={2}>
          <Button
            className="btn-grad"
            loadingText="Submitting"
            size="lg"
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onChange={() => console.log("submit")}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}