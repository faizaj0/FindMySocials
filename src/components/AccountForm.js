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
import AccountFormGeneral from "./AccountFormGeneral";
import AccountFormSocials from "./AccountFormSocials";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import AccountFormProfile from "./AccountFormProfile";


export default function AccountForm() {
  const navigate = useNavigate();
  
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
                Account Details
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
                Please fill in your details below
            </Text>
            </Stack>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <AccountFormGeneral />
                </SwiperSlide>
                <SwiperSlide>
                    <AccountFormSocials />
                </SwiperSlide>
                <SwiperSlide>
                    <AccountFormProfile />
                </SwiperSlide>
            </Swiper>

        </Stack>
    </Flex>
  );
}
