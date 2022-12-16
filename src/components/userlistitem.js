

import Footer from "./footer.js";
import Userdetail from "../screens/userdetail.js";
import ProfileImage from "./userprofileimg.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { data } from "../constants/userdummydata";

export default function Userlistitem() {
  return (
    <div className="flex-container swipe-profile">
      <Swiper
        className="swiper"
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide className="slide1">
            <Userdetail item={item} />
            <ProfileImage imgSrc={item.generalinfo.image.uri}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <Footer />
    </div>
  );
}
