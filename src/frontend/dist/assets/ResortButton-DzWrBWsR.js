import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports } from "./index-CByRBKgt.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode);
function useIntersectionObserver(ref, options = {}) {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const { threshold = 0.1, rootMargin = "0px", root = null } = options;
  reactExports.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin, root }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, root]);
  return isVisible;
}
const sizeClasses = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5"
};
const variantMap = {
  filled: "btn-3d",
  yellow: "btn-3d-yellow",
  outline: "btn-3d-outline",
  ghost: "btn-3d-outline"
};
function getBaseClasses(variant, size, extra = "") {
  return [variantMap[variant], sizeClasses[size], extra].filter(Boolean).join(" ");
}
const Button = reactExports.forwardRef((props, ref) => {
  const {
    variant = "filled",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;
  const classes = getBaseClasses(variant, size, className);
  if ("href" in rest && rest.href !== void 0) {
    const { href, ...anchorRest } = rest;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        ref,
        href,
        className: classes,
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
      className: classes,
      ...buttonRest,
      children
    }
  );
});
Button.displayName = "Button";
export {
  Button as B,
  Leaf as L,
  useIntersectionObserver as u
};
