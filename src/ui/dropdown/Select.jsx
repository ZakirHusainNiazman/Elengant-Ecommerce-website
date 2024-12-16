import cssClasses from "./Dropdown.module.css";

function Select({onClick,text}) {
  return (
    <label onClick={onClick} className={cssClasses.select}>
      {text} <span className={cssClasses.chevron}></span>
    </label>
  );
}

export default Select;
