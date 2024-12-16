import CartNavigationButton from "../../../ui/cart-navigaiton-button/CartNavigationButton";
import cssClasses from "./NavigationButtonsWrapper.module.css";

function NavigationButtonsWrapper({active}) {
  return (
    <div className={cssClasses["navigation"]}>
      <CartNavigationButton
        stepNo="1"
        title="Shopping cart"
        isActive={active === "cart"}
        isChecked={active === "checkout"}
      />
      <CartNavigationButton
        stepNo="2"
        title="Checkout details"
        isActive={active === "checkout"}
        isChecked={active === "ordercomplete"}
      />
      <CartNavigationButton
        stepNo="3"
        title="Shopping cart"
        isActive={active === "ordercomplete"}
      />
    </div>
  );
}

export default NavigationButtonsWrapper