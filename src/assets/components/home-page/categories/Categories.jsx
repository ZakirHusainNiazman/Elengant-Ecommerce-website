import sofaImage from "../../../../../public/images/sofa-image.svg";
import cuboardImage from "../../../../../public/images/cuboard-image.svg";
import toasterImage from "../../../../../public/images/toaster-image.svg";
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
      />
      <Category
        img={cuboardImage}
        title="Bedroom"
        btnLabel="Shop Now"
        class_name="category-header2"
      />
      <Category
        img={toasterImage}
        title="Kitchen"
        btnLabel="Shop Now"
        class_name="category-header2"
      />
    </section>
  );
}

export default Categories