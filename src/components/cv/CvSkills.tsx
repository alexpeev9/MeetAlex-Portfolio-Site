import { CopyShape } from "@/lib/getCopy";

type CvSkillsProps = {
  skills: CopyShape["cv"]["skills"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvSkills = ({ skills, accessibility, sectionId, className }: CvSkillsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-12",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
            {skills.title}
          </h2>
          <p className="text-(--text-secondary)">{skills.intro}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.categories.map((category) => (
            <article
              key={category.title}
              className="space-y-4 rounded-xl border border-(--surface-card-border) bg-white/10 p-7 [backdrop-filter:blur(12px)]"
              aria-label={`${accessibility.skillsCategory}: ${category.title}`}
            >
              <h3 className="text-lg font-semibold text-(--text-primary)">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2" role="list">
                {category.items.map((item) => (
                  <span
                    key={`${category.title}-${item}`}
                    className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-(--accent-tag-bg) px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--text-accent-strong)"
                    role="listitem"
                    aria-label={`${accessibility.skillsTag}: ${item}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvSkills;
