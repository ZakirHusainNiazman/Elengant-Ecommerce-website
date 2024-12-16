import { useState } from 'react';

import cssClasses from "../components/user-account-page/UserAccountPage.module.css";

import profileImage from "../assets/product-images/profile-image1.svg";
import imageEditicon from "../assets/ui-images/image-edit-icon.svg";
import Profile from "../components/user-account-page/user-profile/Profile.jsx";
import UserAddress from "../components/user-account-page/address/UserAddress.jsx";
import OrderHistory from "../components/user-account-page/order-history/OrderHistory.jsx";
import WishList from '../components/user-account-page/wishlist/WishList.jsx';
import Dropdown from '../ui/dropdown/Dropdown.jsx'

function UserAccountPage() {
  const [activeComponent, setActiveComponent] = useState("account");

  function handleActiveComponent(value) {
    setActiveComponent(value);
  }
  return (
    <div className={`${cssClasses["page-content"]} container`}>
      <h1 className={cssClasses["page-title"]}>My Account</h1>

      <div className={cssClasses["page-body"]}>
        <div className={cssClasses["sidebar"]}>
          <div className={cssClasses["sidebar-header"]}>
            <div className={cssClasses["profile-image-con"]}>
              <img
                className={cssClasses["profile-image"]}
                src={profileImage}
                alt=""
              />
              <img
                className={cssClasses["edit-image-icon"]}
                src={imageEditicon}
                alt=""
              />
            </div>
            <h5 className={cssClasses["user-name"]}>Sofia Havertz</h5>
          </div>
          <div className={cssClasses["sidebar-navigations"]}>
            <button
              onClick={() => handleActiveComponent("account")}
              className={`${cssClasses["navigation-btn"]} ${
                activeComponent === "account" ? cssClasses["active"] : ""
              }`}
              type="button"
            >
              Account
            </button>
            <button
              onClick={() => handleActiveComponent("address")}
              className={`${cssClasses["navigation-btn"]}  ${
                activeComponent === "address" ? cssClasses["active"] : ""
              }`}
              type="button"
            >
              Address
            </button>
            <button
              onClick={() => handleActiveComponent("orders")}
              className={`${cssClasses["navigation-btn"]}  ${
                activeComponent === "orders" ? cssClasses["active"] : ""
              }`}
              type="button"
            >
              Orders
            </button>
            <button
              onClick={() => handleActiveComponent("whishlist")}
              className={`${cssClasses["navigation-btn"]}  ${
                activeComponent === "whishlist" ? cssClasses["active"] : ""
              }`}
              type="button"
            >
              Wsishlist
            </button>
            <button className={cssClasses["navigation-btn"]} type="button">
              Account
            </button>
          </div>
          <Dropdown
            onChangeValue={handleActiveComponent}
            className={`${cssClasses["dropdown"]}`}
            options={[
              { label: "Account", value: "account" },
              { label: "Address", value: "address" },
              { label: "Orders", value: "orders" },
              { label: "Whishlist", value: "whishlist" },
            ]}
          />
        </div>
        {activeComponent === "account" && <Profile />}
        {activeComponent === "address" && <UserAddress />}
        {activeComponent === "orders" && <OrderHistory />}
        {activeComponent === "whishlist" && <WishList />}
      </div>
    </div>
  );
}

export default UserAccountPage;
