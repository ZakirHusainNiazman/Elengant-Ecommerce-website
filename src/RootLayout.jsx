import { Outlet } from "react-router-dom"
import DiscountRebon from "./components/shared/rebon/DiscountRebon";
import Navbar from "./components/shared/nabar/Navbar";
import Footer from "./components/shared/footer/Footer";

function RootLayout() {
  return (
    <>
          <DiscountRebon />
          <Navbar/>
          <Outlet />
          <Footer />
    </>
  );
}

export default RootLayout