
import cssClasses from "../components/signup-page/Signup.module.css";
import Button from "../ui/buttons/Button";
import Checkbox from "../ui/input/Checkbox";
import AuthInput from "../ui/input/AuthInput";
import TextButton from "../ui/buttons/TextButton";

function Signup() {
  const checkboxLabel = (
    <p>
      I agree with <TextButton>Privacy Policy</TextButton>
      <TextButton>Terms of Use</TextButton>
    </p>
  );
    return (
      <>
        <header>
          <h1 className={cssClasses.title}>Sign up</h1>
          <p className={cssClasses.sub_title}>
            Already have an account? <TextButton className="primary" to="/signin"> Sign in</TextButton>
          </p>
        </header>
        <form action="" className={cssClasses.form}>
          <AuthInput label="Your name" />
          <AuthInput label="Username" />
          <AuthInput label="Email address" />
          <AuthInput label="Password" />
          <p>
            <Checkbox
              className={cssClasses.checkboxLabel}
              label={checkboxLabel}
            />
          </p>
          <Button>Sign Up</Button>
        </form>
      </>
    );
}

export default Signup