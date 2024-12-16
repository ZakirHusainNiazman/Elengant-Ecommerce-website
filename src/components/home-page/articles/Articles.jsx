import articleImage1 from "../../../assets/home-images/article-image1.svg";
import articleImage2 from "../../../assets/home-images/article-image2.svg";
import articleImage3 from "../../../assets/home-images/article-image3.svg";
import RightArrowBtn from "../../../ui/right-arrow-btn/RightArrowBtn";
import ArticleCard from "../../shared/article/ArticleCard";


import cssClasses from "./Articles.module.css";

function Articles() {
  return (
    <section className={`${cssClasses['articles-section']} container`}>
      <div className={cssClasses['articles-header']}>
        <h2 className={cssClasses['articles-title"']}>Articles</h2>
        <RightArrowBtn url='/blogs' label="More Articles " cssClass="btn-black" />
      </div>
      <div className={cssClasses["articles-wrapper"]}>
        <ArticleCard
          img={articleImage1}
          imgAlt="Kitchern Image"
          title="Kitchen organization"
          btnTitle="More Articles"
        />
        <ArticleCard
          img={articleImage2}
          imgAlt="Kitchern Image"
          title="Kitchen organization"
          btnTitle="More Articles"
        />
        <ArticleCard
          img={articleImage3}
          imgAlt="Kitchern Image"
          title="Kitchen organization"
          btnTitle="More Articles"
        />
      </div>
    </section>
  );
}

export default Articles;
