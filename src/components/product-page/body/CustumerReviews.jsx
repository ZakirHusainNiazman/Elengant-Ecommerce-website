import { useState, useEffect } from "react";

import Dropdown from "../../../ui/dropdown/Dropdown.jsx";

import starIcon from "../../../assets/product-images/empty-star-icon.svg";

import rightArrow from "../../../assets/product-images/right-arrow-white.svg";

import cssClasses from "../../../components/product-page/ProductPage.module.css";

import ReviewStars from '../../../ui/stars/ReviewStars.jsx'

function CustumerReviews({reviews}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {};
  }, []);

  function handleReviewRender(value) {
    
  }
  return (
    <>
      <div className={cssClasses["custumer-reviews-con"]}>
        <h2 className={cssClasses["reviews-title"]}> Customer Reviews</h2>
        <div className={cssClasses["reviews-info"]}>
          <span className={cssClasses["review-stars"]}>
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
          </span>
          <span className={cssClasses["review-count"]}>11 Reviews</span>
        </div>
        <p className={cssClasses["product-name"]}>Tray Table</p>
      </div>
      <div className={cssClasses["custumer-review-input-con"]}>
        <textarea name="" id=""></textarea>
        <div>
          <a href="">
            {screenWidth > 550 ? "Write Review" : <img src={rightArrow} />}
          </a>
        </div>
      </div>
      <div className={cssClasses["custumer-reviews-header"]}>
        <span className={cssClasses["review-count-big"]}>11 Reviews</span>
        <Dropdown
          className={cssClasses.dropdown}
          onChangeValue={handleReviewRender}
          options={[
            { label: "Newest", value: "newest" },
            { label: "Most Rated", value: "most-rated" },
            { label: "Oldest" ,value:'oldest'},
          ]}
        />
      </div>
      <div className={cssClasses["custumer-reviews-con"]}>
        {reviews.map((review) => (
          <div className={cssClasses["custumer-review-card"]} key={review.id}>
            <div className={cssClasses["custumer-review-header"]}>
              <img src={review.image} alt="" />
              <div className={cssClasses["review-content"]}>
                <h5 className={cssClasses["review-title"]}>
                  {review.custumerName}
                </h5>
                <ReviewStars starsNo={review.stars} />
              </div>
            </div>
            <div className={cssClasses["review-body"]}>
              <p className={cssClasses["review-body"]}>{review.body}</p>
              <div className={cssClasses["review-reactions"]}>
                <a href="">Like</a>
                <a href="">Reply</a>
              </div>
            </div>
          </div>
        ))}

        <a href="" className={cssClasses["load-more-btn"]}>
          Load More
        </a>
      </div>
    </>
  );
}

export default CustumerReviews;
