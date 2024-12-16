import { useState } from "react";
import cssClasses from "./Dropdown.module.css";
import Select from "./Select";

function Dropdown({ selectedOption, options,onChangeValue,className }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(
    selectedOption ? selectedOption : options[0].label
  );
  const [selectedItemValue, setSelectedItemValue] = useState(options[0].value);

  function toggleShowMenu() {
    setShowMenu((prevState) => !prevState);
  }

  function handleSelect(e) {
    setSelected(e.target.innerText);
    setSelectedItemValue(e.target.dataset.value);
    onChangeValue(e.target.dataset.value);
    toggleShowMenu();
  }


  return (
    <div className={`${cssClasses.dropdown} ${className}`}>
      <Select text={selected} onClick={toggleShowMenu} />
      {showMenu && (
        <ul className={cssClasses.dropdownMenu}>
          {options.map((item) => (
            <li
              key={item.label}
              data-value={item.value}
              onClick={handleSelect}
              className={`${cssClasses.menuItem} ${
                selectedItemValue === item.value ? cssClasses.selected : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
