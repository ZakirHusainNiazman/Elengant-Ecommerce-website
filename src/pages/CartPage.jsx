import { useState } from 'react';
import CartNavigationButton from "../components/cart-page/cart-navigaiton-buttons/CartNavigationButton.jsx";
import Cart from "../components/cart-page/cart/Cart";
import Checkout from "../components/cart-page/checkout/Checkout";
import OrderComplete from "../components/cart-page/order-complete/OrderComplete";

import cssClasses from "../components/cart-page/CartPage.module.css";

function CartPage() {
  const [orderState, setOrderState] = useState('cart');

  function handleOrderState(value) {
    console.log("clicked");
    
    setOrderState(value);
  }

  var title = "Cart";

  if (orderState === 'checkout') {
    title = "Check Out";
  }
  if (orderState === "completed") {
    title = "Complete!";
  }
  return (
    <div className={cssClasses["cart-page-wrapper"]}>
      <div className={cssClasses["header"]}>
        <h1 className={cssClasses["title"]}>{title}</h1>
        <div className={cssClasses["navigation"]}>
          <CartNavigationButton
            stepNo="1"
            title="Shopping cart"
            isChecked={orderState === "checkout" || orderState === 'completed'}
            isActive={orderState === "cart"}
          />
          <CartNavigationButton
            stepNo="2"
            title="Checkout details"
            isChecked={orderState === "completed"}
            isActive={orderState === "checkout"}
          />
          <CartNavigationButton
            stepNo="3"
            title="Shopping cart"
            isActive={orderState === "completed"}
          />
        </div>
      </div>
      {orderState === "cart" && <Cart handleOrderState={()=>handleOrderState('checkout')}/>}
      {orderState === "checkout" && <Checkout handleOrderState={()=>handleOrderState('completed')}/>}
      {orderState === "completed" && <OrderComplete handleOrderState={()=>handleOrderState('cart')}/>}
    </div>
  );
}

export default CartPage;
