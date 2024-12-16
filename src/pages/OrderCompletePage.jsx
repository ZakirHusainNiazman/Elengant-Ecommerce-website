
import cssClasses from "../components/order-complete-page/OrderComplete.module.css";
import OrderedItem from "../components/order-complete-page/OrderedItem";
import Button from '../ui/buttons/Button';
import NavigationButtonsWrapper from '../components/shared/cart-navigations/NavigationButtonsWrapper';
import { useSelector } from "react-redux";

function OrderCompletePage() {
  const orders = useSelector((state) => state.order)
  const newOrder = orders[orders.length - 1];
  const { products: items, total, orderCode, date, paymentMethod } = newOrder;
  console.log(newOrder);
  

  return (
    <div className="container">
      <div className={cssClasses["header"]}>
        <h1 className={cssClasses["title"]}>Cart</h1>
        <NavigationButtonsWrapper active="checkout" />
      </div>
      <div className={cssClasses["order-complete-body"]}>
        <p className={cssClasses["sub-title"]}>Thank you! 🎉</p>
        <h2 className={cssClasses["title"]}>Your order has been received</h2>
        <div className={cssClasses["ordered-items"]}>
          {/* {items.map((product) => (
            <OrderedItem
              key={product.id}
              image={product.image}
              quantity={product.quantity}
            />
          ))} */}
        </div>
        <div className={cssClasses["order-info"]}>
          <p className={cssClasses["info-title"]}>Order code:</p>
          <p className={cssClasses["info-body"]}>{orderCode}</p>
          <p className={cssClasses["info-title"]}>Date:</p>
          <p className={cssClasses["info-body"]}>{date}</p>
          <p className={cssClasses["info-title"]}>Total:</p>
          <p className={cssClasses["info-body"]}>{total}</p>
          <p className={cssClasses["info-title"]}>Payment method:</p>
          <p className={cssClasses["info-body"]}>{paymentMethod}</p>
        </div>
        <Button className={cssClasses["order-btn"]}>Purchase history</Button>
      </div>
    </div>
  );
}

export default OrderCompletePage