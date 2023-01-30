import { Button } from "@chakra-ui/react";

export default function NavMenuButton({ label, onClick, colorScheme='gray' }) {
    return (
        <Button
            className='socialbutton'
            colorScheme={colorScheme}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}