import cssClasses from "../components/signin-page/Signin.module.css";
import Button from "../ui/buttons/Button";
import TextButton from "../ui/buttons/TextButton";
import AuthInput from "../ui/input/AuthInput";

function Signin() {
  return (
    <>
      <header>
        <h1 className={cssClasses.title}>Sign In</h1>
        <p className={cssClasses.sub_title}>
          Already have an account?
          <TextButton className="primary" to="/signup"> Sign Up</TextButton>
        </p>
        <form action="" className={cssClasses.form}>
          <AuthInput label="Your usernam or email address" />
          <AuthInput label="Password" />
          <Button>Sign In</Button>
        </form>
      </header>
    </>
  );
}

export default Signin;
