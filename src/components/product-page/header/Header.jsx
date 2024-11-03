import { useState } from "react";

import DiscountRebon from "../../shared/rebon/DiscountRebon.jsx";
import Navbar from "../../shared/nabar/Navbar.jsx";

import cssClasses from "../ProductPage.module.css";
import ProductSlider from "./product-slider/ProductSlider.jsx";

import greaterThanIcon from "../../../../public/images/product-page-images/greater-than-icon.svg";
import productImage1 from "../../../../public/images/product-page-images/product-image1.svg";
import productImage2 from "../../../../public/images/product-page-images/product-image2.svg";
import productImage3 from "../../../../public/images/product-page-images/product-image3.svg";
import starIcon from "../../../../public/images/product-page-images/empty-star-icon.svg";

import productColor1Image from "../../../../public/images/product-page-images/product-color1-image.svg";
import productColor2Image from "../../../../public/images/product-page-images/product-color2-image.svg";
import productColor3Image from "../../../../public/images/product-page-images/product-color3-image.svg";
import productColor4Image from "../../../../public/images/product-page-images/product-color4-image.svg";

import { CiHeart } from "react-icons/ci";

function Header() {
  const [showColors, setShowColors] = useState(false);

  function toggleShowColor() {
    setShowColors((oldState) => !oldState);
  }
  return (
    <header className={`${cssClasses["product-page-header"]}}`}>
      <DiscountRebon />
      <Navbar />
      <ul
        className={`${cssClasses["page-path-con"]} ${cssClasses["container"]} `}
      >
        <li>
          <span>Home </span>
          <img src={greaterThanIcon} alt="" />
        </li>
        <li>
          <span>Shop </span>
          <img src={greaterThanIcon} alt="" />
        </li>
        <li>
          <span>Contact Us </span>
          <img src={greaterThanIcon} alt="" />
        </li>
        <li>
          <span>Product </span>
        </li>
      </ul>
      <div
        className={`${cssClasses["product-info-con"]} ${cssClasses["container"]}`}
      >
        <div
          className={`${cssClasses["product-slider-con"]} ${cssClasses["item1"]} `}
        >
          <ProductSlider />
          <div className={cssClasses["product-images-con"]}>
            <img src={productImage1} alt="" />
            <img src={productImage2} alt="" />
            <img src={productImage3} alt="" />
          </div>
        </div>
        <div className={`${cssClasses["product-info"]} ${cssClasses["item2"]}`}>
          <div className={cssClasses["reviews-info"]}>
            <span className={cssClasses["review-stars"]}>
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </span>
            <span className={cssClasses["review-count"]}>11 Reviews</span>
          </div>
          <h1 className={cssClasses["product-info-title"]}>Tray Table</h1>
          <p className={cssClasses["product-info-body"]}>
            Buy one or buy a few and make every space where you sit more
            convenient. Light and easy to move around with removable tray top,
            handy for serving snacks.
          </p>
          <span className={cssClasses["product-info-prices"]}>
            <span className={cssClasses["product-new-price"]}>$199.00</span>
            <span className={cssClasses["product-old-price"]}>$400.00</span>
          </span>
        <div className={cssClasses["offer-info"]}>
          <span className={cssClasses["offer-msg"]}>Offer expires in:</span>
          <div className={cssClasses["offer-expiry-date-con"]}>
            <div className={cssClasses["expiry-date-card"]}>
              <span className={cssClasses["date-no"]}>02</span>
              <span className={cssClasses["date-label"]}>Days</span>
            </div>
            <div className={cssClasses["expiry-date-card"]}>
              <span className={cssClasses["date-no"]}>02</span>
              <span className={cssClasses["date-label"]}>Days</span>
            </div>
            <div className={cssClasses["expiry-date-card"]}>
              <span className={cssClasses["date-no"]}>02</span>
              <span className={cssClasses["date-label"]}>Days</span>
            </div>
            <div className={cssClasses["expiry-date-card"]}>
              <span className={cssClasses["date-no"]}>02</span>
              <span className={cssClasses["date-label"]}>Days</span>
            </div>
          </div>
        </div>
        </div>
        <div
          className={`${cssClasses["product-info-footer"]} ${cssClasses["item3"]}`}
        >
          <div className={cssClasses["product-measurements"]}>
            <p className={cssClasses["measurements-title"]}>Measurements</p>
            <p className={cssClasses["measurements-body"]}>17 1/2x20 5/8</p>
          </div>
          <div className={cssClasses["product-colors"]}>
            <p
              className={`${cssClasses["color-title"]} ${
                showColors && cssClasses["color-title-clicked"]
              }`}
              onClick={toggleShowColor}
            >
              Choose Color <img src={greaterThanIcon} alt="" />
            </p>
            {showColors && (
              <>
                <p className={cssClasses["color-name"]}>Black</p>
                <div className={cssClasses["product-small-colors-image"]}>
                  <img src={productColor1Image} alt="" />
                  <img src={productColor3Image} alt="" />
                  <img src={productColor4Image} alt="" />
                  <img src={productColor2Image} alt="" />
                </div>
              </>
            )}
          </div>
          <div className={cssClasses["product-actions-btns-con"]}>
            <div className={cssClasses["product-actions-btns-top"]}>
              <div className={cssClasses["product-count-con"]}>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <a className={cssClasses["wishlist-btn"]}>
                <CiHeart />
                Wishlist
              </a>
            </div>
            <a href="" className={cssClasses["add-to-cart-bbtn"]}>
              Add to Cart
            </a>
          </div>
        </div>
        <div
          className={`${cssClasses["product-additional-info"]} ${cssClasses["item4"]}`}
        >
          <p>
            <span>SKU</span>
            <span>1117</span>
          </p>
          <p>
            <span>CATEGORY</span>
            <span>Living Room, Bedroom</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
