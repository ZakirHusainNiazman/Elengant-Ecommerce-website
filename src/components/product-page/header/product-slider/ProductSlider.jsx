import { Swiper, SwiperSlide } from "swiper/react";

import productImage1 from "../../../../../public/images/product-page-images/product-slider-image.svg";

// Import Swiper styles

import './ProductSlider.css'
import { Navigation, Mousewheel} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ProductSlider() {
  return (
    <div className="product-page-slider">
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation,Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={productImage1} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={productImage1} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={productImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImage1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
