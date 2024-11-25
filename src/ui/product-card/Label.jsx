import cssClasses from './Label.module.css'

function Label({children,className,type}) {
  return (
    <p
      className={
        type === 'discount'
          ? cssClasses["product-discount-label"]
          : cssClasses["product-type-label"]
      }
    >
      {children}
    </p>
  );
}

export default Label