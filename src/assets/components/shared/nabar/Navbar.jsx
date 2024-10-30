import { useState } from 'react';


import searchIcon from "../../../../../public/Images/search-icon.svg";
import cartIcon from "../../../../../public/Images/shopping-cart-icon.svg";
import heartIcon from "../../../../../public/Images/heart-icon.svg";
import facebookIcon from "../../../../../public/Images/facebook-black.svg";

import logo from "../../../../../public/Images/logo.svg";
import profileIcon from "../../../../../public/Images/profile-icon.svg";

import BurgerIcon from "../../../ui/burger-icon/BurgerIcon.jsx";

import cssClasses from "./Navbar.module.css";
function Navbar() {
  const [resNavIsOpen, setResNavIsOpen] = useState(false);

  function handleOpenNav() {
    setResNavIsOpen((oldState) => !oldState);
  }
  
  return (
    <>
      <nav
        className={`${cssClasses["navbar"]} ${cssClasses["container"]} ${
          resNavIsOpen && cssClasses["mobile-navbar"]
        }`}
      >
        <div className={cssClasses["logo-con"]}>
          <BurgerIcon handleOpenNav={handleOpenNav} />
          <img src={logo} />
        </div>
        <ul className={cssClasses["tab-buttons"]}>
            <li className={cssClasses["res-search-con"]}>
              <form action="" className={cssClasses["search-form"]}>
                <div htmlFor={cssClasses["search-icon"]}>
                  <img
                    src={searchIcon}
                    id="search"
                    alt="search icon"
                    className={cssClasses["search-icon"]}
                  />
                </div>
                <input
              type="text"
              placeholder="Search"
              className={cssClasses["search-input"]}
            />
              </form>
            </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <ul className={cssClasses["navigation-links"]}>
          <li className={cssClasses["profile-links-con"]}>
            <form action="" className={cssClasses["search-form"]}>
              <div htmlFor={cssClasses["search-icon"]}>
                <img
                  src={searchIcon}
                  id="search"
                  alt="search icon"
                  className={cssClasses["search-icon"]}
                />
              </div>
              {/* <input
              type="text"
              placeholder="Search"
              className={cssClasses["search-input"]}
            /> */}
            </form>
            <div className={cssClasses["profile-icon-con"]}>
              <a href="">
                <img src={profileIcon} alt="" />
              </a>
            </div>
          </li>
          <li>
            <a href="" className={cssClasses["cart-btn"]}>
              <img src={cartIcon} alt="cart icon" />
              <span className={cssClasses["cart-items-no"]}>2</span>
            </a>
          </li>
        </ul>
        <ul className={cssClasses["res-navigation-links"]}>
          <li>
            <a href="">
              <span>Cart</span>
              <div className={cssClasses["icons-con"]}>
                <img src={cartIcon} alt="cart icon" />
                <span className={cssClasses["cart-items-no"]}>2</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <span>Cart</span>
              <div className={cssClasses["icons-con"]}>
                <img src={heartIcon} alt="cart icon" />
                <span className={cssClasses["cart-items-no"]}>2</span>
              </div>
            </a>
          </li>
          <li>
            <ul className={cssClasses["nav-bottom-con"]}>
              <li>
                <a href="" className={cssClasses["signup-btn"]}>
                  Signup
                </a>
              </li>
              <li>
                <ul className={cssClasses["nav-socials-con"]}>
                  <li>
                    <img src={facebookIcon} alt="" />
                  </li>
                  <li>
                    <img src={facebookIcon} alt="" />
                  </li>
                  <li>
                    <img src={facebookIcon} alt="" />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
