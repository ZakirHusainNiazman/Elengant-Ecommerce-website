import ReviewStars from "../stars/ReviewStars";
import WishlistTextButton from "../wishlist/WishlistTextButton";
import Label from "./Label";
import cssClasses from "./ProductCard.module.css";
import WishlistButton from "./WishlistButton";
import { calculatePrice, formatter } from "../../dummy-products";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { wishlistActions } from "../../store/wishlistSlice";

function ProductCart({
  pid,
  image,
  productName,
  price,
  isAdded,
  layout,
  status,
  discount,
  stars,
  className,
  color
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var newPrice = price;

  if (discount > 0) {
    var newPrice = calculatePrice(price, discount);
  }
  
  function handleWishlist() {
    const product = {
      id:pid,image,name:productName,price:newPrice,color
    }
    dispatch(wishlistActions.toggleAddItem(product));
  }  

  function addItemToCart() {
    dispatch(cartActions.addItem({ id: pid, name: productName ,price:newPrice,quantity:1,color:"black",image:image}));
  }

  function handleProductClick(pid) {
    navigate(`/product/${pid}`);
  }
  

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
          onClick={() => handleProductClick(pid)}
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
        <WishlistButton onClick={handleWishlist} isAdded={isAdded} />
      </div>
      <div className={cssClasses["card-body"]}>
        <ReviewStars starsNo={stars} />
        <h5
          onClick={() => handleProductClick(pid)}
          className={cssClasses["product-name"]}
        >
          {productName}
        </h5>
        <div className={cssClasses["product-prices-con"]}>
          <span className={cssClasses["new_price"]}>{formatter(newPrice)}</span>
          {newPrice < price && (
            <span className={cssClasses["old_price"]}>{formatter(price)}</span>
          )}
        </div>
        <p
          className={cssClasses["product-detail"]}
          onClick={() => handleProductClick(pid)}
        >
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

export default ProductCart;
