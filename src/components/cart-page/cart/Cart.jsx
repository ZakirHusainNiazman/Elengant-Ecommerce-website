import { useState, useContext,useEffect } from "react";

import { CartContext } from "../../../store/cart-context/shopping-cart-context";
import CartItem from "../../../ui/flyout-cart/CartItem";
import { formatter } from "../../../dummy-products";
import RadioButton from "../../../ui/radio-button/RadioButton";
import Button from "../../../ui/buttons/Button";
import PriceWithLabel from "../../../ui/price/PriceWithLabel";

import discountIcon from "../../../assets/home-images/Discount-logo.svg";

import cssClasses from "./Cart.module.css";
import DetailedCartItem from "./detailed-cart-item/DetailedCartItem.jsx";

function Cart({ handleOrderState }) {
  const { items } = useContext(CartContext);
  const [shippingType, setShippingType] = useState("free");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  function handleShippingType(value) {
    setShippingType(value);
  }

  useEffect(() => {
  
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 620);    
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
  }, []);
  

  const cartItems = items.map((item, index) => (
    isSmallScreen ?
      <CartItem
      key={index}
      {...item}
    />
    :
    <DetailedCartItem
      key={index}
      {...item}
    />
    
  ));
  return (
    <div className={cssClasses["cart-wrapper"]}>
      <ul className={cssClasses["items-wrapper"]}>
        <li className={cssClasses["item-header"]}>
          <div className={cssClasses.col1}>
            <p>Product</p>
          </div>
          <div className={cssClasses.col2}>
            <p>Quantity</p>
          </div>
          <div className={cssClasses.col3}>
            <p>Price</p>
          </div>
          <div className={cssClasses.col4}>
            <p>Subtotal</p>
          </div>
        </li>
        {items.length === 0 ? <p>No Item in the cart.</p> : cartItems}
      </ul>
      <div className={cssClasses["cart-summary"]}>
        <h2 className={cssClasses["summary-title"]}>Cart summary</h2>
        <div className={cssClasses["charges-summary"]}>
          <RadioButton
            name="paymentMethod"
            label="Free shipping"
            checked={shippingType === "free"}
            onCheck={() => handleShippingType("free")}
            value="$29.00"
          />
          <RadioButton
            name="paymentMethod"
            label="Express shipping"
            checked={shippingType === "express"}
            onCheck={() => handleShippingType("express")}
            value="$30.00"
          />
          <RadioButton
            name="paymentMethod"
            label="Pick Up"
            checked={shippingType === "pickup"}
            onCheck={() => handleShippingType("pickup")}
            value="$40.00"
          />
        </div>
        <div className={cssClasses["price-summary-wrapper"]}>
          <PriceWithLabel label="subtotal" price="$55.00" isThick />
          <PriceWithLabel label="subtotal" price="$55.00" />
        </div>
        <Button onClick={handleOrderState}>Checkout</Button>
      </div>
      <div className={cssClasses["coupon-con"]}>
        <h2 className={cssClasses["coupon-title"]}>Have a coupon?</h2>
        <p className={cssClasses["coupon-sub-title"]}>Have a coupon?</p>
        <form className={cssClasses["coupon-form"]}>
          <img src={discountIcon} alt="" />
          <input
            className={cssClasses["coupon-form-input"]}
            placeholder="Coupon Code"
            type="text"
          />
          <button className={cssClasses["coupon-form-btn"]}>Apply</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
