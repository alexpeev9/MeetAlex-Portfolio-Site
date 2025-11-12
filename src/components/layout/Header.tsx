"use client";

import { getCopy } from "@/lib/getCopy";
import { handleKeyboardActivation, scrollToId } from "@/utils/navigation";
import { MouseEvent } from "react";

const Header = () => {
  const sectionIds: Record<string, string> = {
    projects: "cv-projects",
    process: "cv-skills",
    about: "cv-services",
  };

  const handleNavigate = (targetId: string) => {
    const mappedId = sectionIds[targetId] ?? targetId;
    scrollToId(mappedId);
  };

  const handleLogoClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    scrollToId("hero");
  };

  const copy = getCopy();
  const navigation = copy.navigation;
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-lg"
      style={{
        background: "var(--surface-header)",
        borderColor: "var(--surface-header-border)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
        <button
          type="button"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-(--text-accent) transition duration-300 hover:-translate-y-0.5"
          aria-label={navigation.logoAria}
          onClick={handleLogoClick}
          onKeyDown={(event) =>
            handleKeyboardActivation(event, () => handleNavigate("hero"))
          }
        >
          <span className="rounded-full bg-(--accent-muted) px-3 py-1 text-sm font-semibold text-(--badge-text)">
            {navigation.logoSecondary}
          </span>
          <span>{navigation.logoPrimary}</span>
        </button>
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label={navigation.ariaMenu}
        >
          {navigation.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-(--text-nav) transition duration-300 hover:text-(--text-nav-hover) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${navigation.ariaItemPrefix} ${item.label}`}
              onClick={() => handleNavigate(item.id)}
              onKeyDown={(event) =>
                handleKeyboardActivation(event, () => handleNavigate(item.id))
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="hidden rounded-full bg-(--accent-primary) px-5 py-3 text-sm font-semibold text-(--action-text) transition duration-300 hover:-translate-y-0.5 hover:bg-(--accent-primary-hover) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) md:inline-flex"
          aria-label={`${navigation.ariaItemPrefix} ${navigation.cta}`}
          onClick={() => handleNavigate("contact")}
          onKeyDown={(event) =>
            handleKeyboardActivation(event, () => handleNavigate("contact"))
          }
        >
          {navigation.cta}
        </button>
      </div>
    </header>
  );
};

export default Header;
