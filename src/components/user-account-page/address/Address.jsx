import cssClasses from "./UserAddress.module.css";
import editIcon from "../../../assets/ui-images/edit-icon.svg";

function Address({ addressType, userName, phoneNumber, address }) {
  return (
    <div className={cssClasses["address"]}>
      <div className={cssClasses["address-header"]}>
        <h5 className={cssClasses["title"]}>{addressType}</h5>
        <button className={cssClasses["edit-btn"]}>
          <img src={editIcon} alt="" /> Edit
        </button>
      </div>
      <p className={cssClasses["address-details"]}>{userName}</p>
      <p className={cssClasses["address-details"]}>{phoneNumber}</p>
      <p className={cssClasses["address-details"]}>{address}</p>
    </div>
  );
}

export default Address;
