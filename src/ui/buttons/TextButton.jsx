import { NavLink } from "react-router-dom";

import cssClasses from "./TextButton.module.css";

function TextButton({
  children,
  isActive,
  to,
  className,
  type = "link",
  ...props
}) {
  return (
    <>
      {type === "link" ? (
        <NavLink
          className={({ isActive }) =>
            `${cssClasses.btn} ${className ? className : ""} ${
              isActive ? cssClasses["active"] : ""
            }`
          }
          to={to}
        >
          {children}
        </NavLink>
      ) : (
        <button
          {...props}
          className={`${cssClasses.btn} ${
            isActive ? cssClasses["active"] : ""
          } ${className ? className : ""}`}
          type="button"
        >
          {children}
        </button>
      )}
    </>
  );
}

export default TextButton;
