import { useState, useEffect } from "react";

import { DUMMY_PRODUCTS,calculatePrice } from "../dummy-products.js";

import ProductCard from "../ui/product-card/ProductCard.jsx";


import cssClasses from "../components/shop-page/Shop.module.css";

import HeroSection from "../ui/hero-section/HeroSection.jsx";

import heroImage from "../assets/shop-images/hero-image.svg";

import Dropdown from "../ui/dropdown/Dropdown.jsx";
import ToolbarIcon from "../ui/toolbar-icon/ToolbarIcon.jsx";

function ShopPage() {
  const [layout, setlayout] = useState("");

  const handleResize = () => setWindowWidth(window.innerWidth);
  const windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
       switch (true) {
         case windowWidth >= 1024 :
           setlayout("");
           break;
         default:
           setlayout("grid");
           break;
       }
    })
  function handleLayout(type) {
    setlayout(type)
  }
  console.log(layout);
  
  const productsToShow = layout === 'grid' ? 9 : 12;
  
  return (
    <div className={`${cssClasses["shop-page"]}`}>
      <HeroSection
        title="Shop Page"
        subTitle="Let’s design the place you always imagined."
        image={heroImage}
        path={["Home", "Shop"]}
      />
      <div>
        <div className={`${cssClasses["products-header"]} container`}>
          <div className={cssClasses["filter-con"]}>
            <Dropdown
              options={[
                "All Rooms",
                "Living Room",
                "Bedroom",
                "Kitchen",
                "Bathroom",
                "Dinning",
                "Outdoor",
              ]}
              label="CATEGORIES"
              className={cssClasses["dropdown-half"]}
            />
            <Dropdown
              options={[
                "All Price",
                "$0.00 - 99.99",
                "$200.00 - 299.99",
                "$300.00 - 399.99",
                "$400.00+",
              ]}
              label="PRICE"
              className={cssClasses["dropdown-half"]}
            />
          </div>
          <div className={cssClasses["toolbar"]}>
            <div className={cssClasses["toolbar-icons-con"]}>
              <div
                className={cssClasses["toolbar-icon-wrapper"]}
                onClick={() => handleLayout("")}
              >
                <ToolbarIcon iconsNo={9} isActive={layout === ""} />
              </div>
              <div
                className={cssClasses["toolbar-icon-wrapper"]}
                onClick={() => handleLayout("grid")}
              >
                <ToolbarIcon iconsNo={4} isGrid isActive={layout === "grid"} />
              </div>
              <div
                className={cssClasses["toolbar-icon-wrapper"]}
                onClick={() => handleLayout("verticle")}
              >
                <ToolbarIcon
                  iconsNo={2}
                  isVerticle={true}
                  isActive={layout === "verticle"}
                />
              </div>
              <div
                className={cssClasses["toolbar-icon-wrapper"]}
                onClick={() => handleLayout("horizontle")}
              >
                <ToolbarIcon
                  iconsNo={2}
                  isHorizontle
                  isActive={layout === "horizontle"}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${cssClasses["products-con"]} container ${
            cssClasses[`${layout}`]
          }`}
        >
          {DUMMY_PRODUCTS.slice(0,productsToShow).map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.images[0]}
                productName={product.title}
                price={product.price}
                layout={layout}
                status={product.status}
                stars={product.stars}
                discount={product.discount}
                pid={product.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
