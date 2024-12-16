import { useEffect, useState } from "react";

import { useInput } from "../../hooks/useInput";
import Dropdown from "../../ui/dropdown/Dropdown";
import Checkbox from "../../ui/input/Checkbox";
import Input from "../../ui/input/Input";
import { isValidSelectedOption, isValidText } from "../../util/validation";
import cssClasses from "./CheckoutPage.module.css";

function AddressInfo({ onChangeValidity }) {
  const {
    value: streetValue,
    handleInputChange: handleStreetChange,
    handleInputBlur: handleStreetBlur,
    hasError: streetHasError,
    isValid: streetIsValid,
  } = useInput("", isValidText);

  const {
    value: cityValue,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
    hasError: cityHasError,
    isValid: cityIsValid,
  } = useInput("", isValidText);

  const {
    value: stateValue,
    handleInputChange: handleStateChange,
    handleInputBlur: handleStateBlur,
    hasError: stateHasError,
    isValid: stateIsValid,
  } = useInput("", isValidText);

  const {
    value: zipCodeValue,
    handleInputChange: handleZipCodeChange,
    handleInputBlur: handleZipCodeBlur,
    hasError: zipCodeHasError,
    isValid: zipCodeIsValid,
  } = useInput("", isValidText); // Replace isValidText with your zip code validation if needed
  const [countryIsValid, setCountryIsValid] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Country");

  function onChangeSelected(selected) {
    setSelectedCountry(selected);
  }

  useEffect(() => {
    // it will check if the selected option is equal to the first option it will return false.
    isValidSelectedOption("Country", selectedCountry)
      ? setCountryIsValid(true)
      : setCountryIsValid(false);
  }, [selectedCountry])
  
    
  useEffect(() => {
    onChangeValidity(
      streetIsValid && cityIsValid && zipCodeIsValid && stateIsValid && countryIsValid
    );
  }, [streetIsValid, cityIsValid, zipCodeIsValid,stateIsValid,countryIsValid]);

  
  

  return (
    <div className={cssClasses["address-info"]}>
      <h2 className={cssClasses["info-title"]}>Shipping Address</h2>
      
      <Input
        label="Street Address *"
        name="street"
        placeholder="Street Address"
        value={streetValue}
        onChange={handleStreetChange}
        onBlur={handleStreetBlur}
        isValid={streetIsValid}
        error={streetHasError ? "Please enter a valid street address" : null}
      />
      <Dropdown
        className={cssClasses["dropdown-list"]}
        label="Country *"
        onChangeSelected={onChangeSelected}
        options={["Country", "Afghanistan", "Pakistan", "Iran"]}
      />
        <Input
        name="country"
        value={selectedCountry}
        type="hidden"
      />
      <Input
        label="Town / City *"
        name="city"
        placeholder="Town / City"
        value={cityValue}
        onChange={handleCityChange}
        onBlur={handleCityBlur}
        isValid={cityIsValid}
        error={cityHasError ? "Please enter a valid city" : null}
      />
      <div className={cssClasses["two-inputs-wrapper"]}>
        <Input
          label="State"
          name="state"
          placeholder="State"
          value={stateValue}
          onChange={handleStateChange}
          onBlur={handleStateBlur}
          isValid={stateIsValid}
          error={stateHasError ? "Please enter a valid State" : null}
        />
        <Input
          label="ZIP CODE"
          name="zipCode"
          placeholder="Zip Code"
          value={zipCodeValue}
          onChange={handleZipCodeChange}
          onBlur={handleZipCodeBlur}
          isValid={zipCodeIsValid}
          error={zipCodeHasError ? "Please enter a valid zip code" : null}
        />
      </div>
      <Checkbox label="Use a different billing address (optional)" />
    </div>
  );
}

export default AddressInfo;
