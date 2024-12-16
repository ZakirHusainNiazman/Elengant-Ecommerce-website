import { BsHeart, BsHeartFill } from "react-icons/bs";


import cssClasses from "./WishlistTextButton.module.css";


function WishlistTextButton({isAdded}) {
  return (
    <a href="" className={`${cssClasses["whishlist-btn"]}`}>
      <span>
        {isAdded ? (
          <BsHeartFill size={18}  />
        ) : (
          <BsHeart size={18} />
        )}
      </span>
      <span>Wishlist</span>
    </a>
  );
}

export default WishlistTextButton;
