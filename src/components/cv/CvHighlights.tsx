import { CopyShape } from "@/lib/getCopy";

type CvHighlightsProps = {
  languages: CopyShape["cv"]["languages"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvHighlights = ({ languages, accessibility, sectionId, className }: CvHighlightsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-6 pt-16 lg:px-12",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-[color:var(--surface-card-border)] bg-[var(--surface-card)] p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            {languages.title}
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {languages.listTitle}
            </h3>
            <div className="grid gap-4">
              {languages.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 rounded-xl border border-[color:var(--surface-card-border)] bg-white/10 px-6 py-5 [backdrop-filter:blur(12px)]"
                  aria-label={`${accessibility.languageItem}: ${item.name}`}
                >
                  <span className="text-base font-semibold text-[var(--text-primary)]">
                    {item.name}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {languages.interests.title}
            </h3>
            <div className="flex flex-wrap gap-2" role="list">
              {languages.interests.items.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-primary)] bg-[var(--accent-tag-bg)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-accent-strong)]"
                  role="listitem"
                  aria-label={`${accessibility.interestTag}: ${interest}`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvHighlights;
