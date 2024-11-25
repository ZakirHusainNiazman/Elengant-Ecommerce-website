import { useState } from 'react'; 
import {AnimatePresence} from 'framer-motion'

import { Outlet } from "react-router-dom"
import DiscountRebon from "../shared/rebon/DiscountRebon";
import Navbar from "../shared/nabar/Navbar";
import Footer from "../shared/footer/Footer";
import FlyoutCart from "../../ui/flyout-cart/FlyoutCart";

function RootLayout() {
  const [flyoutCartIsOpen, setFlyoutCartIsOpen] = useState(false);
  function toggleFlyoutCartOpen() {
    setFlyoutCartIsOpen((prevState) => !prevState);    
  }

  return (
    <>
      <DiscountRebon />
      <Navbar toggleFlyoutCartOpen={toggleFlyoutCartOpen} />
      <AnimatePresence
        onExitComplete={() => {
          console.log("Animation completed");
        }}
      >
        {flyoutCartIsOpen && (
          <FlyoutCart
            open={flyoutCartIsOpen}
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