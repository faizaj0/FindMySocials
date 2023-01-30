import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Text, Box, Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useColorMode, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/paths";
import NavMenuButton from "./NavMenuButton";

export default function NavMenu({ isOpen, onClose }) {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Menu</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={5} align="stretch" top={0} paddingBottom={'2em'}>
                        <NavMenuButton
                            label={'Home'}
                            onClick={() => navigate(paths.HOME)}
                        />
                        {/*<NavMenuButton
                            label={'Settings'}
                            onClick={() => navigate(paths.ACCOUNT)}
                        />*/}
                        <Button
                            className='socialbutton'
                            colorScheme={'#3b3939'}
                            onClick={() => toggleColorMode()}
                            style={{
                                color: colorMode == 'light' ? '#1a202c' : 'white',
                                background: colorMode == 'light' ? '#edf2f7' : '#3d4756'
                            }}
                        >
                            {colorMode == 'light' ? 'Dark Mode' : 'Light Mode'}
                            {/*<Box style={{ marginLeft: '1em' }}>
                                {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
                            </Box>*/}
                        </Button>

                        <NavMenuButton
                            label={'Privacy Policy'}
                            onClick={() => navigate(paths.POLICY)}
                        />
                        <NavMenuButton
                            label={'Logout'}
                            onClick={() => navigate(paths.SIGN_OUT)}
                        />
                    </VStack>
                </ModalBody>
                {/*<ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>*/}
            </ModalContent>
        </Modal>
    )
}