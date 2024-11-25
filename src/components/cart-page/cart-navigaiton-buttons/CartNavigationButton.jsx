import cssClasses from "./CartNavigationButton.module.css";
import checkIcon from "../../../assets/ui-images/check-mark-icon.svg";

function CarNavigationButton({ stepNo, title, isActive,isChecked }) {
  return (
    <div
        className={`
            ${cssClasses["cart-navigation-btn"]} 
            ${isActive ? cssClasses["active"] : undefined}
            ${isChecked ? cssClasses["checked"] : undefined}
        `}
    >
      <span className={cssClasses["step-no"]}>{isChecked ? <img src={checkIcon} alt="check icon" /> : stepNo}</span>
      <span className={cssClasses["msg"]}>{title}</span>
    </div>
  );
}

export default CarNavigationButton;
