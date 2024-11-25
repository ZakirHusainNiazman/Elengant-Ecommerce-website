import { useContext } from 'react';

import { CartContext } from "../../store/cart-context/shopping-cart-context";
import ReviewStars from "../stars/ReviewStars";
import WishlistTextButton from "../wishlist/WishlistTextButton";
import Label from "./Label";
import cssClasses from "./ProductCard.module.css";
import WishlistButton from "./WishlistButton";
import { calculatePrice, formatter } from '../../dummy-products';

function ProductCart({ image, productName,price,isAdded,layout,status,discount,stars,className,pid }) {
  const { addItemToCart } = useContext(CartContext);

  var newPrice = calculatePrice(price, discount);
  var oldPrice = newPrice !== price ? price : null;
  return (
    <div
      className={`${cssClasses["product-card"]}  
      ${
        (layout === "verticle" || layout === "horizontle") &&
        cssClasses["product-card-expanded"]
      } 
      ${cssClasses[layout]}
        `}
    >
      <div className={cssClasses["card-header"]}>
        <img
          src={image}
          alt=""
          className={`${cssClasses["product-image"]} ${className}`}
        />
        <button
          onClick={() => addItemToCart(pid)}
          className={cssClasses["add-to-cart-btn"]}
        >
          Add To Cart
        </button>
        <p className={cssClasses["product-labels"]}>
          {status && <Label>{status}</Label>}
          {discount !== 0 && <Label type="discount">-{discount}%</Label>}
        </p>
        <WishlistButton isAdded={isAdded} />
      </div>
      <div className={cssClasses["card-body"]}>
        <ReviewStars starsNo={stars} />
        <h5 className={cssClasses["product-name"]}>{productName}</h5>
        <div className={cssClasses["product-prices-con"]}>
          <span className={cssClasses["new_price"]}>{formatter(newPrice)}</span>
          <span className={cssClasses["old_price"]}>{formatter(oldPrice)}</span>
        </div>
        <p className={cssClasses["product-detail"]}>
          Super-soft cushion cover in off-white with a tactile pattern that
          enhances the different tones in the pile and base.
        </p>
        <div className={cssClasses["cart-actions-con"]}>
          <button
            onClick={() => addItemToCart(pid)}
            className={cssClasses["add-to-cart-btn"]}
          >
            Add To Cart
          </button>
          <WishlistTextButton isAdded={true} />
        </div>
      </div>
    </div>
  );
}

export default ProductCart