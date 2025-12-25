import Image from "next/image";

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  iconSrc: string;
  iconAlt: string;
  className?: string;
  classNameIcon?: string;
};

const SocialLink = ({
  href,
  ariaLabel,
  iconSrc,
  iconAlt,
  className = "",
  classNameIcon = "",
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center opacity-80 transition hover:opacity-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${className}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={64}
        height={64}
        className={`h-8 w-8 ${classNameIcon}`}
      />
    </a>
  );
};

export default SocialLink;

