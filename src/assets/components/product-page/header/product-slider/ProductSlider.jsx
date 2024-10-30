import { Swiper, SwiperSlide } from "swiper/react";

import heroImage from "../../../../../../public/images/product-page-images/product-slider-image.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProductSlider.css";

import {  Pagination, Navigation } from "swiper/modules";

function ProductSlider() {
  return (
    <div className="product-slider">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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

export default ProductSlider;
