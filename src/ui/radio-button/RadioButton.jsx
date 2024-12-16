import cssClasses from "./RadioButton.module.css";

function RadioButton({ name, label,price, value, icon, alt, checked,onCheck,className }) {
  return (
    <div
      className={`${cssClasses["radio-button-wrapper"]} ${
        checked ? cssClasses["checked"] : ""
      } ${className}`}
      onClick={onCheck}
    >
      <label className={cssClasses["container"]}>
        {label}
        <input type="radio" value={value} id={name} checked={checked} name={name} />
        <span className={cssClasses.checkmark}></span>
      </label>
      {price && <span>{price}</span>}
      {icon && <img src={icon} alt={alt} />}
    </div>
  );
}

export default RadioButton;
