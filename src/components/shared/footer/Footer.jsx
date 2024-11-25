import footerLogo from "../../../assets/home-images/footer-logo.svg";
import youtubeIcon from "../../../assets/home-images/youtube-icon.svg";
import facebookIcon from "../../../assets/home-images/facebook-icon.svg";
import instagramIcon from "../../../assets/home-images/instagram-icon.svg";

import cssClasses from './Footer.module.css';

function Footer() {
  return (
    <footer className={cssClasses['footer-section']}>
      <div className={cssClasses['footer-content']}>
        <div className={cssClasses['footer-navigation']}>
          <div className={cssClasses['navigation-logo-con']}>
            <img src={footerLogo} />
            <a href="" className={cssClasses['deco-store-link']}>
              Gift & Decoration Store
            </a>
          </div>
          <ul className={cssClasses['tab-buttons']}>
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
        </div>
        <div className={cssClasses['footer-bottom']}>
          <div className={cssClasses['policys-links-con']}>
            <p className={cssClasses['copyright-msg']}>
              Copyright © 2023 3legant. All rights reserved
            </p>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
          </div>
          <div className={cssClasses['footer-socials']}>
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
