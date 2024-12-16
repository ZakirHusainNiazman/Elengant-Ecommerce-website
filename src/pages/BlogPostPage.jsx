import cssClasses from "../components/blog-post-page/BlogPostPage.module.css";

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
import RightArrowBtn from "../ui/right-arrow-btn/RightArrowBtn";
import TextButton from '../ui/buttons/TextButton';
import Path from "../ui/hero-section/Path";
import { useParams } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { BsBack } from "react-icons/bs";
import { HiMiniChevronLeft } from "react-icons/hi2";
import BackButton from "../ui/buttons/BackButton";

function BlogPostPage() {
  const params = useParams();
  const pid = params.id;
  return (
    <div className={`container ${cssClasses["page-main-con"]}`}>
      <Path className={cssClasses["path"]} array={["Home", "Blog", pid]} />
      <BackButton />
      <section>
        <div className={cssClasses["post-header"]}>
          <p className={cssClasses["tage"]}>Article</p>
          <h1 className={cssClasses["title"]}>
            How to make a busy bathroom a place to relax
          </h1>
          <div className={cssClasses["post-info"]}>
            <p>
              <FaRegCircleUser /> Henrik Annemark
            </p>
            <p>
              <CiCalendar size={30} />
              October 16, 2023
            </p>
          </div>
          <div className={cssClasses[""]}>
            <img
              className={cssClasses["cover-image"]}
              src={articleImage5}
              alt=""
            />
            <p className={cssClasses["paragrap"]}>
              Your bathroom serves a string of busy functions on a daily basis.
              See how you can make all of them work, and still have room for
              comfort and relaxation.
            </p>
            <p className={cssClasses["sub-title"]}>
              A cleaning hub with built-in ventilation
            </p>
            <p className={cssClasses["paragrap"]}>
              Use a rod and a shower curtain to create a complement to your
              cleaning cupboard. Unsightly equipment is stored out of sight yet
              accessibly close – while the air flow helps dry any dampness
            </p>
          </div>
        </div>
        <div className={cssClasses["post-body"]}>
          <div
            className={cssClasses["post-row"]}
          >
            <div
              className={`${cssClasses["two-items"]}`}
            >
              <img src={articleImage4} className={cssClasses["image"]} alt="" />
              <img src={articleImage6} className={cssClasses["image"]} alt="" />
            </div>
            <div className={cssClasses["post-paragrap"]}>
              <p className={cssClasses["sub-title"]}>
                Storage with a calming effect
              </p>
              <p className={cssClasses["paragrap"]}>
                Having a lot to store doesn’t mean it all has to go in a
                cupboard. Many bathroom items are better kept out in the open –
                either to be close at hand or are nice to look at. Add a plant
                or two to set a calm mood for the entire room (and they’ll
                thrive in the humid air).
              </p>
              <p className={cssClasses["sub-title"]}>
                Kit your clutter for easy access
              </p>
              <p className={cssClasses["paragrap"]}>
                Even if you have a cabinet ready to swallow the clutter, it’s
                worth resisting a little. Let containers hold kits for different
                activities – home spa, make-up, personal hygiene – to bring out
                or put back at a moment’s notice.
              </p>
            </div>
          </div>
          <div
            className={`${cssClasses["post-row"]} ${cssClasses["two-items"]}`}
          >
            <img className={cssClasses["image"]} src={articleImage4} alt="" />
            <div className={cssClasses["post-paragrap"]}>
              <p className={cssClasses["sub-title"]}>
                Storage with a calming effect
              </p>
              <p className={cssClasses["paragrap"]}>
                Having a lot to store doesn’t mean it all has to go in a
                cupboard. Many bathroom items are better kept out in the open –
                either to be close at hand or are nice to look at. Add a plant
                or two to set a calm mood for the entire room (and they’ll
                thrive in the humid air).
              </p>
              <p className={cssClasses["sub-title"]}>
                Kit your clutter for easy access
              </p>
              <p className={cssClasses["paragrap"]}>
                Even if you have a cabinet ready to swallow the clutter, it’s
                worth resisting a little. Let containers hold kits for different
                activities – home spa, make-up, personal hygiene – to bring out
                or put back at a moment’s notice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={cssClasses["articles-section"]}>
        <div className={cssClasses["articles-header"]}>
          <h2 className={cssClasses['articles-title"']}>Articles</h2>
          <RightArrowBtn
            url="/blogs"
            label="More Articles "
            cssClass="btn-black"
          />
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
    </div>
  );
}

export default BlogPostPage;
