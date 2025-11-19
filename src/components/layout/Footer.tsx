import { getCopy } from "@/lib/getCopy";

type FooterProps = {
  linkAriaLabel: string;
};

const Footer = ({ linkAriaLabel }: FooterProps) => {
  const footer = getCopy().footer;
  const navigation = getCopy().navigation;
  return (
    <footer
      className="mt-12 border-t"
      style={{
        borderColor: "var(--surface-card-border)",
        background: "var(--gradient-footer)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-6 px-6 py-10 text-sm lg:items-center lg:justify-between lg:px-0">
        <a
          href="https://calendly.com/alexpeev9/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-(--accent-primary) px-5 py-2 text-sm font-semibold text-(--action-text) transition duration-300 hover:-translate-y-0.5 hover:bg-(--accent-primary-hover) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) md:inline-flex"
          aria-label={`${navigation.ariaItemPrefix} ${navigation.cta}`}
        >
          {navigation.cta}
        </a>
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-3 py-1 text-(--text-footer) transition duration-300 hover:-translate-y-0.5 hover:text-(--text-accent-strong) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${linkAriaLabel}: ${link.label}`}
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
