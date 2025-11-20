import React from "react";

type ButtonProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  isExternal?: boolean;
  buttonType?: "primary" | "secondary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  href,
  ariaLabel,
  children,
  isExternal = true,
  buttonType = "primary",
}) => {
  const buttonClassName = [
    buttonType === "primary" &&
      "inline-flex items-center justify-center rounded-lg bg-(--accent-primary) px-4 py-2 text-sm font-medium text-white focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none",
    buttonType === "outline" &&
      "inline-flex items-center justify-center rounded-lg border border-(--accent-primary) bg-transparent px-4 py-2 text-sm font-medium text-(--accent-primary) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none",
  ]
    .filter(Boolean)
    .join(" ");

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
