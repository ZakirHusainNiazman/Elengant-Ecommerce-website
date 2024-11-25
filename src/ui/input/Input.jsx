import cssClasses from './Input.module.css'

function Input({label,name,placeholder}) {
  return (
    <div className={cssClasses["input-wrapper"]}>
      <label className={cssClasses["label"]} htmlFor={name}>
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