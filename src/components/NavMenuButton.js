import { Button } from "@chakra-ui/react";

export default function NavMenuButton({ label, onClick, colorScheme='gray' }) {
    return (
        <Button
            classname='socialbutton'
            colorScheme={colorScheme}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}