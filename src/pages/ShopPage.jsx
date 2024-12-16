import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import cssClasses from "../components/shop-page/Shop.module.css";

import HeroSection from "../ui/hero-section/HeroSection.jsx";

import heroImage from "../assets/shop-images/hero-image.svg";

import ToolbarIcon from "../ui/toolbar-icon/ToolbarIcon.jsx";
import Products from "../components/shop-page/Products.jsx";
import Dropdown from "../ui/dropdown/Dropdown.jsx";

function ShopPage() {
  const [layout, setlayout] = useState("");
  const params = useParams();
  const [category, setCategory] = useState(
    params.category ? params.category : "all"
  );
  const [priceRange, setPriceRange] = useState({ start: 0, end: null });

  const handleResize = () => setWindowWidth(window.innerWidth);

  // it will catch the size
  const windowWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    switch (true) {
      case windowWidth >= 1024:
        setlayout("");
        break;
      default:
        setlayout("grid");
        break;
    }
  });
  // this function will handle layouts
  function handleLayout(type) {
    setlayout(type);
  }

  function onChangeCategorySelected(value) {
    setCategory(value);
  }
  
  function onChangePriceSelected(value) {
    console.log(value);
    value = parseInt(value);
    
    if (value === -1) {
      setPriceRange({ start: 0, end: Infinity }); // Allow all prices
    } else {
      if (value === 400) {
        setPriceRange({ start: 400, end: Infinity }); // $400 and above
      } else {
        setPriceRange({ start: value, end: value + 100 }); // Specific range
      }
    }
  }

  // this code will hanlde producst rendering based on catgory
 

  return (
    <div className={`${cssClasses["shop-page"]}`}>
      <HeroSection
        title="Shop Page"
        subTitle="Let’s design the place you always imagined."
        backgroundImage={heroImage}
        path={["Home", "Shop"]}
      />
      <div className={`${cssClasses["shop-page-body"]} container`}>
        <div className={cssClasses["products-header"]}>
          <div className={cssClasses["filter-con"]}>
            <Dropdown
              selectedOption={category}
              onChangeValue={onChangeCategorySelected}
              options={[
                { label: "All Rooms", value: "all" },
                { label: "Living Room", value: "living" },
                { label: "Bedroom", value: "bedroom" },
                { label: "Kitchen", value: "kitchen" },
                { label: "Bathroom", value: "bathroom" },
                { label: "Dinning", value: "dinning" },
                { label: "Outdoor", value: "outdoor" },
              ]}
            />
            <Dropdown
              onChangeValue={onChangePriceSelected}
              options={[
                { label: "All Price", value: -1 },
                { label: "$0.00 - 99.99", value: 0.0 },
                { label: "$100.00 - 199.99", value: 100.0 },
                { label: "$200.00 - 299.99", value: 200.0 },
                { label: "$300.00 - 399.99", value: 300.0 },
                { label: "$400.00+", value: 400.0 },
              ]}
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
        <Products priceRange={priceRange} layout={layout} category={category} />
      </div>
    </div>
  );
}

export default ShopPage;
