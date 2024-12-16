import cssClasses from './RemoveBtn.module.css'

import closeIcon from "../../assets/home-images/close.svg";


function RemoveBtn({title,onRemove}) {
  return (
    <p className={cssClasses["item-delete-btn"]} onClick={onRemove}>
          <img src={closeIcon} alt="" />
          {title && <span>{ title }</span>}
    </p>
  );
}

export default RemoveBtn