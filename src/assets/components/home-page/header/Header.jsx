import { useState } from "react";


import DiscountRebon from "../../shared/rebon/DiscountRebon.jsx";
import Navbar from "../../shared/nabar/Navbar.jsx";

import HeroSlider from "./hero-slider/HeroSlider";
import HeaderContent from "./header-body/HeaderContent";

function Header() {
  const [navIsActive, setNavIsActive] = useState(false);

  function handleNavExpaned() {
    setNavIsActive((oldState) => !oldState);
    console.log(navIsActive);
    
  }
  return (
    <header>
      <DiscountRebon />
      <div className="container">
        
        <Navbar onExpaned={handleNavExpaned} />
        <HeroSlider />
        <HeaderContent />
      </div>
    </header>
  );
}

export default Header;
