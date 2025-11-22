import { getCopy } from "@/lib/getCopy";
import Button from "../ui/Button";

const Header = () => {
  const copy = getCopy();
  const navigation = copy.navigation;
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl transition-shadow duration-300"
      style={{
        background: "var(--surface-header)",
        borderColor: "var(--surface-header-border)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5 lg:px-6 lg:py-6">
        <a
          href="#main"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-(--text-accent) transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
          aria-label={navigation.logoAria}
        >
          <span>{navigation.logoPrimary}</span>
        </a>
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label={navigation.ariaMenu}
        >
          {navigation.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-semibold tracking-[0.3em] text-(--text-nav) uppercase transition duration-300 hover:text-(--text-nav-hover) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${navigation.ariaItemPrefix} ${item.label}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          href={navigation.ctaUrl}
          ariaLabel={`${navigation.ariaItemPrefix} ${navigation.cta}`}
          buttonType="primary"
          size="md"
          className="md:inline-flex"
          isWithIcon={false}
        >
          {navigation.cta}
        </Button>
      </div>
    </header>
  );
};

export default Header;
