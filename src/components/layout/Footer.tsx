import styles from "@/app/page.module.css";
import { CopyShape } from "@/lib/getCopy";
import { CSSProperties } from "react";
import InteractiveLink from "../ui/InteractiveLink";

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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <span className="text-slate-500">{footer.copyright}</span>
        <div className="flex flex-wrap gap-4">
          {footer.links.map((link, index) => (
            <InteractiveLink
              key={link.label}
              href={link.url}
              className={`text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:text-sky-300 ${
                isMounted ? styles.fadeInUp : ""
              }`}
              style={getDelayStyle(index, 0.12)}
              aria-label={`${linkAriaLabel}: ${link.label}`}
              onActivate={() => onLinkActivate(link.url)}
            >
              {link.label}
            </InteractiveLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
