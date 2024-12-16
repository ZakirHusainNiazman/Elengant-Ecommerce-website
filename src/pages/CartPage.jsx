import { useState } from "react";

import RadioButton from "../ui/radio-button/RadioButton.jsx";
import Button from "../ui/buttons/Button.jsx";
import PriceWithLabel from "../ui/price/PriceWithLabel.jsx";
import discountIcon from "../assets/home-images/Discount-logo.svg";

import cssClasses from "../components/cart-page/CartPage.module.css";
import NavigationButtonsWrapper from "../components/shared/cart-navigations/NavigationButtonsWrapper.jsx";
import {  formatter } from "../dummy-products.js";
import { useSelector } from "react-redux";
import CartItems from "../components/cart-page/CartItems.jsx";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [shippingType, setShippingType] = useState("free");
  const subTotal = useSelector((state) => state.cart.subTotal);
  const total = useSelector((state) => state.cart.total);
  const navigage = useNavigate();

  function handleShippingType(value) {
    setShippingType(value);
  }

  function handleAddCoupon(event) {
    event.preventDefault();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    navigage(`/checkout/${data.paymentMethod}`);
  }

  return (
    <div className={cssClasses["cart-page-wrapper"]}>
      <div className={cssClasses["header"]}>
        <h1 className={cssClasses["title"]}>Cart</h1>
        <NavigationButtonsWrapper active="cart" />
      </div>
      <div className={cssClasses["cart-wrapper"]}>
        <CartItems/>
        <div className={cssClasses["cart-summary"]}>
          <h2 className={cssClasses["summary-title"]}>Cart summary</h2>
          <form action="" onSubmit={handleFormSubmit}>
            <div className={cssClasses["charges-summary"]}>
              <RadioButton
                name="paymentMethod"
                label="Free shipping"
                checked={shippingType === "free"}
                onCheck={() => handleShippingType("free")}
                price="$0.00"
                value="Free"
              />
              <RadioButton
                name="paymentMethod"
                label="Express shipping"
                checked={shippingType === "express"}
                onCheck={() => handleShippingType("express")}
                price="+$15.00"
                value="Express"
              />
              <RadioButton
                name="paymentMethod"
                label="Pick Up"
                checked={shippingType === "pickup"}
                onCheck={() => handleShippingType("pickup")}
                price="%21.00"
                value="Pickup"
              />
            </div>
            <div className={cssClasses["price-summary-wrapper"]}>
              <PriceWithLabel
                label="subtotal"
                price={formatter(subTotal)}
                isThick
              />
              <PriceWithLabel label="subtotal" price={formatter(total)} />
            </div>
            <Button>Checkout</Button>
          </form>
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
            <button
              className={cssClasses["coupon-form-btn"]}
              onClick={handleAddCoupon}
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
