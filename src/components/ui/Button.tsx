import React from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  isExternal?: boolean;
  buttonType?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  isWithIcon?: boolean;
  download?: string;
};

const getSizeStyles = (size: ButtonSize): string => {
  const sizeMap: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-8 py-3 text-sm",
  };
  return sizeMap[size];
};

const getVariantStyles = (
  variant: ButtonVariant,
  disabled: boolean,
): string => {
  if (disabled) {
    return "bg-gray-300 text-gray-500 cursor-not-allowed";
  }

  const variantMap: Record<ButtonVariant, string> = {
    primary:
      "bg-(--accent-primary) text-(--action-text) transition duration-300 hover:-translate-y-0.5 hover:bg-(--accent-primary-hover)",
    secondary:
      "bg-white border border-(--accent-primary) text-(--accent-primary) transition duration-300 hover:-translate-y-0.5 hover:border-(--accent-primary-hover) hover:text-(--accent-primary-hover)",
    outline:
      "border border-(--accent-primary) bg-transparent text-(--accent-primary) transition duration-300 hover:-translate-y-0.5 hover:bg-(--accent-primary)/10",
  };
  return variantMap[variant];
};

const getBorderRadius = (variant: ButtonVariant): string => {
  if (variant === "outline") {
    return "rounded-lg";
  }
  return "rounded-full";
};

const Button: React.FC<ButtonProps> = ({
  href,
  ariaLabel,
  children,
  isExternal = true,
  buttonType = "primary",
  size = "md",
  disabled = false,
  isWithIcon = false,
  className = "",
  download,
}) => {
  const baseClassName =
    "inline-flex items-center justify-center font-semibold focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none";

  const buttonClassName = [
    baseClassName,
    getSizeStyles(size),
    getBorderRadius(buttonType),
    getVariantStyles(buttonType, disabled),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return (
      <span
        className={buttonClassName}
        aria-label={ariaLabel}
        aria-disabled="true"
      >
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
        download: download,
      })}
      className={buttonClassName}
      aria-label={ariaLabel}
    >
      {children}
      {isWithIcon && (
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
};

export default Button;
