import React, { Component }  from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import SocialsLinks from './SocialsLinks.js';


  export default function SocialsModal({ user }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div >
        <Button  className="btn-grad" onClick={onOpen}>Check out My Socials</Button>
  
        <Modal className='socialmodal' size={'xs'} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg='none'>
            <ModalCloseButton />
            <ModalBody>
              <SocialsLinks user={user} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    )
  }