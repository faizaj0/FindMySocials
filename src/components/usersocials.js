import { React } from "react";
import { useSwiper } from "swiper/react";

import { Image, Box } from "@chakra-ui/react";
import { Button, ButtonGroup, VStack, StackDivider } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export default function Usersocials() {
  const swiper = useSwiper();
  return (
    <div className="usersocials flex-container">
      <VStack spacing={5} align="stretch">
        <Button classname='socialbutton'colorScheme="facebook" leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button classname='socialbutton'colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
        <Button classname='socialbutton'colorScheme="yellow" leftIcon={<FaSnapchat />}>
          Snapchat
        </Button>
        <Button classname='socialbutton'colorScheme="pink" leftIcon={<FaInstagram />}>
          Instagram
        </Button>
        <Button classname='socialbutton' colorScheme="blue" leftIcon={<FaTiktok />}>
          Tiktok
        </Button>
      </VStack>
    </div>
  );
}
