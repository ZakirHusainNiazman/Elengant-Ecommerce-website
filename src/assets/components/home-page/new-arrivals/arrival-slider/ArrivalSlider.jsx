import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination } from "swiper/modules";

import lampImage from "../../../../../../public/images/lamp-image.svg";
import ProductCard from "./ProductCard";

import './ArrivalSlider.css'

function ArrivalSlider() {
  return (
    <div className="arrival-slider-con">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            img={lampImage}
            imgAlt="lamp Image"
            typeLabel="New"
            dAmount="-50%"
            pName="Loveseat Sofa"
            newPrice="$199.00"
            oldPrice="$100.00"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ArrivalSlider;
