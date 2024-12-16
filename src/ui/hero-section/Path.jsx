import cssClasses from './Path.module.css'

import greaterThanIcon from "../../assets/product-images/greater-than-icon.svg";

function Path({ array,className }) {
  return (
    <ul
      className={`${cssClasses["page-path-con"]} ${className}`}
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