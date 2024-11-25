import cssClasses from "./RadioButton.module.css";

function RadioButton({ name, label, value, icon, alt, checked,onCheck,className }) {
  return (
    <div className={`${cssClasses["radio-button-wrapper"]} ${className}`} onClick={onCheck}>
      <label className={cssClasses["container"]}>
        {label}
        <input type="radio" id={name} checked={checked} name={name} />
        <span className={cssClasses.checkmark}></span>
      </label>
      {value && <span>{value}</span>}
      {icon && <img src={icon} alt={alt} />}
    </div>
  );
}

export default RadioButton;
