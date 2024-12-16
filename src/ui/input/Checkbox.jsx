import cssClasses from './Checkbox.module.css';

function Checkbox({ label, labelClass }) {
  return (
    <div className={cssClasses["checkbox"]}>
      <input type="checkbox" />
      <label htmlFor="" className={`${cssClasses.label} ${labelClass}`}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox