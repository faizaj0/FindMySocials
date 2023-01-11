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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DatePicker from "react-datepicker";

export default function AccountFormSocials() {
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
      <Stack spacing={4}  py={7}  minH={'sm'}>
        <FormControl id="instagram" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaInstagram />} />
            <Input
              type="text"
              placeholder="Instagram"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="facebook" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaFacebook />} />
            <Input
              type="text"
              placeholder="Facebook"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="twitter" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaTwitter />} />
            <Input
              type="text"
              placeholder="Twitter"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="snapchat" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSnapchat />} />
            <Input
              type="text"
              placeholder="Snapchat"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="tiktok" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaTiktok />} />
            <Input
              type="text"
              placeholder="Tiktok"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
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
            onChange={() => console.log("submit")}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
