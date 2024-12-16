import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import cssClasses from "./FlyoutCart.module.css";
import CartItem from "./CartItem";
import { CgClose } from "react-icons/cg";
import { formatter } from "../../dummy-products";

function FlyoutCart({ toggleFlyoutCartOpen }) {
  const items = useSelector((state) => state.cart.items);

  var products = (
    <p className={cssClasses["empty-cart-msg"]}>The cart is empty!</p>
  );

  if (items.length > 0) {
    var subTotal = 0;
    var total = 0;
    products = items.map((product) => {
      subTotal += product.price;
      total += product.price * product.quantity;
      return <CartItem key={product.id} {...product} />;
    });
  }

  return (
    <>
      <div className={cssClasses["flyoutCart"]}>
        <div className={cssClasses["cart-header-con"]}>
          <div className={cssClasses["cart-header"]}>
            <h2 className={cssClasses["cart-title"]}>Cart</h2>
            <button
              onClick={toggleFlyoutCartOpen}
              className={cssClasses["close-btn"]}
            >
              <CgClose size={25} />
            </button>
          </div>
          <ul className={cssClasses["cart-items-con"]}>{products}</ul>
        </div>

        <div className={cssClasses["cart-footer"]}>
          <p className={cssClasses["cart-sub-total-con"]}>
            <span className={cssClasses["sub-total-msg"]}>Subtotal</span>
            <span className={cssClasses["sub-total"]}>
              {formatter(subTotal)}
            </span>
          </p>
          <p className={cssClasses["cart-total-con"]}>
            <span className={cssClasses["total-msg"]}>Total</span>
            <span className={cssClasses["total-price"]}>
              {formatter(total)}
            </span>
          </p>
          <p className={cssClasses["cart-actions-con"]}>
            <Link
              className={cssClasses["checkout-btn"]}
              onClick={toggleFlyoutCartOpen}
              to="/checkout"
            >
              Checkout
            </Link>
            <Link
              onClick={toggleFlyoutCartOpen}
              className={cssClasses["view-cart-btn"]}
              to="/cart"
            >
              View Cart
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default FlyoutCart;
