import heroImage from "../../../../../public/images/hero-image.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./HeroSlider.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";



function HeroSlider() {
    return (
      <div className="hero-slider">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={heroImage} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default HeroSlider;
