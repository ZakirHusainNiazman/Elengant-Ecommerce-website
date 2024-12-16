import { useState } from 'react';
import cssClasses from './AuthInput.module.css';

function AuthInput({ label, type = "text" }) {
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }
  return (
    <div className={cssClasses["input-wrapper"]}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={cssClasses["input"]}
        required
      />
      <div className={cssClasses["underline-div"]}></div>
      <label className={cssClasses["label"]}>{label}</label>
    </div>
  );
}

export default AuthInput