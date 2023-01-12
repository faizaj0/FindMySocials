import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

export default function PasswordInput({ value, setValue, label }) {
    const [showPassword, setShowPassword] = useState();

    return (
        <FormControl isRequired>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}
                />
                <InputRightElement h={"full"}>
                <Button
                    variant={"ghost"}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}