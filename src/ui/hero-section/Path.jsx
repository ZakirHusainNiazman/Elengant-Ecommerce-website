import cssClasses from './Path.module.css'

import greaterThanIcon from "../../assets/product-images/greater-than-icon.svg";

function Path({ array }) {
  return (
    <ul
      className={`${cssClasses["page-path-con"]} ${cssClasses["container"]} `}
    >
      {array.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          {index+1<array.length &&<img src={greaterThanIcon} alt="" />}
        </li>
      ))}
    </ul>
  );
}

export default Path