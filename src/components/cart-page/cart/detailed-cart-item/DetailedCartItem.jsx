import CartQtyBtn from '../../../../ui/cart-actions/CartQtyBtn';
import RemoveBtn from '../../../../ui/remove-btn/RemoveBtn';
import cssClasses from "./DetailedCartItem.module.css";

function DetailedCartItem({image,name,color,quantiy,price}) {
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
          <RemoveBtn title="Remove" />
        </div>
      </div>
      <div className={cssClasses['quantity-btn-wrapper']}>
        <CartQtyBtn quantiy={3} />
      </div>
      <p className={cssClasses["cart-item-price"]}>{price}</p>
      <p className={cssClasses["item-sub-total"]}>{price}</p>
    </li>
  );
}

export default DetailedCartItem