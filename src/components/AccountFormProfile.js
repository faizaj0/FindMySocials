import { useState } from "react";

import { Box, Button, FormControl, FormLabel, Select, Stack, useColorModeValue, Input } from "@chakra-ui/react";

export default function AccountFormProfile() {
    const [img, setIMG] = useState();

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
                    <Input
                        type="file"
                        placeholder="Upload Profile Image"
                        value={img}
                        onChange={(e) => { setIMG(e.target.value) }}
                    />
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
                        onClick={() => console.log('submit')}
                    >
                        Submit
                    </Button>
                </Stack>

            </Stack>
        </Box>
    )
}