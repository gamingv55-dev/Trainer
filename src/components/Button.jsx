import Icon from './Icon';
import './Button.css';

// variant: 'primary' | 'outline' | 'ghost'
export default function Button({
  children,
  variant = 'primary',
  href,
  icon,
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} className="btn__icon" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
