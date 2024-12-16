import { useState } from "react";
import { useSelector } from "react-redux";

import cartIcon from "../../../assets/home-images/shopping-cart-icon.svg";
import logo from "../../../assets/home-images/logo.svg";
import BurgerIcon from "../../../ui/burger-icon/BurgerIcon.jsx";
import cssClasses from "./Navbar.module.css";
import TextButton from "../../../ui/buttons/TextButton.jsx";
import Search from "./search/Search.jsx";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ toggleFlyoutCartOpen,handleOpenNav }) {
  
  const items = useSelector((state) => state.cart.items);

  

  return (
    <>
      <nav className={cssClasses["navbar"]}>
        <div className={cssClasses["logo-con"]}>
          <TextButton type="button" className={cssClasses["burger-icon"]}>
            <RxHamburgerMenu size={30} onClick={handleOpenNav} />
          </TextButton>
          <img src={logo} />
        </div>
        <ul className={cssClasses["tab-buttons"]}>
          <li>
            <TextButton to="">Home</TextButton>
          </li>
          <li>
            <TextButton to="/shop">Shop</TextButton>
          </li>
          <li>
            <TextButton to="/product"> Product</TextButton>
          </li>
          <li>
            <TextButton to="/contact"> Contact Us</TextButton>
          </li>
        </ul>
        <ul className={cssClasses["navigation-links"]}>
          <li className={cssClasses["profile-links-con"]}>
            <Search />
            <TextButton to="/user-account">
              <FaRegCircleUser style={{ color: "black" }} />
            </TextButton>
          </li>
          <li>
            <button
              onClick={toggleFlyoutCartOpen}
              className={cssClasses["cart-btn"]}
            >
              <img src={cartIcon} alt="cart icon" />
              <span className={cssClasses["cart-items-no"]}>
                {items.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
