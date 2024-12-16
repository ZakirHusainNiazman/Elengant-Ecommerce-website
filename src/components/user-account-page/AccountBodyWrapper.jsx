import cssClasses from "./UserAccountPage.module.css";

function AccountBodyWrapper({ title,children,className }) {
  return (
    <div className={`${cssClasses["body-wrapper"]} ${className}`}>
      <h5 className={cssClasses["title"]}>{title}</h5>
      {children}
    </div>
  );
}

export default AccountBodyWrapper;
