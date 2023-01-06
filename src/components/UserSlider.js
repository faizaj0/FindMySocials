import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProfileImage from "./ProfileImage.js";
import UserSliderItem from "./UserSliderItem.js";

export default function UserSlider({ users, initialSlide=0, userProfile }) {
    const placeholder = "https://via.placeholder.com/250x250";

    return (
        <Swiper
            className="swiper"
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            initialSlide={initialSlide}
        >
            {users && users.map((item, index) => (
                <SwiperSlide className="slide1" key={index}>
                    <UserSliderItem item={item} userProfile={userProfile} />
                    <ProfileImage imgSrc={placeholder} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
