import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Geolocation } from "@capacitor/geolocation";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  SimpleGrid,
  Stack,
  Button,
  Checkbox,
  Heading,
  Text,
  useColorModeValue,
  CheckboxGroup,
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";

import DatepickerInput from "./DatepickerInput";

import PasswordInput from "./PasswordInput";
import SelectInput from "./SelectInput";

import { paths } from "../constants/paths";
import { handleReq } from "../constants/utils";
import { apiURL, genderOptions } from "../constants/config";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [snapchat, setSnapchat] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [interest, setInterest] = useState("");

  function handleSubmit() {
    const fetchData = async () => {
      const body = {
        locationCoord: { lat: lat, lon: lon },
        socials: {
        twitter: twitter,
        instagram: instagram,
        facebook: facebook,
        snapchat: snapchat,
        tiktok: tiktok},
        interests: interest
      };

      console.log(body);
      const data = await handleReq(
        apiURL + "/dj/api/users/onboarding",
        "POST",
        body,
        navigate,
        false
      );
      console.log("Result: ", data);
        
      /*if (!data.success) {
        console.log("Onboarding response data Could Not Be Retrieved");
        return;
      }*/
      navigate(paths.HOME);
    };
    fetchData();
  }

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLat(coordinates.coords.latitude);
    setLon(coordinates.coords.longitude);
    return coordinates;
  };

  return (
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
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Button
                onClick={printCurrentPosition}
                leftIcon={<CheckCircleIcon />}
                colorScheme="pink"
              >
                {" "}
                Send Location
              </Button>
            </FormControl>

            <FormControl id="twitter" isRequired>
              <FormLabel>Twitter</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </FormControl>

            <FormControl id="instagram" isRequired>
              <FormLabel>Instagram</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </FormControl>

            <FormControl id="facebook" isRequired>
              <FormLabel>Facebook</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </FormControl>

            <FormControl id="snapchat" isRequired>
              <FormLabel>Snapchat</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={snapchat}
                onChange={(e) => setSnapchat(e.target.value)}
              />
            </FormControl>

            <FormControl id="tiktok" isRequired>
              <FormLabel>Tiktok</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
              />
            </FormControl>

            <CheckboxGroup colorScheme="pink" onChange={(e) => setInterest(e)}>
              <FormLabel>Interests</FormLabel>
              <SimpleGrid columns={2} spacing={2}>
                <Checkbox value="Animals">Animals</Checkbox>
                <Checkbox value="Architecture">Architecture</Checkbox>
                <Checkbox value="Art">Art</Checkbox>
                <Checkbox value="Astronomy">Astronomy</Checkbox>
                <Checkbox value="Business">Business</Checkbox>
                <Checkbox value="Cooking">Cooking</Checkbox>
                <Checkbox value="Design">Design</Checkbox>
                <Checkbox value="Education">Education</Checkbox>
                <Checkbox value="Fitness & Exercise">
                  Fitness & Exercise
                </Checkbox>
                <Checkbox value="Food & Drink">Food & Drink</Checkbox>
                <Checkbox value="Gadgets">Gadgets</Checkbox>
                <Checkbox value="Gaming">Gaming</Checkbox>
                <Checkbox value="Gardening">Gardening</Checkbox>
                <Checkbox value="Hiking">Hiking</Checkbox>
                <Checkbox value="Home Decor">Home Decor</Checkbox>
                <Checkbox value="Languages">Languages</Checkbox>
                <Checkbox value="Movies">Movies</Checkbox>
                <Checkbox value="Fashion">Fashion</Checkbox>
                <Checkbox value="Music">Music</Checkbox>
                <Checkbox value="Photography">Photography</Checkbox>
                <Checkbox value="Reading">Reading</Checkbox>
                <Checkbox value="Sports">Sports</Checkbox>
                <Checkbox value="Travel">Travel</Checkbox>
              </SimpleGrid>
            </CheckboxGroup>
          </Stack>
          <Stack spacing={10} pt={2}>
            <Button
              className="btn-grad"
              loadingText="Submitting"
              onClick={handleSubmit}
              size="lg"
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Submit information
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
