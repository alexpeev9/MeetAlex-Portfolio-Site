import { CSSProperties, MouseEvent } from 'react';
import styles from '@/app/page.module.css';
import { CopyShape } from '@/lib/getCopy';
import { handleKeyboardActivation } from '@/utils/navigation';

type HeaderProps = {
  navigation: CopyShape['navigation'];
  onNavigate: (targetId: string) => void;
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const Header = ({ navigation, onNavigate, isMounted, getDelayStyle }: HeaderProps) => {
  const handleLogoClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNavigate('hero');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
        <button
          type="button"
          className={`flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-100 transition-transform duration-300 hover:-translate-y-0.5 hover:text-sky-300 ${
            isMounted ? styles.fadeInUp : ''
          }`}
          aria-label={navigation.logoAria}
          onClick={handleLogoClick}
          onKeyDown={(event) => handleKeyboardActivation(event, () => onNavigate('hero'))}
        >
          <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-semibold text-sky-300">
            {navigation.logoSecondary}
          </span>
          <span>{navigation.logoPrimary}</span>
        </button>
        <nav
          className={`hidden items-center gap-10 md:flex ${isMounted ? styles.fadeInUp : ''}`}
          aria-label={navigation.ariaMenu}
          style={getDelayStyle(0, 0.2)}
        >
          {navigation.items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`text-sm font-semibold uppercase tracking-[0.3em] text-slate-300 transition duration-300 hover:text-sky-300 ${
                isMounted ? styles.fadeInUp : ''
              }`}
              style={getDelayStyle(index, 0.24)}
              aria-label={`${navigation.ariaItemPrefix} ${item.label}`}
              onClick={() => onNavigate(item.id)}
              onKeyDown={(event) => handleKeyboardActivation(event, () => onNavigate(item.id))}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className={`hidden rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 md:inline-flex ${
            isMounted ? styles.fadeInUp : ''
          }`}
          style={getDelayStyle(0, 0.32)}
          aria-label={`${navigation.ariaItemPrefix} ${navigation.cta}`}
          onClick={() => onNavigate('contact')}
          onKeyDown={(event) => handleKeyboardActivation(event, () => onNavigate('contact'))}
        >
          {navigation.cta}
        </button>
      </div>
    </header>
  );
};

export default Header;
