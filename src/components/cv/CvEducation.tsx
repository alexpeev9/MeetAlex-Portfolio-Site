import { CopyShape } from "@/lib/getCopy";
import Link from "next/link";

type CvEducationProps = {
  education: CopyShape["cv"]["education"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvEducation = ({
  education,
  accessibility,
  sectionId,
  className,
}: CvEducationProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-4 sm:px-0", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {education.title}
        </h2>
        <div className="grid gap-4">
          {education.items.map((item) => (
            <div key={`${item.degree}-${item.school}`} className="space-y-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-(--text-primary)">
                  {item.degree}
                </h3>
                <span className="text-sm text-(--text-accent)">
                  {item.field}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-(--text-muted)">
                  {item.period}
                </span>
                <p className="text-sm text-(--text-secondary)">{item.school}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
                aria-label={`${accessibility.educationLink}: ${item.linkLabel}`}
              >
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvEducation;
