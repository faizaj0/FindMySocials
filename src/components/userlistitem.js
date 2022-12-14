import { Image, Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Footer from "./footer.js";

import Userdetail from "../screens/userdetail.js";
import Usersocials from "./usersocials.js";
import ProfileImage from "./userprofileimg.js";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Userlistitem() {
  const placeholder = "https://via.placeholder.com/1080x1400.png";
  return (
    <div className="flex-container swipe-profile">
      <Swiper
        // direction={"vertical"}
        className="swiper"
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slide1">
          <Userdetail />
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <Usersocials />
        </SwiperSlide>
        <span slot="container-start"></span>
        <span slot="container-end"></span>
        <span slot="wrapper-start"></span>
        <span slot="wrapper-end"></span>
      </Swiper>
      <ProfileImage />
      <Footer />
    </div>
  );
}
