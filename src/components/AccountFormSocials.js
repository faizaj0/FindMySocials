import { useState } from "react";

import { Box, Button, FormControl, FormLabel, Select, Stack, useColorModeValue, Input } from "@chakra-ui/react";

export default function AccountFormSocials() {
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

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
                        type="text"
                        placeholder="Facebook"
                        value={facebook}
                        onChange={(e) => { setFacebook(e.target.value) }}
                    />
                </FormControl>

                <FormControl id="twitter" isRequired>
                    <Input
                        type="text"
                        placeholder="Twitter"
                        value={twitter}
                        onChange={(e) => { setTwitter(e.target.value) }}
                    />
                </FormControl>

                <FormControl id="instagram" isRequired>
                    <Input
                        type="text"
                        placeholder="Instagram"
                        value={instagram}
                        onChange={(e) => { setInstagram(e.target.value) }}
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