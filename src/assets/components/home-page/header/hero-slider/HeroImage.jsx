import HeroSlider from './HeroSlider';

import cssClasses from "./HeroImage.module.css";

function HeroImage() {
    return <div className={cssClasses["hero-images-con"]}>
      <HeroSlider />
  </div>;
}

export default HeroImage