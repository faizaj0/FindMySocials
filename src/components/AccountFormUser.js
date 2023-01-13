import { Box, Button, FormLabel, FormControl, Stack, Text, Input, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PasswordInput from "./PasswordInput";

export default function AccountFormUser() {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    useEffect(() => {
        if (email.includes('@')) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }, [email])

    useEffect(() => {
        const uppercaseRE = /[A-Z]/;
        const lowercaseRE = /[a-z]/;
        const digitRE = /[0-9]/;

        if (password != passwordConfirm) {
            // Confirm pws match
            setPasswordValid(false);
            setPasswordError('Passwords do not match');
        } else if (password.length < 8) {
            // Confirm pw long enough
            setPasswordValid(false);
            setPasswordError('Password too short');
        } else if (!uppercaseRE.test(password) || !lowercaseRE.test(password) || !digitRE.test(password)) {
            // Confirm pw has uppercase, lowercase, digit
            setPasswordValid(false);
            setPasswordError('Password must contain a lowercase letter, an uppercase letter, and a digit');
        } else {
            setPasswordValid(true);
            setPasswordError('');
        }
    }, [password, passwordConfirm])

    return (
        <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            pt={0}
            height={"100%"}
        >
            <Stack spacing={4} py={7} minH={'sm'}>
                {
                    <Text size={'large'} fontWeight={'bold'} textAlign={'center'}>
                        User Details
                    </Text>
                }

                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Text size={'xs'} color={'red'} textAlign={'left'}>{email && !emailValid && 'Incorrect Email'}</Text>
                </FormControl>

                <PasswordInput value={password} setValue={setPassword} label={'Password'} />
                <PasswordInput value={passwordConfirm} setValue={setPasswordConfirm} label={'Confirm Password'} />
                <Text size={'xs'} color={'red'} textAlign={'left'}>{password && passwordError}</Text>

            </Stack>
        </Box>
    )
}