import { motion } from 'framer-motion';

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
      <motion.span
        animate={{rotate:menuShow ? 0 : 180}}
      >&#9650;</motion.span>
    </div>
  );
}

export default Select