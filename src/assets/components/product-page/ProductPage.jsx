import Footer from "../shared/footer/Footer.jsx";
import Header from "./header/Header.jsx";

import Dropdown from "../../ui/dropdown/Dropdown.jsx";

import cssClasses from "./ProductPage.module.css";
import starIcon from "../../../../public/images/product-page-images/empty-star-icon.svg";

import profileImage1 from "../../../../public/images/product-page-images/profile-image1.svg";

function ProductPage() {
  return (
    <>
      <Header />
      <section
        className={`${cssClasses["product-section-body"]} ${cssClasses["container"]}`}
      >
        <ul className={cssClasses["product-info-navigation"]}>
          <li>
            <a href="">Additional Info</a>
          </li>
          <li>
            <a href="">Questions</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
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
          <input type="text" />
          <a href="">Write Review</a>
        </div>
        <div className={cssClasses["custumer-reviews-header"]}>
          <span className={cssClasses["review-count-big"]}>11 Reviews</span>
          <Dropdown options={["Newest", "Most Rated", "Oldest"]} />
        </div>
        <div className={cssClasses["custumer-reviews-con"]}>
          <div className={cssClasses["custumer-review-card"]}>
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
          <div className={cssClasses["custumer-review-card"]}>
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
          <div className={cssClasses["custumer-review-card"]}>
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
          <div className={cssClasses["custumer-review-card"]}>
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
          <div className={cssClasses["custumer-review-card"]}>
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
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
