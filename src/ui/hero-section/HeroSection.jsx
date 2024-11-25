import Path from "./Path";

import cssClasses from './HeroSection.module.css';
function HeroSection({title,subTitle,image,path}) {
  return (
    <>
      <div className={`${cssClasses["hero-section"]}`}>
        <div className={cssClasses["hero-content"]}>
          <Path array={path} />
          <h4 className={cssClasses["hero-title"]}>{title}</h4>
          <p className={cssClasses["hero-sub-title"]}>{subTitle}</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;