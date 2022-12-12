import { Image, Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Footer from "./footer.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

export default function Userlistitem() {
  const placeholder = "https://via.placeholder.com/1080x1400.png";
  return (
    <div>
      <Swiper
        // direction={"vertical"}
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <Image src={placeholder} />
        </SwiperSlide>
        <SwiperSlide><Image src={placeholder} /></SwiperSlide>
        <SwiperSlide><Image src={placeholder} /></SwiperSlide>
        <SwiperSlide><Image src={placeholder} /></SwiperSlide>
      </Swiper>
      <h1>James Smith</h1>
      <p>Distance:</p>
      <Button className="btn-grad">Check Out My Socials</Button>
      <Footer />
    </div>
  );
}
