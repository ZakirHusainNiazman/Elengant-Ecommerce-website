import cssClasses from './PriceWithLabel.module.css';

function PriceWithLabel({label,price,isThick}) {
  return (
    <p className={`${cssClasses["price-wrapper"]} ${isThick ? cssClasses['thick']: undefined}`}>
      <span className={cssClasses["label"]}>{label}</span>
      <span className={cssClasses["price"]}>{price}</span>
    </p>
  );
}

export default PriceWithLabel