import { Outlet } from "react-router-dom";
import image from "../../../assets/login-images/login-image.svg";

import cssClasses from "./AuthLayout.module.css";

function AuthLayout() {
    return (
      <div className={cssClasses.wrapper}>
        <img className={cssClasses.image} src={image} alt="" />
        <div className={cssClasses.content}>
          <Outlet />
        </div>
      </div>
    );
}

export default AuthLayout