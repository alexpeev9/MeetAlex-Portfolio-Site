import { getCopy } from "@/lib/getCopy";
import Text from "../ui/Text";

const Footer = () => {
  const footer = getCopy().footer;
  return (
    <footer className="mt-12 border-t border-(--surface-card-border) bg-[var(--gradient-footer)]">
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-center gap-6 px-6 py-10 text-sm lg:items-center lg:justify-between lg:px-0">
        <Text
          variant="bodySmall"
          className="hidden text-(--text-footer) lg:block"
        >
          {footer.copyright}
        </Text>
        <div className="flex flex-row flex-wrap gap-4">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-1 text-(--text-footer) transition duration-300 hover:-translate-y-0.5 hover:text-(--text-accent-strong) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${link.label}`}
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
