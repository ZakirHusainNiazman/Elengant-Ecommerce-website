import { useState,useContext } from "react";

import searchIcon from "../../../assets/home-images/search-icon.svg";
import cartIcon from "../../../assets/home-images/shopping-cart-icon.svg";
import heartIcon from "../../../assets/home-images/heart-icon.svg";
import facebookIcon from "../../../assets/home-images/facebook-black.svg";

import logo from "../../../assets/home-images/logo.svg";
import profileIcon from "../../../assets/home-images/profile-icon.svg";

import BurgerIcon from "../../../ui/burger-icon/BurgerIcon.jsx";

import cssClasses from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../store/cart-context/shopping-cart-context.jsx";

function Navbar({ toggleFlyoutCartOpen }) {
  const [resNavIsOpen, setResNavIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const { items } = useContext(CartContext);

  function handleOpenNav() {
    setResNavIsOpen((oldState) => !oldState);
  }

  function hanldeSearchOpen() {
    setIsSearching((isOpen) => !isOpen);
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
              <div className={cssClasses["search-icon"]}>
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
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses["active"] : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses["active"] : undefined
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses["active"] : undefined
              }
              to="/product"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses["active"] : undefined
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <ul className={cssClasses["navigation-links"]}>
          <li className={cssClasses["profile-links-con"]}>
            <form action="" className={cssClasses["search-form"]}>
              <div className={cssClasses["search-icon-con"]}>
                <img
                  src={searchIcon}
                  id="search"
                  alt="search icon"
                  className={cssClasses["search-icon"]}
                  onClick={hanldeSearchOpen}
                />
                {isSearching && (
                  <input
                    type="text"
                    placeholder="Search"
                    className={cssClasses["search-input"]}
                  />
                )}
              </div>
            </form>
            <div className={cssClasses["profile-icon-con"]}>
              <a href="">
                <img src={profileIcon} alt="" />
              </a>
            </div>
          </li>
          <li>
            <button onClick={toggleFlyoutCartOpen} className={cssClasses["cart-btn"]}>
              <img src={cartIcon} alt="cart icon" />
              <span className={cssClasses["cart-items-no"]}>
                {items.length}
              </span>
            </button>
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
