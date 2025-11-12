import { CopyShape } from "@/lib/getCopy";
import Link from "next/link";

type CvCertificationsProps = {
  certifications: CopyShape["cv"]["certifications"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvCertifications = ({
  certifications,
  accessibility,
  sectionId,
  className,
}: CvCertificationsProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-4 sm:px-0", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="h-full space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {certifications.title}
        </h2>
        <div className="grid gap-4">
          {certifications.items.map((item) => (
            <article
              key={`${item.name}-${item.issuer}`}
              className="space-y-3 rounded-xl border border-(--surface-card-border) bg-white/10 p-6 [backdrop-filter:blur(12px)]"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-(--text-primary)">
                  {item.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-(--text-tertiary)">
                  {item.issuer} · {item.year}
                </span>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
                aria-label={`${accessibility.certificationLink}: ${item.name}`}
                tabIndex={0}
              >
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvCertifications;
