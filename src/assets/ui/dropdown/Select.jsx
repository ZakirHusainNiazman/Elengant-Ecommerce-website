import React from 'react'

import cssClasses from "./Dropdown.module.css";

function Select({menuShow,setMenuShow,selected}) {
  return (
    <div
      className={`${cssClasses["select"]} ${
        menuShow && cssClasses["select-clicked"]
      }`}
      onClick={() => setMenuShow((oldState) => !oldState)}
    >
      <span className={cssClasses["selected"]}>{selected}</span>
      <div
        className={`${cssClasses["caret"]} ${
          menuShow && cssClasses["caret-rotate"]
        }`}
      ></div>
    </div>
  );
}

export default Select