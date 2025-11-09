"use client";

import styles from "@/app/page.module.css";
import { getCopy } from "@/lib/getCopy";
import { handleKeyboardActivation } from "@/utils/navigation";
import { MouseEvent } from "react";

type HeaderProps = {
  onNavigate: (targetId: string) => void;
};

const Header = ({ onNavigate }: HeaderProps) => {
  const handleLogoClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNavigate("hero");
  };
  const copy = getCopy();
  const navigation = copy.navigation;
  return (
    <header className={`sticky top-0 z-40 ${styles.headerBar}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
        <button
          type="button"
          className={`flex items-center gap-2 text-lg font-semibold tracking-tight transition-transform duration-300 hover:-translate-y-0.5 ${styles.logoButton} ${styles.fadeInUp}`}
          aria-label={navigation.logoAria}
          onClick={handleLogoClick}
          onKeyDown={(event) =>
            handleKeyboardActivation(event, () => onNavigate("hero"))
          }
        >
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${styles.logoBadge}`}
          >
            {navigation.logoSecondary}
          </span>
          <span>{navigation.logoPrimary}</span>
        </button>
        <nav
          className={`hidden items-center gap-10 md:flex ${styles.fadeInUp}`}
          aria-label={navigation.ariaMenu}
        >
          {navigation.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`text-sm font-semibold uppercase tracking-[0.3em] transition duration-300 ${styles.navLink} ${styles.fadeInUp}`}
              aria-label={`${navigation.ariaItemPrefix} ${item.label}`}
              onClick={() => onNavigate(item.id)}
              onKeyDown={(event) =>
                handleKeyboardActivation(event, () => onNavigate(item.id))
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className={`hidden rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 md:inline-flex ${styles.ctaButton} ${styles.fadeInUp}`}
          aria-label={`${navigation.ariaItemPrefix} ${navigation.cta}`}
          onClick={() => onNavigate("contact")}
          onKeyDown={(event) =>
            handleKeyboardActivation(event, () => onNavigate("contact"))
          }
        >
          {navigation.cta}
        </button>
      </div>
    </header>
  );
};

export default Header;
