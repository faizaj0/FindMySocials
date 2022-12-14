import { React } from "react";
import { useSwiper } from "swiper/react";

import { Image, Box, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";


export default function Userdetail() {
  const swiper = useSwiper();
  return (
    <div className="flex-container userdetail">
        <h1>Julia Smith</h1>
        <p>Distance: 100m</p>
        <Button className="btn-grad" onClick={() => swiper.slideNext()}>
          Check Out My Socials
        </Button>
    </div>
  );
}
