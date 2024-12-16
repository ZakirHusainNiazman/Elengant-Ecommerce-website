import cssClasses from "./Features.module.css";

function FeatureCard({ img, title, subTitle,className='' }) {
  return (
    <div className={`${cssClasses["feature-card"]} ${className}`}>
      <img src={img} alt="" className={cssClasses["feature-icon"]} />
      <h5 className={cssClasses["title"]}>{title}</h5>
      <p className={cssClasses["sub-title"]}>{subTitle}</p>
    </div>
  );
}

export default FeatureCard;
