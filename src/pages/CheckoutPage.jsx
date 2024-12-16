import { useState,useEffect } from 'react';

import Button from "../ui/buttons/Button.jsx";
import cssClasses from "../components/checkout-page/CheckoutPage.module.css";


import NavigationButtonsWrapper from "../components/shared/cart-navigations/NavigationButtonsWrapper.jsx";
import OrderSummary from "../components/checkout-page/OrderSummary.jsx";
import ContactInfo from "../components/checkout-page/ContactInfo.jsx";
import AddressInfo from "../components/checkout-page/AddressInfo.jsx";
import PaymentInfo from "../components/checkout-page/PaymentInfo.jsx";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../store/orderSlice.js';

function CheckoutPage() {
  const [contactInfoIsValid, setContactInfoIsValid] = useState(false);
  const [addressInfoIsValid, setAddressInfoIsValid] = useState(false);
  const [paymentInfoIsValid, setPaymentInfoIsValid] = useState(false);
  const { items, total } = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parm = useParams();

  const shippingType = parm.shippingInfo ?parm.shippingInfo :"Free";

  var shippingFee = 0;

  if (shippingType === "Express") {
    shippingFee = 15;
  } else if (shippingType === "Pickup") {
    shippingFee = 10;
  }
  
  function onContactChange(isValid) {
    setContactInfoIsValid(isValid);
  }
  
  function onAddressChange(isValid) {
    setAddressInfoIsValid(isValid);
  }

  function onPaymentChange(isValid) {
    setPaymentInfoIsValid(isValid);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
  
    
    // if (!(contactInfoIsValid && addressInfoIsValid && paymentInfoIsValid)) {
    //   console.log("form data is invaild");
    //   return;
    // } 

    

    dispatch(
      orderActions.addOrder({
        total: total,
        paymentMethod: data.paymentMethod,
        items: [...items],
      })
    );
    console.log("submitted");
    navigate("/order-completed");
    
  }

  return (
    <div className={cssClasses["checkout-wrapper"]}>
      <div className={cssClasses["header"]}>
        <h1 className={cssClasses["title"]}>Checkout</h1>
        <NavigationButtonsWrapper active="checkout" />
      </div>
      <div className={`${cssClasses["checkout-body"]} container`}>
        <form
          className={cssClasses["checkout-user-details-con"]}
          onSubmit={handleFormSubmit}
        >
          <ContactInfo onChangeValidity={onContactChange} />
          <AddressInfo onChangeValidity={onAddressChange} />
          <PaymentInfo onChangeValidity={onPaymentChange} />
          <Button className={cssClasses["order-btn"]}>Place Order</Button>
        </form>
        <OrderSummary shippingInfo={{ shippingType:shippingType,shippingFee:shippingFee}} />
      </div>
    </div>
  );
}

export default CheckoutPage;
