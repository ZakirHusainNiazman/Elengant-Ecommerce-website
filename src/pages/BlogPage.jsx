import { BsGrid3X3GapFill, BsGridFill } from "react-icons/bs";

import HeroSection from "../ui/hero-section/HeroSection";
import cssClasses from "../components/blog-page/BlogPage.module.css";
import heroImage from "../assets/blog-images/hero-image.svg";
import TextButton from "../ui/buttons/TextButton";
import GridButton from "../ui/buttons/GridButton";
import ToolbarIcon from "../ui/toolbar-icon/ToolbarIcon";
import ArticleCard from "../components/shared/article/ArticleCard";
import articleImage1 from "../assets/blog-images/article-image1.svg";
import articleImage2 from "../assets/blog-images/article-image2.svg";
import articleImage3 from "../assets/blog-images/article-image3.svg";
import articleImage4 from "../assets/blog-images/article-image4.svg";
import articleImage5 from "../assets/blog-images/article-image5.svg";
import articleImage6 from "../assets/blog-images/article-image6.svg";
import articleImage7 from "../assets/blog-images/article-image7.svg";
import articleImage8 from "../assets/blog-images/article-image8.svg";
import articleImage9 from "../assets/blog-images/article-image9.svg";

function BlogPage() {
  return (
    <div className={`${cssClasses["main-con"]} container`}>
      <HeroSection
        title="Our Blog"
        backgroundImage={heroImage}
        subTitle="Home ideas and design inspiration"
        path={["Home", "Blog"]}
      />
      <div className={cssClasses["articles-main-con"]}>
        <div className={cssClasses["artical-con-header"]}>
          <menu className={cssClasses["tab-buttons-menu"]}>
            <li>
              <TextButton type="button" isActive>
                All Blog
              </TextButton>
            </li>
            <li>
              <TextButton type="button">Featured</TextButton>
            </li>
          </menu>
          <div className={cssClasses["layout-buttons-con"]}>
            <GridButton isActive={true}>
              <BsGrid3X3GapFill />
            </GridButton>
            <GridButton>
              <BsGridFill />
            </GridButton>
            <GridButton>
              <ToolbarIcon isActive={false} iconsNo={2} isHorizontle />
            </GridButton>
          </div>
        </div>
        <div className={cssClasses["articles-wrapper"]}>
          <ArticleCard
            img={articleImage1}
            imgAlt="Kitchern Image"
            title="Modern texas home is beautiful and completely kid-friendly"
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
          <ArticleCard
            img={articleImage4}
            imgAlt="Kitchern Image"
            title="Kitchen organization"
            btnTitle="More Articles"
          />
          <ArticleCard
            img={articleImage5}
            imgAlt="Kitchern Image"
            title="Kitchen organization"
            btnTitle="More Articles"
          />
          <ArticleCard
            img={articleImage6}
            imgAlt="Kitchern Image"
            title="Kitchen organization"
            btnTitle="More Articles"
          />
          <ArticleCard
            img={articleImage7}
            imgAlt="Kitchern Image"
            title="Kitchen organization"
            btnTitle="More Articles"
          />
          <ArticleCard
            img={articleImage8}
            imgAlt="Kitchern Image"
            title="Kitchen organization"
            btnTitle="More Articles"
          />
          <ArticleCard
            img={articleImage9}
            imgAlt="Kitchern Image"
            title="Kitchen organization"
            btnTitle="More Articles"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
