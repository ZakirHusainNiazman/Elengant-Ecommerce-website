import { FaStar } from "react-icons/fa";

import cssClasses from './ProductCard.module.css';

function ProductCard({
  img,
  imgAlt,
  typeLabel,
  dAmount,
  pName,
  newPrice,
  oldPrice,
}) {
  return (
    <div className={cssClasses['product-card']}>
      <div className={cssClasses['product-card-header']}>
        <img src={img} alt="" />
        <div className={cssClasses['product-labels']}>
          <span className={cssClasses['product-type-label']}>{typeLabel}</span>
          <span className={cssClasses['product-discount-label']}>{dAmount}</span>
        </div>
        <a className={cssClasses['add-to-cart-btn']}>Add to cart</a>
      </div>
      <div className={cssClasses['product-card-body']}>
        <div className={cssClasses['review-star-con']}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h5 className={cssClasses['product-name']}>{pName}</h5>
        <div className={cssClasses['product-prices-con']}>
          <span className={cssClasses['new_price']}>{newPrice}</span>
          <span className={cssClasses['old_price']}>{oldPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
