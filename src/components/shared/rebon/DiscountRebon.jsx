import { useState } from "react";


import RightArrowBtn from "../../../ui/right-arrow-btn/RightArrowBtn";
import descoutImage from "../../../assets/home-images/Discount-logo.svg";
import closeSign from "../../../assets/home-images/close.svg";

import cssClasses from "./DiscountRebon.module.css";

export default function DiscountRebon() {
    const [hasDiscount, setHasDiscount] = useState(true);
    const [showDiscount, setShowDiscount] = useState(true);
    function handleClose() {
        setShowDiscount(false);
    }
  return (
    <>
      {hasDiscount && showDiscount && (
        <div className={cssClasses["descount-rebon"]}>
          <div className={cssClasses["descount-rebon-content"]}>
            <img src={descoutImage} alt="" />
            <p className={cssClasses["descount-rebon-msg"]}>
              30% off storewide — Limited time!
            </p>
            <RightArrowBtn cssClass="arrow-btn" label="Shop Now" url="#" />
          </div>
          <button className={cssClasses["close-btn"]} onClick={handleClose}>
            <img src={closeSign} alt="close sign" />
          </button>
        </div>
      )}
    </>
  );
}
