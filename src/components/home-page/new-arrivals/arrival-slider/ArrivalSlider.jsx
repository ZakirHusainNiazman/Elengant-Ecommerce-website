import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination } from "swiper/modules";

import ProductCard from "../../../../ui/product-card/ProductCard";

import './ArrivalSlider.css'
import { DUMMY_PRODUCTS } from "../../../../dummy-products";

function ArrivalSlider() {
  return (
    <div className="arrival-slider-con">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
      >
        {DUMMY_PRODUCTS.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              pid={product.id}
              image={product.images[0]}
              productName={product.title}
              price={product.price}
              status={product.status}
              discount={product.discount}
              isAdded={true}
              className="slider-item-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ArrivalSlider;
