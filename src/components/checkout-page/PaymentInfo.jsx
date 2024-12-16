import { useState,useEffect } from "react";

import { useInput } from "../../hooks/useInput";

import Input from "../../ui/input/Input";
import cssClasses from "./CheckoutPage.module.css";
import { isValidText } from "../../util/validation";
import RadioButton from "../../ui/radio-button/RadioButton";

// images
import paypalIcon from "../../assets/ui-images/paypal-icon.svg";
import creditCardIcon from "../../assets/ui-images/credit-card-icon.svg";

function PaymentInfo({ onChangeValidity }) {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  function handleClick(value) {
    setPaymentMethod(value);
  }

  // for validation
  const {
    value: cardNoValue,
    handleInputChange: handleCardNoChange,
    handleInputBlur: handleCardNoBlur,
    hasError: cardNoHasError,
    isValid: cardNoIsValid,
  } = useInput("", isValidText);

  const {
    value: expDateValue,
    handleInputChange: handleExpDateChange,
    handleInputBlur: handleExpDateBlur,
    hasError: expDateHasError,
    isValid: expDateIsValid,
  } = useInput("", isValidText);

  const {
    value: cvcValue,
    handleInputChange: handleCVCChange,
    handleInputBlur: handleCVCBlur,
    hasError: cvcHasError,
    isValid: cvcIsValid,
  } = useInput("", isValidText);

  // console.log("e : " + expDateIsValid);
  // console.log("c : " + cvcIsValid);
  // console.log("card : " + cardNoIsValid);

  useEffect(() => {
    onChangeValidity(cardNoIsValid && expDateIsValid && cvcIsValid);
  }, [cardNoIsValid,expDateIsValid,cvcIsValid]);

  return (
    <div className={cssClasses["payment-info"]}>
      <h2 className={cssClasses["info-title"]}>Payment method</h2>
      <div className={cssClasses["method-types-wapper"]}>
        <RadioButton
          name="paymentMethod"
          label="Pay by Card Credit"
          value="creditCard"
          icon={creditCardIcon}
          checked={paymentMethod === "creditCard" ? "checked" : ""}
          onCheck={() => handleClick("creditCard")}
        />
        <RadioButton
          name="paymentMethod"
          label="Pay by PayPal"
          value="paypal"
          icon={paypalIcon}
          checked={paymentMethod === "paypal" ? "checked" : ""}
          onCheck={() => handleClick("paypal")}
        />
      </div>
      <Input
        label="CARD NUMBER"
        name="cardNo"
        placeholder="1234 1234 1234"
        value={cardNoValue}
        onChange={handleCardNoChange}
        onBlur={handleCardNoBlur}
        isValid={cardNoIsValid}
        error={cardNoHasError ? "Please enter a valid card number" : null}
      />
      <div className={cssClasses["two-inputs-wrapper"]}>
        <Input
          label="Expiration date"
          name="expDate"
          placeholder="Expiration date"
          value={expDateValue}
          onChange={handleExpDateChange}
          onBlur={handleExpDateBlur}
          isValid={expDateIsValid}
          error={
            expDateHasError ? "Please enter a valid expiration date" : null
          }
        />
        <Input
          label="CVC"
          name="cvc"
          placeholder="CVC code"
          value={cvcValue}
          onChange={handleCVCChange}
          onBlur={handleCVCBlur}
          isValid={cvcIsValid}
          error={cvcHasError ? "Please enter a valid CVC code" : null}
        />
      </div>
    </div>
  );
}

export default PaymentInfo;
