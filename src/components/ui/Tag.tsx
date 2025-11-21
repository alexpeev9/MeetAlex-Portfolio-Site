import React from "react";

type TagVariant = "default" | "badge";
type TagSize = "sm" | "md";

type TagProps = {
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
  children: React.ReactNode;
};

const getVariantStyles = (variant: TagVariant): string => {
  const variantMap: Record<TagVariant, string> = {
    default:
      "rounded-full border border-(--accent-primary) bg-(--accent-tag-bg) px-4 py-1 text-xs font-semibold tracking-[0.08em] text-(--text-accent-strong) uppercase",
    badge:
      "rounded-lg bg-(--text-accent)/10 px-3 py-1 text-xs font-semibold text-(--text-accent)",
  };
  return variantMap[variant];
};

const Tag: React.FC<TagProps> = ({
  variant = "default",
  className = "",
  children,
}) => {
  const classes = [getVariantStyles(variant), className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};

export default Tag;

