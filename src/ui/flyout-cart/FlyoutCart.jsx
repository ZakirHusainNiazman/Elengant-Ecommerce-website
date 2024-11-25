import { motion ,AnimatePresence} from "framer-motion";

import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { createPortal } from "react-dom";

import cssClasses from "./FlyoutCart.module.css";
import CartItem from "./CartItem";
import { CgClose } from "react-icons/cg";
import { CartContext } from "../../store/cart-context/shopping-cart-context";
import { formatter } from "../../dummy-products";

function FlyoutCart({ toggleFlyoutCartOpen }) {
  const dialog = useRef();
  const { items } = useContext(CartContext);

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

  return createPortal(
    <>
      <AnimatePresence>
        <div className={cssClasses.backdrop} onClick={toggleFlyoutCartOpen} />
      </AnimatePresence>
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        ref={dialog}
        className={cssClasses["modal"]}
      >
        <div className={cssClasses["cart-header"]}>
          <h2 className={cssClasses["cart-title"]}>Cart</h2>
          <button
            onClick={toggleFlyoutCartOpen}
            className={cssClasses["close-btn"]}
          >
            <CgClose size={25} />
          </button>
        </div>

        <motion.ul
          variants={{
            visible:{transition:{ staggerChildren:0.10 }}
            }}
          className={cssClasses["cart-items-con"]}>{products}</motion.ul>
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
            <Link className={cssClasses["checkout-btn"]} to="">
              Checkout
            </Link>
            <Link onClick={toggleFlyoutCartOpen} className={cssClasses["view-cart-btn"]} to="/cart">
              View Cart
            </Link>
          </p>
        </div>
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}

export default FlyoutCart;
