import { motion,AnimatePresence } from "framer-motion";


import cssClasses from './FlyoutCart.module.css';

import RemoveBtn from '../remove-btn/RemoveBtn';
import CartQtyBtn from '../cart-actions/CartQtyBtn';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

function CartItem({ id, name, price, quantity, color, image, className }) {
  const dispatch = useDispatch();

  function handleRemoveItem(pid) {
    dispatch(cartActions.removeItem({ id: pid }));
  }
  
  return (
    <>
      <AnimatePresence>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          exit={{ opacity: 1, x: 0 }}
          transition={{ type: "spring" }}
          className={`${cssClasses["cart-item-con"]} ${className}`}
        >
          <div className={cssClasses["cart-item-header"]}>
            <img
              src={image}
              alt="product image"
              className={cssClasses["item-image"]}
            />
            <div className={cssClasses["cart-item-info"]}>
              <h5 className={cssClasses["cart-item-title"]}>{name}</h5>
              <p className={cssClasses["cart-item-color"]}>Color: {color}</p>
              <CartQtyBtn
                quantity={quantity}
                pid={id}
              />
            </div>
          </div>
          <div className={cssClasses["cart-item-action"]}>
            <p className={cssClasses["cart-item-price"]}>${price}</p>
            <RemoveBtn onRemove={() => handleRemoveItem(id)} />
          </div>
        </motion.li>
      </AnimatePresence>
    </>
  );
}

export default CartItem