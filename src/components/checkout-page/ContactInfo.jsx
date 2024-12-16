import { useEffect } from "react";

import { useInput } from "../../hooks/useInput";
import Input from "../../ui/input/Input";
import { isValidEmail, isValidPhoneNumber, isValidText } from "../../util/validation";
import cssClasses from "./CheckoutPage.module.css";

function ContactInfo({ onChangeValidity }) {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    isValid: emailIsValid,
  } = useInput("", isValidEmail);
  const {
    value: phoneValue,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhoneBlur,
    hasError: phoneHasError,
    isValid: phoneIsValid,
  } = useInput("", isValidPhoneNumber);
  const {
    value: fNameValue,
    handleInputChange: handleFNameChange,
    handleInputBlur: handleFNameBlur,
    hasError: fNameHasError,
    isValid: fNameIsValid,
  } = useInput("", isValidText);
  const {
    value: lNameValue,
    handleInputChange: handleLNameChange,
    handleInputBlur: handleLNameBlur,
    hasError: lNameHasError,
    isValid: lNameIsValid,
  } = useInput("", isValidText);

  useEffect(() => {
    onChangeValidity(
      fNameIsValid && lNameIsValid && emailIsValid && phoneIsValid
    );
  }, [fNameIsValid , lNameIsValid , emailIsValid , phoneIsValid]);
  

  return (
    <div className={cssClasses["contact-info"]}>
      <h2 className={cssClasses["info-title"]}>Contact Infomation</h2>
      <div className={cssClasses["two-inputs-wrapper"]}>
        <Input
          label="FIRST Name"
          name="fName"
          placeholder="First Name"
          onChange={handleFNameChange}
          onBlur={handleFNameBlur}
          isValid={fNameIsValid}
          error={fNameHasError ? "Please enter a valid name" : null}
        />
        <Input
          label="LAST Name"
          name="lName"
          placeholder="Last Name"
          onChange={handleLNameChange}
          onBlur={handleLNameBlur}
          isValid={lNameIsValid}
          error={lNameHasError ? "Please enter a valid name" : null}
        />
      </div>
      <Input
        label="Phone Number"
        name="phone"
        placeholder="Phone Number"
        onChange={handlePhoneChange}
        onBlur={handlePhoneBlur}
        isValid={phoneIsValid}
        error={phoneHasError ? "Please enter a valid phone number" : null}
      />
      <Input
        label="Email address"
        name="email"
        placeholder="Your Email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        isValid={emailIsValid}
        error={emailHasError ? "Please enter a valid email address" : null}
      />
    </div>
  );
}

export default ContactInfo

