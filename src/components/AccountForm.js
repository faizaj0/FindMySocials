import { useState, useRef } from "react";
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

import "react-datepicker/dist/react-datepicker.css";
import AccountFormGeneral from "./AccountFormGeneral";
import AccountFormSocials from "./AccountFormSocials";


import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import "swiper/css";
import AccountFormProfile from "./AccountFormProfile";

export default function AccountForm() {
    const navigate = useNavigate();
    const swiperRef = useRef(null);

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bgGradient={"linear(orange.100, purple.300)"}
        >
            <Stack spacing={8} mx={"100%"} maxW={"sm"} py={12} px={6} minH={'lg'}>

                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Account Details
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        Please fill in your details below
                    </Text>
                </Stack>

                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide style={{ paddingRight: "10px" }}>
                        <AccountFormGeneral />
                    </SwiperSlide>
                    <SwiperSlide style={{ paddingLeft: "10px" }}>
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
