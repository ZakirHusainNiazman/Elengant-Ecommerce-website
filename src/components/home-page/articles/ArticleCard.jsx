import RightArrowBtn from '../../../ui/right-arrow-btn/RightArrowBtn';

import cssClasses from "./Articles.module.css";

function ArticleCard({img,imgAlt,title,btnTitle}) {
  return (
    <div className={cssClasses['article-card']}>
      <img src={img} alt={imgAlt} className={cssClasses['article-image']} />
          <h5 className={cssClasses['article-title']}>{ title }</h5>
      <RightArrowBtn label={btnTitle} cssClass="btn-black" />
    </div>
  );
}

export default ArticleCard