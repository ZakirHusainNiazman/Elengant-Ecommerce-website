import cssClasses from "./GridButton.module.css";

function GridButton({isActive,children,className="",...props}) {
  return (
    <button {...props} type="button" className={`${cssClasses['btn']} ${isActive ? cssClasses['active'] : ''} ${className}`}>
      {children}
    </button>
  );
}

export default GridButton;