import cssClasses from './Input.module.css'

function Input({label,error,type="text",isValid,...props}) {
  return (
    <div className={cssClasses["input-wrapper"]}>
      <label className={cssClasses["label"]} htmlFor={props.name}>
        {label}
      </label>
      <input
        className={cssClasses["input"]}
              type="text"
              name={name}
              id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input