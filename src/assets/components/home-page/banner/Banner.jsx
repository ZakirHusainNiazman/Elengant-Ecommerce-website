import RightArrowBtn from '../../../ui/right-arrow-btn/RightArrowBtn';

import cssClasses from './Banner.module.css';

import bannerImage from "../../../../../public/images/banner-image.svg";

function Banner() {
  return (
    <section className={cssClasses['banner-section']}>
      <img src={bannerImage} alt="banner image" className={cssClasses['banner-image']} />
      <div className={cssClasses['banner-content']}>
        <h5 className={cssClasses['banner-sub-title']}>SALE UP TO 35% OFF</h5>
        <h2 className={cssClasses['banner-title']}>HUNDREDS of New lower prices!</h2>
        <p className={cssClasses['banner-body']}>
          It’s more affordable than ever to give every room in your home a
          stylish makeover
              </p>
        <RightArrowBtn label="Shop Now " cssClass="btn-black" />
      </div>
    </section>
  );
}

export default Banner