import { getCopy } from "../../lib/getCopy";

type CvHighlightsProps = {
  sectionId?: string;
  className?: string;
};

const CvHighlights = ({ sectionId, className }: CvHighlightsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const languages = copy.cv.languages;
  const accessibility = copy.cv.accessibility;

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
            {languages.title}
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-(--text-primary)">
              {languages.listTitle}
            </h3>
            <div className="grid gap-4">
              {languages.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 rounded-xl border border-(--surface-card-border) bg-white/10 px-6 py-5 [backdrop-filter:blur(12px)]"
                  aria-label={`${accessibility.languageItem}: ${item.name}`}
                >
                  <span className="text-base font-semibold text-(--text-primary)">
                    {item.name}
                  </span>
                  <span className="text-sm text-(--text-secondary)">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-(--text-primary)">
              {languages.interests.title}
            </h3>
            <div className="flex flex-wrap gap-2" role="list">
              {languages.interests.items.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-(--accent-tag-bg) px-4 py-1 text-xs font-semibold tracking-[0.08em] text-(--text-accent-strong) uppercase"
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
