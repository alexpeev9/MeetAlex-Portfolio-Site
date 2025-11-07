import { CSSProperties } from 'react';
import styles from '@/app/hire/page.module.css';
import { CopyShape } from '@/lib/getCopy';
import InteractiveLink from '@/components/ui/InteractiveLink';

type HireRolesProps = {
  roles: CopyShape['hire']['roles'];
  accessibility: CopyShape['hire']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
  onRoleActivate: (url: string) => void;
};

const HireRoles = ({ roles, accessibility, isMounted, getDelayStyle, onRoleActivate }: HireRolesProps) => {
  return (
    <section className={`${styles.section} space-y-12`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{roles.title}</h2>
        <p className="max-w-3xl text-lg leading-7 text-slate-300">{roles.description}</p>
      </div>
      <div className="grid gap-6">
        {roles.positions.map((position, index) => (
          <article
            key={position.title}
            className={`${styles.roleCard} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.18)}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
              <span className="font-semibold uppercase tracking-[0.25em] text-sky-300">{position.type}</span>
              <span>{position.location}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-50">{position.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{position.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {position.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <InteractiveLink
                href={position.ctaUrl}
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
                aria-label={`${accessibility.roleCta}: ${position.title}`}
                onActivate={() => onRoleActivate(position.ctaUrl)}
              >
                {position.ctaLabel}
              </InteractiveLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HireRoles;
