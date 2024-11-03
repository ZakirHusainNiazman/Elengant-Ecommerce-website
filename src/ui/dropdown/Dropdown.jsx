import {useState} from 'react'
import Select from './Select'

import cssClasses from './Dropdown.module.css';

function Dropdown({options}) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const selectOption = e => {
    setSelected(e.target.innerText);
    setMenuShow((oldState) => !oldState);
  }

  const dropdownList = options.map((option, i) => (
    <li key={i} onClick={selectOption} >{option}</li>
  ))

  return (
    <>
      <div className={cssClasses["dropdown"]}>
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