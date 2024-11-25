import cssClasses from "../ProductPage.module.css";

function TabButton({children,isSelected,onSelect}) {
  return (
    <li>
          <button onClick={onSelect} className={isSelected ? cssClasses.active : undefined}>{ children }</button>
    </li>
  );
}

export default TabButton