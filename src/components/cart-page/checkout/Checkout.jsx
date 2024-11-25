import { useState, useContext } from "react";

import Button from "../../../ui/buttons/Button";
import Checkbox from "../../../ui/input/Checkbox";
import Input from "../../../ui/input/Input";
import RadioButton from "../../../ui/radio-button/RadioButton";
import cssClasses from "./Checkout.module.css";

import creditCardIcon from "../../../assets/ui-images/credit-card-icon.svg";
import paypalIcon from "../../../assets/ui-images/paypal-icon.svg";

import Dropdown from "../../../ui/dropdown/Dropdown.jsx";
import CartItem from "../../../ui/flyout-cart/CartItem.jsx";
import { CartContext } from "../../../store/cart-context/shopping-cart-context.jsx";
import PriceWithLabel from "../../../ui/price/PriceWithLabel.jsx";

function Checkout({ handleOrderState }) {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const { items } = useContext(CartContext);

  function handleClick(value) {
    setPaymentMethod(value);
  }

  var products = (
    <p className={cssClasses["empty-cart-msg"]}>The cart is empty!</p>
  );
  if (items.length > 0) {
    products = items.map((product) => {
      return (
        <CartItem
          key={product.id}
          {...product}
          className={cssClasses["cartItem"]}
        />
      );
    });
  }
  return (
    <div className={cssClasses["checkout-body"]}>
      <form className={cssClasses["checkout-user-details-con"]}>
        <div className={cssClasses["contact-info"]}>
          <h2 className={cssClasses["info-title"]}>Contact Infomation</h2>
          <div className={cssClasses["two-inputs-wrapper"]}>
            <Input label="FIRST Name" name="fName" placeholder="First Name" />
            <Input label="LAST Name" name="lName" placeholder="Last Name" />
          </div>
          <Input label="Phone Number" name="phone" placeholder="Phone Number" />
          <Input label="Email address" name="email" placeholder="Your Email" />
        </div>
        <div className={cssClasses["address-info"]}>
          <h2 className={cssClasses["info-title"]}>Shipping Address</h2>
          <Input
            label="Street Address *"
            name="street"
            placeholder="Stress Address"
          />
          <Dropdown
            className={cssClasses["dropdown-list"]}
            label="Country *"
            options={["Country", "Afghanistan", "Pakistan", "Iran"]}
          />
          <Input label="Town / City *" name="city" placeholder="Town / City" />
          <div className={cssClasses["two-inputs-wrapper"]}>
            <Input label="State" name="state" placeholder="State" />
            <Input label="ZIP CODE" name="lName" placeholder="Zip Code" />
          </div>
          <Checkbox label="Use a different billing address (optional)" />
        </div>
        <div className={cssClasses["payment-info"]}>
          <h2 className={cssClasses["info-title"]}>Payment method</h2>
          <div className={cssClasses["method-types-wapper"]}>
            <RadioButton
              name="paymentMethod"
              label="Pay by Card Credit"
              icon={creditCardIcon}
              checked={paymentMethod === "creditCard" ? "checked" : ""}
              onCheck={() => handleClick("creditCard")}
            />
            <RadioButton
              name="paymentMethod"
              label="Pay by Card Credit"
              icon={paypalIcon}
              checked={paymentMethod === "paypal" ? "checked" : ""}
              onCheck={() => handleClick("paypal")}
            />
          </div>
          <Input
            label="CARD NUMBER"
            name="cardNo"
            placeholder="1234 1234 1234"
          />
          <div className={cssClasses["two-inputs-wrapper"]}>
            <Input
              label="Expiration date"
              name="expDate"
              placeholder="Expiration date"
            />
            <Input label="CVC" name="cvc" placeholder="CVC code" />
          </div>
        </div>
        <Button onClick={handleOrderState} className={cssClasses['order-btn']}>Place Order</Button>
      </form>
      <div className={cssClasses["order-summary"]}>
        <h3 className={cssClasses["summary-title"]}>Order summary</h3>
        <div className={cssClasses["order-items"]}>{products}</div>
        <div className={cssClasses["summary-footer"]}>
          <PriceWithLabel label="Shipping" price="Free" isThick />
          <PriceWithLabel label="Subtotal" price="$99.00" isThick />
          <PriceWithLabel label="Total" price="$234.00" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
