import {useState,useEffect} from 'react'
import Select from './Select'

import cssClasses from './Dropdown.module.css';

function Dropdown({ options, label, className = "", onChangeSelected }) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    onChangeSelected(selected);
  }, [selected])
  

  const selectOption = (e) => {
    setSelected(e.target.innerText);
    setMenuShow((oldState) => !oldState);
  };

  const dropdownList = options.map((option, i) => {
    return (
      <li
        key={i}
        className={option === selected ? cssClasses["selected"] : undefined}
        onClick={selectOption}
      >
        {option}
      </li>
    );
  });

  return (
    <>
      <div className={`${cssClasses["dropdown"]} ${className}`}>
        {label && <h5 className={cssClasses["dropdown-label"]}>{label}</h5>}
        <Select
          menuShow={menuShow}
          setMenuShow={setMenuShow}
          selected={selected}
        />
        <ul
          className={`${cssClasses["menu"]} ${
            menuShow && cssClasses["menu-open"]
          }`}
        >
          {dropdownList}
        </ul>
      </div>
    </>
  );
}

export default Dropdown