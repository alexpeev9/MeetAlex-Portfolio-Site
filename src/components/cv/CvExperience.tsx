import Image from "next/image";
import { getCopy } from "../../lib/getCopy";

type CvExperienceProps = {
  sectionId?: string;
  className?: string;
};

const getCompanyLogo = (company: string): string | null => {
  const logoMap: Record<string, string> = {
    "Blackdeep Technologies": "/images/companies/blackdeep-technologies.webp",
    "C4 Nexus Ltd": "/images/companies/c4nexus.jpg",
    "Self Employed": "/images/companies/contract.jpg",
    "University of Veliko Tarnovo": "/images/companies/univeristy.webp",
  };
  return logoMap[company] || null;
};

const CvExperience = ({ sectionId, className }: CvExperienceProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const experience = copy.cv.experience;
  const accessibility = copy.cv.accessibility;

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {experience.title}
        </h2>
        <div className="grid gap-7">
          {experience.roles.map((role, index) => {
            const isLast = index === experience.roles.length - 1;
            const logoPath = getCompanyLogo(role.company);
            return (
              <article
                key={`${role.title}-${role.company}`}
                className="relative space-y-3 pl-9"
                aria-label={accessibility.experience}
              >
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-6 left-[1.4rem] h-full w-px"
                    style={{
                      background: "var(--gradient-timeline)",
                    }}
                  />
                )}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2 left-[0.85rem] h-3 w-3 rounded-full"
                  style={{
                    background: "var(--accent-primary)",
                    boxShadow: "var(--timeline-dot-shadow)",
                  }}
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    {logoPath && (
                      <Image
                        src={logoPath}
                        alt={`${role.company} logo`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-(--text-primary)">
                        {role.title}
                      </h3>
                      {role.link ? (
                        <a
                          href={role.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-(--text-accent)"
                        >
                          {role.company}
                        </a>
                      ) : (
                        <span className="text-sm text-(--text-accent)">
                          {role.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-semibold tracking-[0.28em] text-(--text-muted) uppercase">
                    {role.period}
                  </span>
                </div>
                {role.description && (
                  <p className="text-sm leading-6 text-(--text-secondary)">
                    {role.description}
                  </p>
                )}
                <ul className="list-disc space-y-2 pl-5 text-sm text-(--text-secondary)">
                  {role.highlights.map((highlight) => (
                    <li key={`${role.title}-${highlight}`}>{highlight}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-(--accent-tag-bg) px-4 py-1 text-xs font-semibold tracking-[0.08em] text-(--text-accent-strong) uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CvExperience;
