import cssClasses from './CartQtyBtn.module.css';

function CartQtyBtn({ quantity,onIncremeant,onDecremeant }) {
  return (
    <p className={cssClasses['quantity-btn']}>
      <span className={cssClasses["decreament-btn"]} onClick={onDecremeant}>-</span>
          <span className={cssClasses["items-no"]}>{quantity}</span>
      <span className={cssClasses["increament-btn"]} onClick={onDecremeant}>+</span>
    </p>
  );
}

export default CartQtyBtn