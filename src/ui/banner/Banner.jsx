  import RightArrowBtn from '../right-arrow-btn/RightArrowBtn';

  import cssClasses from './Banner.module.css';

  import bannerImage from "../../assets/ui-images/banner-image.svg";

  function Banner({title,subTitle,body}) {
    return (
      <section className={cssClasses["banner-section"]}>
        <img
          src={bannerImage}
          alt="banner image"
          className={cssClasses["banner-image"]}
        />
        <div className={cssClasses["banner-content"]}>
          {subTitle && (
            <h5 className={cssClasses["banner-sub-title"]}>{subTitle}</h5>
          )}
          <h2 className={cssClasses["banner-title"]}>{title}</h2>
          <p className={cssClasses["banner-body"]}>{body}</p>
          <RightArrowBtn label="Shop Now " cssClass="btn-black" />
        </div>
      </section>
    );
  }

  export default Banner