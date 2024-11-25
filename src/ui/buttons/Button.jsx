import cssClasses from './Button.module.css';

function Button({ children, className, onClick }) {
  return <button onClick={onClick} className={`${cssClasses["black-btn"]} ${className}`}>{children}</button>;
}

export default Button;