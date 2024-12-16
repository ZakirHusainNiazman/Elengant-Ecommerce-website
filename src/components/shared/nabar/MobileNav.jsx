import cssClasses from './MobileNav.module.css';
import BurgerIcon from "../../../ui/burger-icon/BurgerIcon.jsx";
import logo from "../../../assets/home-images/logo.svg";
import Search from './search/Search.jsx';
import { BiLogoInstagram, BiSearch } from 'react-icons/bi';
import { SlHandbag, SlSocialYoutube } from 'react-icons/sl';
import { FiFacebook } from 'react-icons/fi';
import TextButton from '../../../ui/buttons/TextButton.jsx';
import { CgClose } from 'react-icons/cg';
import { TiHeartOutline } from 'react-icons/ti';
import Button from "../../../ui/buttons/Button.jsx";


function MobileNav({ handleOpenNav }) {
  return (
    <nav className={cssClasses["mobile-nav"]}>
      <div>
        <div className={cssClasses["logo-con"]}>
          <img src={logo} />
          <TextButton>
            <CgClose size={25} onClick={handleOpenNav} />
          </TextButton>
        </div>
        <form action="" className={cssClasses["search-form"]}>
          <BiSearch size={35} />
          <input
            type="text"
            placeholder="Search"
            className={cssClasses["search-input"]}
          />
        </form>
        <menu className={cssClasses["tab-buttons-wrapper"]}>
          <li>
            <TextButton className={cssClasses["tab-button"]} to="">
              Home
            </TextButton>
          </li>
          <li>
            <TextButton className={cssClasses["tab-button"]} to="/shop">
              Shop
            </TextButton>
          </li>
          <li>
            <TextButton className={cssClasses["tab-button"]} to="/product">
              Product
            </TextButton>
          </li>
          <li>
            <TextButton className={cssClasses["tab-button"]} to="/contact">
              Contact Us
            </TextButton>
          </li>
        </menu>
      </div>
      <ul className={cssClasses["res-navigation-links"]}>
        <li>
          <a href="">
            <span>Cart</span>
            <div className={cssClasses["icons-con"]}>
              <SlHandbag size={25} style={{ color: "#141718" }} />
              <span className={cssClasses["cart-items-no"]}>2</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <span>Cart</span>
            <div className={cssClasses["icons-con"]}>
              <TiHeartOutline style={{ color: "#141718" }} size={30} />
              <span className={cssClasses["cart-items-no"]}>2</span>
            </div>
          </a>
        </li>
        <li>
          <ul className={cssClasses["nav-bottom-con"]}>
            <li>
              <Button>Sign In</Button>
            </li>
            <li>
              <ul className={cssClasses["nav-socials-con"]}>
                <li>
                  <FiFacebook size={24} />
                </li>
                <li>
                  <BiLogoInstagram size={24} />
                </li>
                <li>
                  <SlSocialYoutube size={24} />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav