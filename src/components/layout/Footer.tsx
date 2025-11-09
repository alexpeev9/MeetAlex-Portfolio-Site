import styles from "@/app/page.module.css";
import { CopyShape } from "@/lib/getCopy";
import { handleKeyboardActivation } from "@/utils/navigation";
import { MouseEvent } from "react";

type FooterProps = {
  footer: CopyShape["footer"];
  linkAriaLabel: string;
  onLinkActivate: (url: string) => void;
};

const Footer = ({ footer, linkAriaLabel, onLinkActivate }: FooterProps) => {
  return (
    <footer className={`${styles.footer} mt-12`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <span className={styles.footerText}>{footer.copyright}</span>
        <div className="flex flex-wrap gap-4">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className={`rounded-lg px-3 py-1 outline-none ${styles.footerLink} ${styles.fadeInUp}`}
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
