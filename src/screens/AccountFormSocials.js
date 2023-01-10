import { useState } from "react";

import { Box, Button, FormControl, FormLabel, Select, Stack, useColorModeValue, Input } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DatePicker from "react-datepicker";

export default function AccountFormSocials() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState(new Date);

    return (
        <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            height={'100%'}
        >
            <Stack spacing={4}>

                <FormControl id="facebook" isRequired>
                    <Input type="text" placeholder="Facebook" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                </FormControl>

                <FormControl id="twitter" isRequired>
                    <Input type="text" placeholder="Twitter" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                </FormControl>

                <FormControl id="dob" isRequired>
                    <FormLabel>Date of Birth</FormLabel>
                    <DatePicker selected={dob} onChange={(date) => setDOB(date)} />
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
    )
}