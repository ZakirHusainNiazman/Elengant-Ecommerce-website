import { useSelector } from "react-redux";

import cssClasses from "./CheckoutPage.module.css";
import { calculatePrice, formatter } from "../../dummy-products";

import PriceWithLabel from "../../ui/price/PriceWithLabel";
import CartItem from "../../ui/flyout-cart/CartItem"

function OrderSummary({ shippingInfo }) {
  const {items,total,subTotal} = useSelector((state) => state.cart);

  var products = (
    <p className={cssClasses["empty-cart-msg"]}>The cart is empty!</p>
  );

  if (items.length > 0) {
    products = items.map((product) => {
      let newPrice = product.price;

      if (product.discount > 0) {
        newPrice = calculatePrice(product.price, product.discount);
      }
      return (
        <CartItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={newPrice}
          quantity={product.quantity}
          color={product.color}
          image={product.image}
          className={cssClasses["cartItem"]}
        />
      );
    });
  }
  return (
    <div className={cssClasses["order-summary"]}>
      <h3 className={cssClasses["summary-title"]}>Order summary</h3>
      <div className={cssClasses["order-items"]}>{products}</div>
      <div className={cssClasses["summary-footer"]}>
        <PriceWithLabel
          label="Shipping"
          price={
            shippingInfo.shippingType === "Pickup"
              ? `%${shippingInfo.shippingFee}`
              : formatter(shippingInfo.shippingFee)
          }
          isThick
        />
        <PriceWithLabel label="Subtotal" price={formatter(subTotal)} isThick />
        <PriceWithLabel label="Total" price={formatter(total)} />
      </div>
    </div>
  );
}

export default OrderSummary;
