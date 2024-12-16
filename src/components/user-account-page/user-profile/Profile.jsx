
import cssClasses from "./Profile.module.css";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/buttons/Button";
import AcountBodyWrapper from "../AccountBodyWrapper";

function Profile() {
    return (
      <AcountBodyWrapper className={cssClasses['wrapper']} title="Account Details">
        <form action="">
          <div className={cssClasses["account-info"]}>
            <h5 className={cssClasses["info-title"]}>Account Details</h5>
            <Input label="First name *" placeholder="First name" />
            <Input label="last name *" placeholder="Last name" />
            <Input label="Display name *" placeholder="Display name *" />
            <p className={cssClasses["name-msg"]}>
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
            <Input label="First Name" placeholder="First name" />
          </div>
          <div className={cssClasses["account-info"]}>
            <h5 className={cssClasses["info-title"]}>Password</h5>
            <Input label="Old password" placeholder="Old password" />
            <Input label="New password" placeholder="New password" />
            <Input
              label="REPEAT NEW PASSWORD"
              placeholder="Repeat new password"
            />
          </div>
          <Button className={cssClasses["submit-btn"]}>Save changes</Button>
        </form>
      </AcountBodyWrapper>
    );
}

export default Profile;
