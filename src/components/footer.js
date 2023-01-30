import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Button, Flex, Text, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import { SettingsIcon, StarIcon, SearchIcon, HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { IconButton } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import NavMenu from './NavMenu';
import { paths } from '../constants/paths';


export default function Footer() {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div className="footer">
            <Flex
                position="fixed"
                bottom={0}
                left={0}
                right={0}
                bg="#1e1e1e"
                p={2}
                align="center"
                justify="space-evenly"
            >
                {/*<IconButton
                    colorScheme="#3b3939"
                    fontSize="30px"
                    size="lg"
                    aria-label="Search database"
                    icon={<StarIcon />}
                />
                <IconButton as={MdOutlineAddLocationAlt}
                    colorScheme="#3b3939"
                    size="lg"
                    aria-label="Search database"
                    onClick={() => { navigate('/home') }}
                />
                <IconButton
                    colorScheme="#3b3939"
                    fontSize="30px"
                    size="lg"
                    aria-label="Search database"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                />*/}

                <Box
                    onClick={() => navigate(paths.HOME)}
                    cursor='pointer'
                >
                    <IconButton
                        colorScheme="#3b3939"
                        fontSize="30px"
                        color={'white'}
                        size="lg"
                        aria-label="Home"
                        icon={<FaHome />}
                    />
                    <Text size={'xs'} color='white'>Home</Text>
                </Box>
                <Box
                    onClick={() => console.log('locate')}
                    cursor='pointer'
                >
                    <IconButton
                        colorScheme="#3b3939"
                        fontSize="30px"
                        color={'white'}
                        size="lg"
                        aria-label="Locate"
                        icon={<MdOutlineAddLocationAlt />}
                    />
                    <Text size={'xs'} color='white'>Locate</Text>
                </Box>
                <Box
                    onClick={() => navigate(paths.ACCOUNT)}
                    cursor='pointer'
                >
                    <IconButton
                        colorScheme="#3b3939"
                        fontSize="30px"
                        color={'white'}
                        size="lg"
                        aria-label="Color Mode Switch"
                        icon={<SettingsIcon />}
                    />
                    <Text size={'xs'} color='white'>Account</Text>
                </Box>
                <Box
                    onClick={onOpen}
                    cursor='pointer'
                >
                    <IconButton
                        colorScheme="#3b3939"
                        fontSize="30px"
                        color={'white'}
                        size="lg"
                        aria-label="Menu"
                        icon={<HamburgerIcon />}
                    />
                    <Text size={'xs'} color='white'>Menu</Text>
                </Box>
            </Flex>
            <NavMenu isOpen={isOpen} onClose={onClose} />
        </div>
    );
}
