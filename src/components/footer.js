import { useNavigate } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { SettingsIcon, StarIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import { IconButton } from "@chakra-ui/react";


export default function Footer() {
    const navigate = useNavigate();
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
        justify="center"
      >
        <IconButton
          colorScheme="#3b3939"
          fontSize="30px"
          size="lg"
          aria-label="Search database"
          icon={<StarIcon />}
        />
        <IconButton as ={MdOutlineAddLocationAlt}
          colorScheme="#3b3939"
          size="lg"
          aria-label="Search database" 
          onClick={() => {navigate('/home')}}/>
    
        
        <IconButton
          colorScheme="#3b3939"
          fontSize="30px"
          size="lg"
          aria-label="Search database"
          icon={<SettingsIcon />}
          onClick={() => {navigate('/signin')}}

        />
      </Flex>
    </div>
  );
}
