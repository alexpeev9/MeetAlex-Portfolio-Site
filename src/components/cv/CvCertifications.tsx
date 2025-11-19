import Link from "next/link";
import { getCopy } from "../../lib/getCopy";

type CvCertificationsProps = {
  sectionId?: string;
  className?: string;
};

const CvCertifications = ({ sectionId, className }: CvCertificationsProps) => {
  const copy = getCopy();
  const certifications = copy.cv.certifications;
  const accessibility = copy.cv.accessibility;
  const sectionClassName = ["mx-auto w-full max-w-6xl px-4 sm:px-0", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {certifications.title}
        </h2>
        <div className="grid gap-4">
          {certifications.items.map((item) => (
            <div key={`${item.name}-${item.issuer}`} className="space-y-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-(--text-primary)">
                      {item.name}
                    </h3>
                  </div>
                  {item.grade && (
                    <span className="inline-flex items-center rounded-lg bg-(--text-accent)/10 px-3 py-1 text-xs font-semibold whitespace-nowrap text-(--text-accent)">
                      {item.grade}
                    </span>
                  )}
                </div>
                <span className="text-sm text-(--text-accent)">
                  {item.issuer}
                </span>
                <span className="text-xs font-semibold tracking-[0.28em] text-(--text-muted) uppercase">
                  {item.year}
                </span>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
                aria-label={`${accessibility.certificationLink}: ${item.name}`}
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

export default CvCertifications;
