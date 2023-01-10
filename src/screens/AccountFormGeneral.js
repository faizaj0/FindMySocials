import { useState } from "react";

import { Box, Button, FormControl, FormLabel, Select, Stack, useColorModeValue, Input } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DatePicker from "react-datepicker";

export default function AccountFormGeneral() {
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

                <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                </FormControl>

                <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
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
    )
}