import sofaImage from "../../../assets/home-images/sofa-image.svg";
import cuboardImage from "../../../assets/home-images/cuboard-image.svg";
import toasterImage from "../../../assets/home-images/toaster-image.svg";
import Category from "./Category";

import cssClasses from "./Categories.module.css";

function Categories() {
  return (
    <section className={`${cssClasses["categories-section"]} container`}>
      <Category
        img={sofaImage}
        title="Living Room"
        btnLabel="Shop Now"
        class_name="category-header1"
        btnUrl="shop/living"
      />
      <Category
        img={cuboardImage}
        title="Bedroom"
        btnLabel="Shop Now"
        class_name="category-header2"
        btnUrl="shop/bedroom"
      />
      <Category
        img={toasterImage}
        title="Kitchen"
        btnLabel="Shop Now"
        class_name="category-header2"
        btnUrl="shop/kitchen"
      />
    </section>
  );
}

export default Categories