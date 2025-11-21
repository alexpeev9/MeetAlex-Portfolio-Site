import React from "react";

type TextVariant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "body"
  | "bodySmall"
  | "caption"
  | "label";

type TextColor = "primary" | "secondary" | "muted" | "accent" | "accentStrong";

type TextWeight = "normal" | "medium" | "semibold" | "bold";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

type TextProps = {
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  size?: TextSize;
  tracking?: string;
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
};

const getVariantStyles = (variant: TextVariant): string => {
  const variantMap: Record<TextVariant, string> = {
    heading1:
      "text-2xl lg:text-4xl lg:text-[3.5rem] font-semibold text-(--text-primary)",
    heading2:
      "text-2xl md:text-3xl font-semibold text-(--text-primary)",
    heading3: "text-xl font-semibold text-(--text-primary)",
    heading4: "text-lg font-semibold text-(--text-primary)",
    body: "text-base font-normal text-(--text-secondary)",
    bodySmall: "text-sm font-normal text-(--text-secondary)",
    caption:
      "text-xs font-semibold text-(--text-muted) uppercase tracking-[0.28em]",
    label: "text-sm font-semibold text-(--text-accent)",
  };
  return variantMap[variant];
};

const getColorClass = (color: TextColor): string => {
  const colorMap: Record<TextColor, string> = {
    primary: "text-(--text-primary)",
    secondary: "text-(--text-secondary)",
    muted: "text-(--text-muted)",
    accent: "text-(--text-accent)",
    accentStrong: "text-(--text-accent-strong)",
  };
  return colorMap[color];
};

const getWeightClass = (weight: TextWeight): string => {
  const weightMap: Record<TextWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  return weightMap[weight];
};

const getSizeClass = (size: TextSize): string => {
  const sizeMap: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };
  return sizeMap[size];
};

const getDefaultTag = (variant?: TextVariant): "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" => {
  if (!variant) return "span";
  const tagMap: Record<TextVariant, "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"> = {
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
    heading4: "h4",
    body: "p",
    bodySmall: "p",
    caption: "span",
    label: "span",
  };
  return tagMap[variant];
};

const Text: React.FC<TextProps> = ({
  variant,
  color,
  weight,
  size,
  tracking,
  className = "",
  children,
  as,
}) => {
  const tag = as || getDefaultTag(variant);

  const classes = [
    variant && getVariantStyles(variant),
    !variant && color && getColorClass(color),
    !variant && weight && getWeightClass(weight),
    !variant && size && getSizeClass(size),
    tracking && `tracking-[${tracking}]`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(tag, { className: classes }, children);
};

export default Text;

