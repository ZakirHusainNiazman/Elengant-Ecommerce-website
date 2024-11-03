import RightArrowBtn from "../../../ui/right-arrow-btn/RightArrowBtn";

import cssClasses from './Categories.module.css'


export default function Category({ img, title, btnLabel, btnUrl, imgAlt, class_name }) {
  return (
    <div className={cssClasses["category-con"]}>
      <div className={cssClasses[class_name]}>
        <h3 className={cssClasses["category-title"]}>{title}</h3>
        <RightArrowBtn label={btnLabel} url={btnUrl} cssClass="btn-black" />
      </div>
      <img className={cssClasses["category-image"]} src={img} alt={imgAlt} />
    </div>
  );
}
