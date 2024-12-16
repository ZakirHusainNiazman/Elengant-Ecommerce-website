import { useState } from 'react'; 
import {AnimatePresence} from 'framer-motion'

import { Outlet } from "react-router-dom"
import DiscountRebon from "../shared/rebon/DiscountRebon";
import Navbar from "../shared/nabar/Navbar";
import Footer from "../shared/footer/Footer";
import FlyoutCart from "../../ui/flyout-cart/FlyoutCart";
import MobileNav from '../shared/nabar/MobileNav';
import Backdrop from '../backdrop/Backdrop';

function RootLayout() {
  const [flyoutCartIsOpen, setFlyoutCartIsOpen] = useState(false);
  const [resNavIsOpen, setResNavIsOpen] = useState(false);

  function toggleFlyoutCartOpen() {
    setFlyoutCartIsOpen((prevState) => !prevState);    
  }

  function handleOpenNav() {
    setResNavIsOpen((oldState) => !oldState);
  }

  return (
    <>
      <DiscountRebon />
      {resNavIsOpen && <MobileNav handleOpenNav={handleOpenNav} />}
      {(resNavIsOpen || flyoutCartIsOpen) && <Backdrop />}
      <Navbar
        toggleFlyoutCartOpen={toggleFlyoutCartOpen}
        handleOpenNav={handleOpenNav}
      />
      <AnimatePresence
        onExitComplete={() => {
          console.log("Animation completed");
        }}
      >
        {flyoutCartIsOpen && (
          <FlyoutCart
            toggleFlyoutCartOpen={toggleFlyoutCartOpen}
          />
        )}
      </AnimatePresence>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout