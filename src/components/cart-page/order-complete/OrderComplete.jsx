import { useContext } from 'react';

import { CartContext } from "../../../store/cart-context/shopping-cart-context";
import cssClasses from "./OrderComplete.module.css";
import OrderedItem from "./OrderedItem";
import Button from '../../../ui/buttons/Button';

function OrderComplete({ handleOrderState }) {
  const { items } = useContext(CartContext);

  return (
    <div className={cssClasses["order-complete"]}>
      <p className={cssClasses["sub-title"]}>Thank you! 🎉</p>
      <h2 className={cssClasses["title"]}>Your order has been received</h2>
      <div className={cssClasses["ordered-items"]}>
        {items.map((product) => (
          <OrderedItem
            key={product.id}
            image={product.image}
            quantity={product.quantity}
          />
        ))}
      </div>
      <div className={cssClasses['order-info']}>
          <p className={cssClasses["info-title"]}>Order code:</p>
          <p className={cssClasses["info-body"]}>#0123_45678</p>
          <p className={cssClasses["info-title"]}>Date:</p>
          <p className={cssClasses["info-body"]}>October 19, 2023</p>
          <p className={cssClasses["info-title"]}>Total:</p>
          <p className={cssClasses["info-body"]}>$1,345.00</p>
          <p className={cssClasses["info-title"]}>Payment method:</p>
          <p className={cssClasses["info-body"]}>Credit Card</p>
      </div>
      <Button className={cssClasses["order-btn"]} onClick={handleOrderState}>
        Purchase history
      </Button>
    </div>
  );
}

export default OrderComplete