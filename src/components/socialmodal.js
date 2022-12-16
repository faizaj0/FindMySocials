import Usersocials from './usersocials.js'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'


  export default function Socialsmodal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div >
        <Button  className="btn-grad" onClick={onOpen}>Check out My Socials</Button>
  
        <Modal className='socialmodal' size={'xs'} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg='none'>
            <ModalCloseButton />
            <ModalBody>
              <Usersocials />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    )
  }