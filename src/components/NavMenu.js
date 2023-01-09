import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/paths";
import NavMenuButton from "./NavMenuButton";

export default function NavMenu({ isOpen, onClose }) {
    const navigate = useNavigate();

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
                        <NavMenuButton
                            label={'Settings'}
                            onClick={() => navigate(paths.HOME)}
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