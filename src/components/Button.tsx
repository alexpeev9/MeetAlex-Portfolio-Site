import React from "react";

type ButtonProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  isExternal?: boolean;
  buttonType?: "primary" | "secondary" | "outline";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  href,
  ariaLabel,
  children,
  isExternal = true,
  buttonType = "primary",
  disabled = false,
}) => {
  const baseClassName = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none";

  const buttonClassName = [
    baseClassName,
    buttonType === "primary" &&
      (disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-(--accent-primary) text-white"),
    buttonType === "outline" &&
      (disabled
        ? "border border-gray-300 bg-transparent text-gray-400 cursor-not-allowed"
        : "border border-(--accent-primary) bg-transparent text-(--accent-primary)"),
  ]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return (
      <span className={buttonClassName} aria-label={ariaLabel} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={buttonClassName}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default Button;
