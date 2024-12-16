import {useState,useEffect} from "react";
import { useSelector } from "react-redux";

import { calculatePrice } from "../../dummy-products";
import DetailedCartItem from "./cart/detailed-cart-item/DetailedCartItem";
import CartItem from "../../ui/flyout-cart/CartItem";
import cssClasses from "./CartPage.module.css";


function CartItems() {
  const items = useSelector((state) => state.cart.items);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 620);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cartItems = items.map((item, index) => {

    return isSmallScreen ? (
      <CartItem key={index} {...item} />
    ) : (
      <DetailedCartItem key={index} {...item} />
    );
  });

//   var shippingCost = 0;
//   if (shippingType === "express") {
//     shippingCost = 15;
//     total += shippingCost;
//   } else if (shippingType === "pickup") {
//     shippingCost = (total / 100) * 75;
//     total = shippingCost;
//   }
  return (
    <ul className={cssClasses["items-wrapper"]}>
      <li className={cssClasses["item-header"]}>
        <div className={cssClasses.col1}>
          <p>Product</p>
        </div>
        <div className={cssClasses.col2}>
          <p>Quantity</p>
        </div>
        <div className={cssClasses.col3}>
          <p>Price</p>
        </div>
        <div className={cssClasses.col4}>
          <p>Subtotal</p>
        </div>
      </li>
      {items.length === 0 ? <p>No Item in the cart.</p> : cartItems}
    </ul>
  );
}

export default CartItems;
