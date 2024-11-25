import cssClasses from "./ReviewStars.module.css";

import fillStar from "../../assets/product-images/star-icon.svg";
import emptyStar from "../../assets/product-images/empty-star-icon.svg";

function ReviewStars({ withText,starsNo }) {
  return (
    <div
      className={`${cssClasses["review-stars"]}
       ${withText ? cssClasses["with-text"] : ""}`}
    >
      <div className={cssClasses["review-stars-con"]}>
        {[...Array(5)].map((_, i) => (
          <img key={i} src={i < starsNo ? fillStar : emptyStar} alt="" />
        ))}
      </div>
      {withText && <p className={cssClasses["review-text"]}>11 Reviews</p>}
    </div>
  );
}

export default ReviewStars;
