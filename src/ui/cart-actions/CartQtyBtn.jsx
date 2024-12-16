import { useDispatch } from 'react-redux';
import cssClasses from './CartQtyBtn.module.css';
import { cartActions } from '../../store/cartSlice';

function CartQtyBtn({ quantity,pid, className = "" }) {
  const dispatch = useDispatch();

  function hanldeIcrement() {
    dispatch(cartActions.incrementItemQuanity({id:pid}));
  }

  
  function hanldeDecrement() {
    dispatch(cartActions.decrementItemQuanity({id:pid}));
  }

  return (
    <p className={`${cssClasses["quantity-btn"]} ${className}`}>
      <span className={cssClasses["decreament-btn"]} onClick={hanldeDecrement}>
        -
      </span>
      <span className={cssClasses["items-no"]}>{quantity}</span>
      <span className={cssClasses["increament-btn"]} onClick={hanldeIcrement}>
        +
      </span>
    </p>
  );
}

export default CartQtyBtn