import cssClasses from "./NewsLetter.module.css";

import emailIcon from "../../../assets/home-images/email-icon.svg";

function NewsLetter() {
  return (
    <div className={cssClasses["news-letter-wrapper"]}>
      <div className={cssClasses["news-letter-con"]}>
        <h2 className={cssClasses["title"]}>Join Our Newsletter</h2>
        <p className={cssClasses["sub-title"]}>
          Sign up for deals, new products and promotions
        </p>
        <div className={cssClasses["input-container"]}>
          <img src={emailIcon} alt="email icon" />
          <input
            type="email"
            className={cssClasses["emial-input"]}
            placeholder="Enter your email"
          />
          <a className={cssClasses["signup-btn"]}>Signup</a>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
