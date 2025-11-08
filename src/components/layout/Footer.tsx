import styles from "@/app/page.module.css";
import { CopyShape } from "@/lib/getCopy";
import { CSSProperties, MouseEvent } from "react";
import { handleKeyboardActivation } from "@/utils/navigation";

type FooterProps = {
  footer: CopyShape["footer"];
  linkAriaLabel: string;
  onLinkActivate: (url: string) => void;
  isMounted: boolean;
  getDelayStyle: (
    index?: number,
    baseDelay?: number
  ) => CSSProperties | undefined;
};

const Footer = ({
  footer,
  linkAriaLabel,
  onLinkActivate,
  isMounted,
  getDelayStyle,
}: FooterProps) => {
  return (
    <footer className={`${styles.footer} mt-12`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <span className={styles.footerText}>{footer.copyright}</span>
        <div className="flex flex-wrap gap-4">
          {footer.links.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              className={`rounded-lg px-3 py-1 outline-none ${styles.footerLink} ${
                isMounted ? styles.fadeInUp : ""
              }`}
              style={getDelayStyle(index, 0.12)}
              aria-label={`${linkAriaLabel}: ${link.label}`}
              tabIndex={0}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                onLinkActivate(link.url);
              }}
              onKeyDown={(event) =>
                handleKeyboardActivation(event, () => onLinkActivate(link.url))
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
