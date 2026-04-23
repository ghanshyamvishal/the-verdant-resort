import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

type ButtonVariant = "filled" | "outline" | "ghost" | "yellow";
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
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

const variantMap: Record<ButtonVariant, string> = {
  filled: "btn-3d",
  yellow: "btn-3d-yellow",
  outline: "btn-3d-outline",
  ghost: "btn-3d-outline",
};

function getBaseClasses(variant: ButtonVariant, size: ButtonSize, extra = "") {
  return [variantMap[variant], sizeClasses[size], extra]
    .filter(Boolean)
    .join(" ");
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

  const classes = getBaseClasses(variant, size, className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
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
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
