import cssClasses from "./UserAddress.module.css";
import Address from "./Address";
import AcountBodyWrapper from "../AccountBodyWrapper";

function UserAddress() {
  return (
    <AcountBodyWrapper title="Address">
      <div className={cssClasses["address-con"]}>
        <Address
          addressType="Billing Address"
          userName="Sofia Havertz"
          phoneNumber="(+1) 234 567 890"
          address="345 Long Island, NewYork, United States"
        />
        <Address
          addressType="Billing Address"
          userName="Sofia Havertz"
          phoneNumber="(+1) 234 567 890"
          address="345 Long Island, NewYork, United States"
        />
      </div>
    </AcountBodyWrapper>
  );
}

export default UserAddress;
