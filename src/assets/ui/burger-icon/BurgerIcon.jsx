import cssClasses from './BurgerIcon.module.css';

function BurgerIcon({handleOpenNav}) {
  return (
    <label
      onChange={handleOpenNav}
      className={cssClasses["burger"]}
      htmlFor="burger"
    >
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default BurgerIcon