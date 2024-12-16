import { useDispatch } from 'react-redux';
import { formatter } from '../../../../dummy-products';
import CartQtyBtn from '../../../../ui/cart-actions/CartQtyBtn';
import RemoveBtn from '../../../../ui/remove-btn/RemoveBtn';
import cssClasses from "./DetailedCartItem.module.css";
import { cartActions } from '../../../../store/cartSlice';

function DetailedCartItem({ id, image, name, color, quantity, price}) {
  const dispatch = useDispatch();

  const subTotal = price * quantity ;

  function handleRemove(id) {
    dispatch(cartActions.removeItem({id:id}))
  }

  return (
    <li className={cssClasses["cart-item-con"]}>
      <div className={cssClasses["cart-item-header"]}>
        <img
          src={image}
          alt="product image"
          className={cssClasses["item-image"]}
        />
        <div className={cssClasses["cart-item-info"]}>
          <h5 className={cssClasses["cart-item-title"]}>{name}</h5>
          <p className={cssClasses["cart-item-color"]}>Color: {color}</p>
          <RemoveBtn onRemove={()=>handleRemove(id)} title="Remove" />
        </div>
      </div>
      <div className={cssClasses["quantity-btn-wrapper"]}>
        <CartQtyBtn quantity={quantity} pid={id} />
      </div>
      <p className={cssClasses["cart-item-price"]}>{formatter(price)}</p>
      <p className={cssClasses["item-sub-total"]}>{formatter(subTotal)}</p>
    </li>
  );
}

export default DetailedCartItem