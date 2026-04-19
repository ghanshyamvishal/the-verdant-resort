import { r as reactExports, j as jsxRuntimeExports } from "./index-eJEhzJ6C.js";
const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base"
};
const variantStyles = {
  filled: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-text-primary)",
    border: "2px solid var(--color-secondary)"
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-primary)",
    border: "2px solid var(--color-primary)"
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-text-secondary)",
    border: "2px solid transparent"
  }
};
const variantHoverStyles = {
  filled: {
    backgroundColor: "var(--color-secondary-dark)",
    borderColor: "var(--color-secondary-dark)"
  },
  outline: {
    backgroundColor: "var(--color-primary)",
    color: "#fff"
  },
  ghost: {
    backgroundColor: "rgba(0,0,0,0.05)"
  }
};
function getBaseClasses(size) {
  return `inline-flex items-center justify-center font-body font-semibold rounded-resort transition-smooth hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]}`;
}
const Button = reactExports.forwardRef((props, ref) => {
  const {
    variant = "filled",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;
  const baseClass = getBaseClasses(size);
  const style = variantStyles[variant];
  const handleMouseEnter = (e) => {
    Object.assign(
      e.currentTarget.style,
      variantHoverStyles[variant]
    );
  };
  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, style);
  };
  if ("href" in rest && rest.href !== void 0) {
    const { href, ...anchorRest } = rest;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        ref,
        href,
        style,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: `${baseClass} ${className}`,
        ...anchorRest,
        children
      }
    );
  }
  const buttonRest = rest;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      style,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: `${baseClass} ${className}`,
      ...buttonRest,
      children
    }
  );
});
Button.displayName = "Button";
export {
  Button as B
};
