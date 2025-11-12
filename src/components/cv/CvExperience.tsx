import { CopyShape } from "@/lib/getCopy";

type CvExperienceProps = {
  experience: CopyShape["cv"]["experience"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvExperience = ({ experience, accessibility, sectionId, className }: CvExperienceProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {experience.title}
        </h2>
        <div className="grid gap-7">
          {experience.roles.map((role, index) => {
            const isLast = index === experience.roles.length - 1;
            return (
            <article
              key={`${role.title}-${role.company}`}
              className="relative space-y-3 pl-9"
              aria-label={accessibility.experience}
            >
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[1.4rem] top-6 h-full w-px"
                  style={{
                    background: "var(--gradient-timeline)",
                  }}
                />
              )}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[0.85rem] top-2 h-3 w-3 rounded-full"
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "var(--timeline-dot-shadow)",
                }}
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary)">
                    {role.title}
                  </h3>
                  <p className="text-sm text-(--text-accent)">
                    {role.company}
                  </p>
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-(--text-muted)"
                >
                  {role.period}
                </span>
              </div>
              <p className="text-sm leading-6 text-(--text-secondary)">
                {role.description}
              </p>
              <ul
                className="list-disc space-y-2 pl-5 text-sm text-(--text-secondary)"
              >
                {role.highlights.map((highlight) => (
                  <li key={`${role.title}-${highlight}`}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-(--accent-tag-bg) px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--text-accent-strong)"
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
