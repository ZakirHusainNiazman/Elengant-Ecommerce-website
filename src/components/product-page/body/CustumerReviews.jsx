import { useState, useEffect } from "react";

import Dropdown from "../../../ui/dropdown/Dropdown.jsx";

import starIcon from "../../../../public/images/product-page-images/empty-star-icon.svg";
import profileImage1 from "../../../../public/images/product-page-images/profile-image1.svg";
import rightArrow from "../../../../public/images/product-page-images/right-arrow-white.svg";

import cssClasses from "../../../components/product-page/ProductPage.module.css";

function CustumerReviews() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {};
  }, []);

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
        <Dropdown options={["Newest", "Most Rated", "Oldest"]} />
      </div>
      <div className={cssClasses["custumer-reviews-con"]}>
        <div className={cssClasses["custumer-review-card"]}>
          <div className={cssClasses["custumer-review-header"]}>
            <img src={profileImage1} alt="" />
            <div className={cssClasses["review-content"]}>
              <h5 className={cssClasses["review-title"]}>Nicolas Jensen</h5>
              <p className={cssClasses["review-stars"]}>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </p>
            </div>
          </div>
          <div className={cssClasses["review-body"]}>
            <p className={cssClasses["review-body"]}>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className={cssClasses["review-reactions"]}>
              <a href="">Like</a>
              <a href="">Reply</a>
            </div>
          </div>
        </div>{" "}
        <div className={cssClasses["custumer-review-card"]}>
          <div className={cssClasses["custumer-review-header"]}>
            <img src={profileImage1} alt="" />
            <div className={cssClasses["review-content"]}>
              <h5 className={cssClasses["review-title"]}>Nicolas Jensen</h5>
              <p className={cssClasses["review-stars"]}>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </p>
            </div>
          </div>
          <div className={cssClasses["review-body"]}>
            <p className={cssClasses["review-body"]}>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className={cssClasses["review-reactions"]}>
              <a href="">Like</a>
              <a href="">Reply</a>
            </div>
          </div>
        </div>{" "}
        <div className={cssClasses["custumer-review-card"]}>
          <div className={cssClasses["custumer-review-header"]}>
            <img src={profileImage1} alt="" />
            <div className={cssClasses["review-content"]}>
              <h5 className={cssClasses["review-title"]}>Nicolas Jensen</h5>
              <p className={cssClasses["review-stars"]}>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </p>
            </div>
          </div>
          <div className={cssClasses["review-body"]}>
            <p className={cssClasses["review-body"]}>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className={cssClasses["review-reactions"]}>
              <a href="">Like</a>
              <a href="">Reply</a>
            </div>
          </div>
        </div>{" "}
        <div className={cssClasses["custumer-review-card"]}>
          <div className={cssClasses["custumer-review-header"]}>
            <img src={profileImage1} alt="" />
            <div className={cssClasses["review-content"]}>
              <h5 className={cssClasses["review-title"]}>Nicolas Jensen</h5>
              <p className={cssClasses["review-stars"]}>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </p>
            </div>
          </div>
          <div className={cssClasses["review-body"]}>
            <p className={cssClasses["review-body"]}>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className={cssClasses["review-reactions"]}>
              <a href="">Like</a>
              <a href="">Reply</a>
            </div>
          </div>
        </div>{" "}
        <div className={cssClasses["custumer-review-card"]}>
          <div className={cssClasses["custumer-review-header"]}>
            <img src={profileImage1} alt="" />
            <div className={cssClasses["review-content"]}>
              <h5 className={cssClasses["review-title"]}>Nicolas Jensen</h5>
              <p className={cssClasses["review-stars"]}>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </p>
            </div>
          </div>
          <div className={cssClasses["review-body"]}>
            <p className={cssClasses["review-body"]}>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className={cssClasses["review-reactions"]}>
              <a href="">Like</a>
              <a href="">Reply</a>
            </div>
          </div>
        </div>{" "}
        <div className={cssClasses["custumer-review-card"]}>
          <div className={cssClasses["custumer-review-header"]}>
            <img src={profileImage1} alt="" />
            <div className={cssClasses["review-content"]}>
              <h5 className={cssClasses["review-title"]}>Nicolas Jensen</h5>
              <p className={cssClasses["review-stars"]}>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </p>
            </div>
          </div>
          <div className={cssClasses["review-body"]}>
            <p className={cssClasses["review-body"]}>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className={cssClasses["review-reactions"]}>
              <a href="">Like</a>
              <a href="">Reply</a>
            </div>
          </div>
        </div>
        <a href="" className={cssClasses["load-more-btn"]}>
          Load More
        </a>
      </div>
    </>
  );
}

export default CustumerReviews;
