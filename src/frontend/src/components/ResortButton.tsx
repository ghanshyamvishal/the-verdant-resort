import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  filled: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-text-primary)",
    border: "2px solid var(--color-secondary)",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-primary)",
    border: "2px solid var(--color-primary)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-text-secondary)",
    border: "2px solid transparent",
  },
};

const variantHoverStyles: Record<ButtonVariant, React.CSSProperties> = {
  filled: {
    backgroundColor: "var(--color-secondary-dark)",
    borderColor: "var(--color-secondary-dark)",
  },
  outline: {
    backgroundColor: "var(--color-primary)",
    color: "#fff",
  },
  ghost: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
};

function getBaseClasses(size: ButtonSize) {
  return `inline-flex items-center justify-center font-body font-semibold rounded-resort transition-smooth hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]}`;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = "filled",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;

  const baseClass = getBaseClasses(size);
  const style = variantStyles[variant];

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    Object.assign(
      (e.currentTarget as HTMLElement).style,
      variantHoverStyles[variant],
    );
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    Object.assign((e.currentTarget as HTMLElement).style, style);
  };

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${baseClass} ${className}`}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseClass} ${className}`}
      {...buttonRest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
