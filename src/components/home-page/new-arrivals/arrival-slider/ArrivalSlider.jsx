import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination } from "swiper/modules";

import ProductCard from "../../../../ui/product-card/ProductCard";

import './ArrivalSlider.css'
import { DUMMY_PRODUCTS } from "../../../../dummy-products";

function ArrivalSlider() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  return (
    <div className="arrival-slider-con">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
      >
        {DUMMY_PRODUCTS.map((product) =>{ 
          const isInWishlist = wishlistItems.some((item)=>item.id === product.id)
          return (
            <SwiperSlide key={product.id}>
              <ProductCard
                pid={product.id}
                image={product.images[0]}
                productName={product.title}
                price={product.price}
                status={product.status}
                discount={product.discount}
                isAdded={isInWishlist}
                className="slider-item-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ArrivalSlider;
