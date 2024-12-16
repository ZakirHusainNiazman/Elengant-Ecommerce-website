import { Swiper, SwiperSlide } from "swiper/react";

import productImage1 from "../../../../assets/product-images/product-slider-image.svg";

// Import Swiper styles

import './ProductSlider.css'
import { Navigation, Mousewheel} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ProductSlider({image}) {
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
          <img src={image} alt="" className="product-slider-image" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default ProductSlider;
