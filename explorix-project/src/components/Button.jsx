// just type rafce
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white, isSelected }) => {

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-7 ${
    px || "px-7"
  }
  ${white || isSelected ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || isSelected)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || isSelected)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
