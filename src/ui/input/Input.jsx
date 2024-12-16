import cssClasses from './Input.module.css'

function Input({label,error,type="text",isValid,...props}) {
  return (
    <div className={cssClasses["input-wrapper"]}>
      <label className={cssClasses["label"]} htmlFor={props.name}>
        {label}
      </label>
      <input
        className={`${cssClasses["input"]} ${
          error && cssClasses["is-invalid"]
        } ${
          isValid && cssClasses["is-valid"]
        }`}
        type={type}
        {...props}
        id={props.name}
      />
      {error && <p className={cssClasses["error"]}>{error}</p>}
    </div>
  );
}

export default Input