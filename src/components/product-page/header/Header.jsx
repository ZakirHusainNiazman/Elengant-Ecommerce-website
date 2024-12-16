import { useState } from "react";
import { useDispatch } from "react-redux";

import cssClasses from "../ProductPage.module.css";
import ProductSlider from "./product-slider/ProductSlider.jsx";

import greaterThanIcon from "../../../assets/product-images/greater-than-icon.svg";
import productImage1 from "../../../assets/product-images/product-image1.svg";
import productImage2 from "../../../assets/product-images/product-image2.svg";
import productImage3 from "../../../assets/product-images/product-image3.svg";

import starIcon from "../../../assets/product-images/empty-star-icon.svg";

import productColor1Image from "../../../assets/product-images/product-color1-image.svg";
import productColor2Image from "../../../assets/product-images/product-color2-image.svg";
import productColor3Image from "../../../assets/product-images/product-color3-image.svg";
import productColor4Image from "../../../assets/product-images/product-color4-image.svg";

import CartQtyBtn from '../../../ui/cart-actions/CartQtyBtn.jsx'
import Button from "../../../ui/buttons/Button.jsx";

import { CiHeart } from "react-icons/ci";
import { calculatePrice, formatter } from "../../../dummy-products.js";
import ReviewStars from "../../../ui/stars/ReviewStars.jsx";
import { cartActions } from "../../../store/cartSlice.js";

function Header({
  images,
  title,
  description,
  details,
  price,
  discount,
  stars,
  colors,
  id,
  quantity
}) {
  const [showColors, setShowColors] = useState(false);
  const dispatch = useDispatch();

  function handleAddItemToCart(){
    dispatch(cartActions.addItem({image:images[0],
  name:title,
  description,
  details,
  price,
  discount,
  stars,
  color:'black',
  id,
  quantity:1}));
  }

  var newPrice = price;
  if (discount > 0) {
    newPrice = calculatePrice(price, discount);
  }
  function toggleShowColor() {
    setShowColors((oldState) => !oldState);
  }
  return (
    <div className={cssClasses["product-info-con"]}>
      <div
        className={`${cssClasses["product-slider-con"]} ${cssClasses["item1"]} `}
      >
        <ProductSlider image={images[0]} />
        <div className={cssClasses["product-images-con"]}>
          {images.map((image,index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
      <div className={`${cssClasses["product-info"]} ${cssClasses["item2"]}`}>
        <div className={cssClasses["reviews-info"]}>
          <ReviewStars starsNo={stars} />
          <span className={cssClasses["review-count"]}>11 Reviews</span>
        </div>
         <h1 className={cssClasses["product-info-title"]}>{title}</h1>
        <p className={cssClasses["product-info-body"]}>{description}</p>
        <span className={cssClasses["product-info-prices"]}>
          <span className={cssClasses["product-new-price"]}>
            {formatter(newPrice)}
          </span>
          {newPrice !== price && (
            <span className={cssClasses["product-old-price"]}>
              {formatter(price)}
            </span>
          )}
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
                {colors.map((color, index) => <img key={index} className={cssClasses["product-color-image"]} src={color.image} alt="" />)}
              </div>
            </>
          )}
        </div>
        <div className={cssClasses["product-actions-btns-con"]}>
          <div className={cssClasses["product-actions-btns-top"]}>
            <CartQtyBtn
              className={cssClasses["product-count-con"]}
              quantity={0}
              pid={id}
            />
            <a className={cssClasses["wishlist-btn"]}>
              <CiHeart />
              Wishlist
            </a>
          </div>
          <Button onClick={()=>handleAddItemToCart(id)} className={cssClasses["add-to-cart-bbtn"]}>
            Add Item To Cart
          </Button>
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
  );
}

export default Header;
