import cssClasses from "./Features.module.css";

function FeatureCard({ img, title, subTitle }) {
  return (
    <div className={cssClasses["feature-card"]}>
      <img src={img} alt="" className={cssClasses["feature-icon"]} />
      <h5 className={cssClasses["feature-title"]}>{title}</h5>
      <p className={cssClasses["feature-sub-title"]}>{subTitle}</p>
    </div>
  );
}

export default FeatureCard;
